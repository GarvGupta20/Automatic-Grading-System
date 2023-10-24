import { useEffect, useState } from "react";
import {useSelector} from "react-redux"

function useCourses(id) {
  const [courses, setCourses] = useState([]);
  const tests = useSelector(state => state.test); 

  useEffect(() => {
    async function getCourses() {
      // const models = await DataStore.query(Course, id);
      // setCourses(models);
      const models = tests.filter(c => {
        return c.id == id
      })
      if(models.length > 0){
        setCourses(models[0]);
      }
    }
    console.log("course changed");
    getCourses();
  }, [id, tests]);

  return courses;
}

export default useCourses;
