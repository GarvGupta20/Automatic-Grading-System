import React, { useState } from "react";
import { Button, Dialog, DialogActions, DialogTitle } from "@material-ui/core";
import {useDispatch} from 'react-redux';
import PublishIcon from "@material-ui/icons/Publish";
import useCourses from "../../customHook/useCourses";
import { useHistory, useParams } from "react-router-dom";

export default function PublishButton() {
  const [open, setOpen] = useState(false);
  const { id } = useParams();
  const dispatch = useDispatch();
  const course = useCourses(id);
  let history = useHistory();
  const handleOpen = () => {
    setOpen(true);
  };

  const handleCancel = () => {
    setOpen(false);
  };

  async function handlePublish() {
    // const original = await DataStore.query(Course, id);
    const obj = course;
    obj.status = "PUBLISHED";
    dispatch({type:'UpdateTest', data: obj});
    // await DataStore.save(
    //   Course.copyOf(original, (updated) => {
    //     updated.status = CourseStatus.PUBLISHED;
    //   })
    // );
    history.push("/exams");
  }
  return (
    <div>
      <Button color="primary" variant="contained" onClick={handleOpen}>
        <PublishIcon style={{ fontSize: "18px" }} /> Publish
      </Button>
      <Dialog
        open={open}
        onClose={handleCancel}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
          {"Are you sure you want to publish this course?"}
        </DialogTitle>
        <DialogActions>
          <Button onClick={handleCancel} color="primary" variant="outlined">
            Cancel
          </Button>

          <Button
            onClick={handlePublish}
            variant="contained"
            style={{ background: "green", color: "white" }}
          >
            Publish
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
