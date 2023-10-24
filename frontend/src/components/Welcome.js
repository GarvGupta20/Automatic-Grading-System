import React, { useContext } from "react";
import { Typography } from "@material-ui/core";
import Avatar from "boring-avatars";

import { UserContext } from "../context/UserContext";

function Welcome() {
  const user = useContext(UserContext);
  console.log("welcomee",user);
  return (
    <div>
      <div
        style={{
          backgroundImage: "url(/hero.svg)",
          backgroundColor:"#0E2A47",
          color: "white",
          display: "flex",
          justifyContent: "flex-end",
          alignItems: "baseline",
          padding: "20px",
          height: "20vh",
        }}
      >
        <Typography
          variant="h4"
          style={{ display: "flex", alignItems: "center" }}
        >
          <p id='welcome'>Welcome! {user.name}</p>
          <Avatar
            size={60}
            name={user.username}
            variant="beam"
            colors={["#A70267", "#F10C49", "#FB6B41", "#F6D86B", "#339194"]}
            style={{ marginLeft: "20px" }}
          />{" "}
        </Typography>
      </div>
    </div>
  );
}

export default Welcome;
