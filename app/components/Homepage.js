import React from "react";
import { Container, GridList, GridListTile } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

import { Header } from "./Header";
import { Footer } from "./Footer";
import { CategoryList } from "./CategoryList";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "space-around",
    overflow: "hidden",
    backgroundColor: theme.palette.background.paper,
  },
  gridList: {
    width: "100%",
    height: "100%",
  },
}));
export const Homepage = (props) => {
  const classes = useStyles();

  return (
    <Container maxWidth="md">
      <Header />
      <CategoryList />
      <Footer />
    </Container>
  );
};
