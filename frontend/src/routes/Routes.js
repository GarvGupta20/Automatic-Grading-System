import React, { useEffect, useState } from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import { UserContext } from "../context/UserContext";
import PrivateRoute from "./PrivateRoute";
import ProtectedRoute from "./ProtectedRoute";

import SignIn from "../auth/SignIn";
import SignUp from "../auth/SignUp";
import Account from "../components/account/Account";
import Calendar from "../components/calendar/Calendar";
import Connect from "../components/Connect";
import Dashboard from "../components/dashboard/Dashboard";
import Error404 from "../components/Error404";
import Home from "../components/Home";
import Courses from "../components/course/Courses";
import CourseDetails from "../components/course/CourseDetails";
import EditCourse from "../components/course/EditCourse";
import Assignments from "../pages/assignments/Assignments";
import Announcements from "../pages/announcements/Announcements";
import Lessons from "../pages/lessons/Lessons";
import Discussions from "../pages/discussions/Discussions";
import Syllabus from "../pages/syllabus/Syllabus";
import EditAnnouncement from "../pages/announcements/EditAnnouncement";
import Students from "../pages/students/Students";

const dummy_user = {name:"harshit",isEducator:false,email: "aroraharshit2002@gmail.com", username: "harshit07"}

export default function Routes() {
  const [currentUser, setCurrentUser] = useState([dummy_user]);
  useEffect(() => {
    // getUser();
  }, []);
  return (
    <Switch>
      <Route exact path="/" component={Home} />

      <Route path="/signin/" component={SignIn} />
      <Route path="/signup/" component={SignUp} />
      {currentUser.map((user, index) => (
        <UserContext.Provider key={index} value={user}>
          <Route exact path="/exams/" component={Courses} />
          <PrivateRoute exact path="/exams/:id" component={CourseDetails} />
          <PrivateRoute path="/exams/:id/edit" component={EditCourse} />

          <PrivateRoute path="/dashboard/" component={Dashboard} />
          <PrivateRoute path="/account/" component={Account} />
          <PrivateRoute path="/calendar/" component={Calendar} />
          <PrivateRoute path="/exams/:id/start" component={Lessons} />
          <PrivateRoute
            exact
            path="/course/:id/announcements"
            component={Announcements}
          />
          <ProtectedRoute
            path="/course/:id/:aID/edit"
            component={EditAnnouncement}
          />
          <PrivateRoute
            path="/course/:id/assignments"
            component={Assignments}
          />
          <PrivateRoute
            path="/course/:id/discussions"
            component={Discussions}
          />
          <PrivateRoute path="/course/:id/syllabus" component={Syllabus} />
          {user.isEducator && (
            <PrivateRoute path="/course/:id/students" component={Students} />
          )}
        </UserContext.Provider>
      ))}
      <Route path="*" component={Error404} />
    </Switch>
  );
}
