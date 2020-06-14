import React from "react";

const styles = {
  width: "100%",
  height: "100%",
  objectFit: "cover",
};

export const Category = (props) => {
  return (
    <React.Fragment>
      <img src={props.img} alt={props.title} style={styles} />
    </React.Fragment>
  );
};
