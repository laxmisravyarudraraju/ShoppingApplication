import React from "react";
import { useState } from "react";

import { makeStyles } from "@material-ui/core/styles";
import { Typography } from "@material-ui/core";

import ShopData from "./ShopData";
import ShoppageStyles from "./styles";

import { Preview } from "../Preview/Preview";

const useStyles = makeStyles(ShoppageStyles);

export const ShopPage = (props) => {
  const [items, setItems] = useState(ShopData);

  const classes = useStyles();

  return (
    <React.Fragment>
      <Typography
        variant="h6"
        style={{ marginTop: "30px", textAlign: "center" }}
        className={classes.title}
      >
        Collections
      </Typography>
      {items.map((item) => (
        <div key={item.id} className={classes.previewWrapper}>
          <Typography variant="subtitle1" className={classes.title}>
            {item.title}
          </Typography>
          <Preview items={item.items} />
        </div>
      ))}
    </React.Fragment>
  );
};
