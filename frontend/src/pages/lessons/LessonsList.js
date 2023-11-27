import React, { useContext, useEffect, useState } from "react";
import ReactPlayer from "react-player/youtube";
import NewLesson from "./NewLesson";
import { useParams } from "react-router";
import { Avatar, Button, Card, CardHeader, Grid, IconButton } from "@material-ui/core";
import { Delete, Edit } from "@material-ui/icons";
import { UserContext } from "../../context/UserContext";
import useCourses from "../../customHook/useCourses";
import { useSelector } from 'react-redux';
import axios from 'axios'

function Lessons() {
  const [loading, setLoading] = useState(false);
  const [marks, setMarks] = useState(undefined);
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
    setLoading(true);
    let totalScore = 0;
    for(let i=0;i<lessons.length;i++)
    {
      const el = lessons[i];
      const studentAnswer = document.querySelector(`#question${el.id}`).value;
      const expectedAnswer = el.answer;
      console.log(studentAnswer,expectedAnswer);
      const result = await axios.post('http://127.0.0.1:8000/add',{first: studentAnswer, second: expectedAnswer});
      totalScore += Math.max(result.data.score, 0);
    }
    let percentage = totalScore / (lessons.length);
    console.log(percentage);
    setLoading(false);
    setMarks(percentage);
  }

  async function handleDelete(id) {
    // const modelToDelete = await DataStore.query(Lesson, id);
    // DataStore.delete(modelToDelete);
  }
  return (
    <React.Fragment>
      {loading && <h1 style={{position:"absolute", bottom:"30rem", left:"50rem"}}>Loading...</h1>}
      {course.createdBy === user.username && user.isEducator && <NewLesson />}
      {marks && <div style={{marginTop:"10rem", fontSize:"2rem", display:"flex", alignItems:"center"}}>
          <h1>Your Score:</h1>
          <h1 style={{marginLeft:"1rem", color:"green"}}>{marks.toFixed(2)} %</h1>
        </div>}
      <Grid container>
        {!marks && lessons && lessons.map((lesson, index) => (
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
          {!marks && !user.isEducator && 
          
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
      {!marks && !user.isEducator && <Button onClick={submitHandler}>Submit</Button>}
    </React.Fragment>
  );
}

export default Lessons;
