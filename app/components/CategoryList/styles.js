export default {
  root: {
    marginTop: "2px",
  },
  item: {
    height: "42.5vh",
    overflow: "hidden",
    border: "solid 0.5px #eee",
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
      transform: "scale(0.95)",
    },
    cursor: "pointer",
  },
  wrapper: {
    backgroundColor: "#000",
    opacity: 0.5,
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
    color: "#eee",
    opacity: 0.9,
    borderRadius: "3px",
    textTransform: "capitalise",
    letterSpacing: "1px",
  },
};