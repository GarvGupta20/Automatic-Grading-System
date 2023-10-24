import React from "react";
import { Grid, Link, Typography } from "@material-ui/core";
import FavoriteIcon from "@material-ui/icons/Favorite";

function Footer() {
  return (
    <div>
      {" "}
      <Grid container align="center" style={{ padding: "20px" }}>
        <Grid item xs={12} md={6}>
          <Typography
            variant="h5"
            style={{
              padding: "10px",
              letterSpacing: "6px",
            }}
          >
            Automated Grading System
          </Typography>
          <Typography
            variant="subtitle2"
            gutterBottom
            style={{ padding: "20px" }}
          >
            subtitle2. Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Quos blanditiis tenetur
          </Typography>
        </Grid>

        <Grid item xs={12} md={6}>
          <Typography variant="h6" style={{ letterSpacing: "3px" }}>
            Connect with us{" "}
          </Typography>
          <Link >
            <img
              src={`https://img.shields.io/badge/Gmail-D14836?style=for-the-badge&logo=gmail&logoColor=white`}
              alt="gmail"
              style={{ padding: "10px" }}
            />
          </Link>
          <Link target="_blank">
            <img
              src={`https://img.shields.io/badge/GitHub-100000?style=for-the-badge&logo=github&logoColor=white`}
              alt="github"
              style={{ padding: "10px" }}
            />
          </Link>
          <Link
            target="_blank"
          >
            <img
              src={`https://img.shields.io/badge/LinkedIn-0077B5?style=for-the-badge&logo=linkedin&logoColor=white`}
              alt="linkedin"
              style={{ padding: "10px" }}
            />
          </Link>
          <Link  target="_blank">
            <img
              src={`https://img.shields.io/badge/Codepen-000000?style=for-the-badge&logo=codepen&logoColor=white`}
              alt="codepen"
              style={{ padding: "10px" }}
            />
          </Link>
        </Grid>
        <Grid item xs={12}>
          <hr style={{ border: "2px solid #DDB92A" }} />
        </Grid>
        <Grid
          item
          xs={12}
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
        </Grid>
      </Grid>
    </div>
  );
}

export default Footer;
