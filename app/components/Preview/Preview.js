import React from "react";

import { makeStyles } from "@material-ui/core/styles";
import { Grid } from "@material-ui/core";

import { CategoryItem } from "./../CategoryItem/CategoryItem";

const styles = {
  height: "37vh",
  border: "solid 2px #eee",
};

export const Preview = (props) => {
  return (
    <React.Fragment>
      <Grid container spacing={0}>
        {props.items
          .filter((item, i) => i < 4)
          .map(({ id, ...otherProps }) => (
            <Grid key={id} item xs={3} style={styles}>
              <CategoryItem {...otherProps} />
            </Grid>
          ))}
      </Grid>
    </React.Fragment>
  );
};
