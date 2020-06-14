export default {
  root: {
    flexGrow: 1,
  },
  item: {
    height: "50vh",
  },
  container: {
    height: "100%",
    width: "100%",
    overflow: "hidden",
    position: "relative",
  },
  wrapper: {
    backgroundColor: "#000",
    opacity: 0.8,
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
