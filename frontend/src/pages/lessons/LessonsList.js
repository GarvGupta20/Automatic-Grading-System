import React, { useContext, useEffect, useState } from "react";
import ReactPlayer from "react-player/youtube";
import NewLesson from "./NewLesson";
import { useParams } from "react-router";
import { Avatar, Button, Card, CardHeader, Grid, IconButton } from "@material-ui/core";
import { Delete, Edit } from "@material-ui/icons";
import { UserContext } from "../../context/UserContext";
import useCourses from "../../customHook/useCourses";
import { useSelector } from 'react-redux';

function Lessons() {
  let { id } = useParams();
  const user = useContext(UserContext);
  const tests = useSelector(state => state.test); 
  const [lessons, setLessons] = useState([]);
  const course = useCourses(id);

  useEffect(() => {
    async function getLessons() {
      let models;
     tests.forEach(c => {
      if(c.id == id)
        models = c;
    })
      setLessons(models.questions);
    }

    getLessons();
    // const subscription = DataStore.observe(Lesson).subscribe((msg) => {
    //   getLessons();
    // });
    // return () => subscription.unsubscribe();
  }, [id]);

  async function submitHandler() {
    lessons.forEach(el => {
      const studentAnswer = document.querySelector(`#question${el.id}`).value;
      const expectedAnswer = el.answer;
      console.log(studentAnswer, expectedAnswer);
    })
  }

  async function handleDelete(id) {
    // const modelToDelete = await DataStore.query(Lesson, id);
    // DataStore.delete(modelToDelete);
  }
  return (
    <React.Fragment>
      {course.createdBy === user.username && user.isEducator && <NewLesson />}
      <Grid container>
        {lessons && lessons.map((lesson, index) => (
          <Grid
            item
            xs={12}
            md={12}
            style={{ margin: "10px", padding: "10px" }}
          >
            {user.isEducator &&
            <Card>
              <CardHeader
                title={lesson.name}
                subheader={lesson.answer}
                action={
                  user.isEducator && (
                    <div>
                      <IconButton>
                        <Edit />
                      </IconButton>
                      <IconButton
                        onClick={() => {
                          handleDelete(lesson.id);
                        }}
                      >
                        <Delete />
                      </IconButton>
                    </div>
                  )
                }
                avatar={<Avatar>{index + 1}</Avatar>}
              />
            </Card>
          }
          {!user.isEducator && 
          
          <div>
            <CardHeader
              title={lesson.name}
            />
            <input type="text" id={`question${lesson.id}`} />
          </div>
          
          }
          </Grid>
        ))}
      </Grid>
      {!user.isEducator && <Button onClick={submitHandler}>Submit</Button>}
    </React.Fragment>
  );
}

export default Lessons;
