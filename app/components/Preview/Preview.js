import React from "react";

import { makeStyles } from "@material-ui/core/styles";
import { Grid } from "@material-ui/core";

import CategoryItem from "./../CategoryItem/CategoryItem";

const styles = {
  height: "45vh",
  border: "solid 2px #eee",
};

export const Preview = (props) => {
  return (
    <React.Fragment>
      <Grid container spacing={0}>
        {props.items
          .filter((item, i) => i < 4)
          .map((item) => (
            <Grid key={item.id} item xs={3} style={styles}>
              <CategoryItem item={item} />
            </Grid>
          ))}
      </Grid>
    </React.Fragment>
  );
};
