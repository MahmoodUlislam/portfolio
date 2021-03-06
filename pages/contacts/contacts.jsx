import { Wrapper } from "@googlemaps/react-wrapper";
import Head from "next/head";
// import "quill/dist/quill.snow.css";
import { Fade } from "react-awesome-reveal";
import { VFooter } from "../../utils";
import Navbar from "../../utils/Navbar";
import { useTypedText } from "../../utils/typingtext";
import VContactsForm from "../../utils/VContactsForm";
import VGoogleMap from "../../utils/VGoogleMap";
import styles from "./contacts.module.scss";

export default function VContacts() {
  return (
    <>
      <div className={styles.aboutContainer}>
        <Head>
          <title>Contacts</title>
          <meta
            name="description"
            content="Mahmood ul Islam Portfolio contact Page"
          />
          <meta name="author" content="Mahmood ul Islam" />
          <meta
            name="keywords"
            content="Mahmood, Mahmood ul Islam, Portfolio, Frontend"
          />
          <link rel="shortcut icon" href="/Mi-logo.svg" type="image/x-icon" />
        </Head>
        <Navbar activeTab="Contacts" />
        <div className={styles.content}>
          <div className={styles.summary}>
            <h1>Contacts</h1>
            <Fade>
              <h2>
                {useTypedText(
                  `Email: mahmood.islam@gmail.com, Phone# +8801717077230                  
                   Please use the form below to send us an email. We will get back to you as soon as possible...`,
                  30,
                  350
                )}
              </h2>
            </Fade>
            <Fade>
              <VContactsForm />
            </Fade>

            <h2>
              <a
                style={{ textDecoration: "none", color: "white" }}
                href="https://github.com/MahmoodUlislam/"
                target="_blank"
                rel="noreferrer"
              >
                #GitHub: https://github.com/MahmoodUlislam
              </a>
            </h2>
            <h2>
              <a
                style={{ textDecoration: "none", color: "white" }}
                rel={"external"}
                href="tel:+8801717077230"
              >
                {" "}
                <i className="fal fa-phone" /> Contact# +8801717077230
              </a>
            </h2>
          </div>
          <Fade>
            <h2>
              {useTypedText(
                `Mailing Address: 463/1, South Kafrul, Dhaka, Bangladesh...`,
                30,
                350
              )}
            </h2>
          </Fade>
          <Wrapper apiKey={process.env.REACT_APP_GOOGLE_MAP_API_KEY}>
            <VGoogleMap />
          </Wrapper>
        </div>
        <VFooter />
      </div>
    </>
  );
}
