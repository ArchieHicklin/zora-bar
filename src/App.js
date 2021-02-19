import React from "react";
import "./App.css";
import { makeStyles } from "@material-ui/core/styles";
import Modal from "@material-ui/core/Modal";

const useStyles = makeStyles(theme => ({
  paper: {
    position: "absolute",
    width: 800,
    height: "800px",
    backgroundColor: theme.palette.background.paper,
    border: "1px solid #ddd",
    outline: "none",
    boxShadow: theme.shadows[5],
    top: `55%`,
    left: `40%`,
    transform: `translate(-35%, -50%)`,
    padding: theme.spacing(2, 4, 3)
  }
}));

export default function SimpleModal() {
  const classes = useStyles();
  // getModalStyle is not a pure function, we roll the style only on the first render
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const body = (
    <div className={classes.paper}>
      <h2 id="simple-modal-title">I'm editable</h2>
      <iframe
        title="🌜🌞🌛 for netlify"
        src="https://zora.co/archie/651"
      ></iframe>
      <SimpleModal />
    </div>
  );

  return (
    <div className="App">
      <span>
        The<br></br> artist is prescient
      </span>
      <div className="MainContainer">
        <video
          className="MainImage"
          src="https://stream.mux.com/XQquoXufEQK6RY4rWGRPsz00CPoOOLP01MFXREPocaOMQ/medium.mp4"
          autoPlay
        />
        <button
          className="ZoraButton"
          type="button"
          onClick={handleOpen}
        ></button>
      </div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
      >
        {body}
      </Modal>
    </div>
  );
}
