import React, { useContext, useState } from "react";
import {
  Button,
  TextField,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
} from "@material-ui/core";
import AddIcon from "@material-ui/icons/Add";
import { makeStyles } from "@material-ui/core/styles";
import { useParams } from "react-router";
import { UserContext } from "../../context/UserContext";
import { useDispatch, useSelector } from 'react-redux';
const useStyles = makeStyles((theme) => ({
  form: {
    [theme.breakpoints.up("md")]: {
      minWidth: 500,
    },
  },
}));

export default function NewLesson(props) {
  const user = useContext(UserContext);
  const classes = useStyles();
  const tests = useSelector(state => state.test); 
  const dispatch = useDispatch();
  let { id } = useParams();
  const [open, setOpen] = useState(false);
  const [title, setTitle] = useState();
  const [summary, setSummary] = useState();
  const [url, setURL] = useState();

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setTitle("");
    setSummary("");
    setURL("");
    setOpen(false);
  };

  async function handleSubmit(event) {
    event.preventDefault();
    let models;
     tests.forEach(c => {
      if(c.id == id)
        models = c;
    })
    console.log(models,"herewegdoagain")
    let len = models.questions.length;
    models.questions.push({
      name: title,
      answer: summary,
      id: len
    });
    dispatch({type: "UpdateTest", data: models})
    // await DataStore.save(
    //   new Lesson({
    //     title: title,
    //     summary: summary,
    //     videoURL: url,
    //     courseID: id,
    //     createdBy: user.username,
    //   })
    // );
    setTitle("");
    setSummary("");
    setURL("");
    setOpen(false);
  }
  return (
    <div>
      <Button
        aria-label="Add Lesson"
        color="primary"
        variant="contained"
        onClick={handleOpen}
        style={{ float: "right", margin: "20px" }}
      >
        <AddIcon /> &nbsp; New Question
      </Button>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="form-dialog-title"
      >
        <div className={classes.form}>
          <DialogTitle id="form-dialog-title">Add New Question</DialogTitle>
          <DialogContent>
            <TextField
              margin="dense"
              label="Question"
              type="text"
              fullWidth
              value={title}
              onChange={(event) => setTitle(event.target.value)}
            />
            <br />
            <TextField
              margin="dense"
              label="Expected Answer"
              type="text"
              multiline
              rows="5"
              fullWidth
              value={summary}
              onChange={(event) => setSummary(event.target.value)}
            />
            <br />
          </DialogContent>

          <DialogActions>
            <Button onClick={handleSubmit} color="primary" variant="contained">
              Add
            </Button>
            <Button onClick={handleClose} color="primary" variant="outlined">
              Cancel
            </Button>
          </DialogActions>
        </div>
      </Dialog>
    </div>
  );
}
