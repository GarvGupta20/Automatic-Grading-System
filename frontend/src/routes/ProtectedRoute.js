import React, { useEffect, useState } from "react";
import { Redirect, Route } from "react-router-dom";
import Error404 from "../components/Error404";
import { isLoggedIn } from "./isLoggedIn";

function ProtectedRoute({ component: Component, ...rest }) {
  const [currentUser, setCurrentUser] = useState([]);
  useEffect(() => {
    getUser();
  }, []);
  async function getUser() {
    // Fetch User Information
  }

  return isLoggedIn() ? (
    <>
      {currentUser.map((user, index) => (
        <div key={index}>
          <Route
            {...rest}
            render={(props) =>
              user.isEducator ? <Component {...props} /> : <Error404 />
            }
          />
        </div>
      ))}
    </>
  ) : (
    <Redirect to="/signin" />
  );
}
export default ProtectedRoute;
