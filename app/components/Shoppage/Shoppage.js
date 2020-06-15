import React from "react";
import { useState } from "react";

import { makeStyles } from "@material-ui/core/styles";
import { Container, Typography } from "@material-ui/core";

import ShopData from "./ShopData";
import ShoppageStyles from "./styles";

import { Header } from "./../Header/Header";
import { Preview } from "../Preview/Preview";

const useStyles = makeStyles(ShoppageStyles);

export const Shoppage = (props) => {
  const [items, setItems] = useState(ShopData);

  const classes = useStyles();

  return (
    <Container maxWidth="lg">
      <Header />
      {items.map((item) => (
        <div key={item.id} className={classes.previewWrapper}>
          <Typography variant="subtitle1" className={classes.title}>
            {item.title}
          </Typography>
          <Preview items={item.items} />
        </div>
      ))}
    </Container>
  );
};
