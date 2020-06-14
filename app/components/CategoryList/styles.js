export default {
  root: {
    marginTop: "2px",
  },
  item: {
    height: "50vh",
    overflow: "hidden",
    border: "solid 0.5px #ccc",
  },
  container: {
    height: "100%",
    width: "100%",
    overflow: "hidden",
    position: "relative",
    transition: "all 0.5s ease-in-out",
    "&:hover": {
      transform: "scale(1.06)",
    },
    "&:active": {
      transform: "scale(0.98)",
    },
    cursor: "pointer",
  },
  wrapper: {
    backgroundColor: "#000",
    opacity: 0.7,
    position: "absolute",
    top: 0,
    height: "100%",
    width: "100%",
  },
  title: {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    zIndex: 100,
    color: "#ccc",
    opacity: 0.7,
    borderRadius: "3px",
    textTransform: "capitalise",
    letterSpacing: "1px",
  },
};
