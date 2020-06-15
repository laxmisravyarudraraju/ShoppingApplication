import { FormHelperText } from "@material-ui/core";

export default {
  container: {
    height: "100%",
    width: "100%",
    overflow: "hidden",
    position: "relative",
    transition: "all 0.5s ease-in-out",
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
    textAlign: "center",
  },
  buttonContainer: {
    zIndex: 200,
    position: "absolute",
    top: "2px",
    left: "4px",
    color: "#8dc492",
    width: "fit-content",
  },
  priceBox: {
    position: "absolute",
    bottom: "7%",
    left: "50%",
    transform: "translateX(-50%)",
    padding: "3px 15px",
    border: "solid 1px #ccc",
    color: "#ffaca8",
    borderRadius: "3px",
  },
};