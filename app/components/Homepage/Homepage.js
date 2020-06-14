import React from "react";
import { Container } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

import { Header } from "../Header/Header";
import { CategoryList } from "../CategoryList/CategoryList";

export const Homepage = (props) => {
  return (
    <Container maxWidth="lg">
      <Header />
      <CategoryList />
    </Container>
  );
};