import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import emailjs from "emailjs-com";
import Quill from "./quill";

export default function VContactsForm(...pageProps) {
  function sendEmail(e) {
    e.preventDefault();

    emailjs
      .sendForm(
        process.env.GMAIL_SERVICE,
        process.env.EMAIL_TEMPLATE,
        e.target,
        process.env.EMAILJS_USERID
      )

      .then(
        (result) => {
          console.log(process.env.GMAIL_SERVICE);
          alert(result.text);
        },
        (error) => {
          alert(error.text);
        }
      );
    e.target.reset();
  }

  return (
    <>
      <form onSubmit={sendEmail}>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            flexDirection: "column",
          }}
        >
          <TextField
            required
            color="primary"
            sx={{
              borderRadius: "5px",
              width: "60%",
              backgroundColor: "#ff0072",
            }}
            color="secondary"
            id="outlined-basic"
            label="Enter your Name"
            variant="filled"
            name="from_name"
          />

          <TextField
            required
            sx={{
              borderRadius: "5px",
              width: "60%",
              marginTop: "2vh",
              backgroundColor: "#ff0072",
              color: "#ffffff",
            }}
            id="outlined-basic"
            label="Enter your email"
            variant="filled"
            color="secondary"
            name="reply_to"
          />
          <TextField
            required
            sx={{
              borderRadius: "5px",
              width: "60%",
              marginTop: "2vh",
              backgroundColor: "#ff0072",
              color: "#ffffff",
            }}
            id="outlined-basic"
            label="Enter Subject"
            color="secondary"
            variant="filled"
            name="subject"
          />

          <Quill placeholder="Enter you message" name="message" />
          {/* <Quill1 placeholder="Enter you message" name="quillRef" /> */}
          <Button
            style={{
              width: "30%",
              height: "7vh",
              marginTop: "4vh",
              backgroundColor: "#260316",
              color: "#ff0072",
              border: "3px solid #ff0072",
            }}
            variant="contained"
            type="submit"
          >
            SUBMIT
          </Button>
        </div>
      </form>
    </>
  );
}
