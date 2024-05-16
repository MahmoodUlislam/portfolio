import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import emailjs from "emailjs-com";


export default function VContactsForm(...pageProps) {

  function sendEmail(e) {
    e.preventDefault();

    emailjs.sendForm(process.env.GMAIL_SERVICE, process.env.EMAIL_TEMPLATE, e.target, "sOMVkqwdTURyN9zIE").then(
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
              backgroundColor: "#82b7dc",
            }}
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
              backgroundColor: "#82b7dc",
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
              backgroundColor: "#82b7dc",
              color: "#ffffff",
            }}
            id="outlined-basic"
            label="Enter Subject"
            color="secondary"
            variant="filled"
            name="subject"
          />
          <TextField
            required
            sx={{
              borderRadius: "5px",
              width: "60%",
              marginTop: "2vh",
              backgroundColor: "#82b7dc",
              color: "#ffffff",
            }}
            id="outlined-multiline-static"
            label="Please enter your message here"
            multiline
            rows={5}
            name="message"
          />
          <Button
            style={{
              width: "30%",
              height: "7vh",
              marginTop: "4vh",
              backgroundColor: "#1c1c1c",
              color: "#82b7dc",
              border: "3px solid #82b7dc",
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
