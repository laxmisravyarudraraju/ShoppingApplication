import React from "react";
import { Container } from "@material-ui/core";
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
}));
export const Homepage = (props) => {
  const classes = useStyles();

  return (
    // <Container maxWidth="lg">
    <React.Fragment>
      <Header />
      <CategoryList />
      <Footer />
    </React.Fragment>
    // </Container>
  );
};
