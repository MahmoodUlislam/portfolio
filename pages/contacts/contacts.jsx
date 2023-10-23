import { Wrapper } from "@googlemaps/react-wrapper";
import Head from "next/head";
// import "quill/dist/quill.snow.css";
import { Fade } from "react-awesome-reveal";
import { VFooter } from "../../utils";
import Navbar from "../../utils/Navbar";
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

            <h2>
              Email: mahmood.islam@gmail.com
            </h2>
            <h2>
              Address: Saskatoon, Saskatchewan, Canada
            </h2>
            <h3>
              #GitHub:
              <a
                style={{ textDecoration: "underline", color: "#82b7dc" }}
                href="https://github.com/MahmoodUlislam/"
                target="_blank"
                rel="noreferrer"
              >
                https://github.com/MahmoodUlislam
              </a>
            </h3>
            <h2>
              <a
                style={{ textDecoration: "none", color: "white" }}
                rel={"external"}
                href="tel:+13062618482"
              >
                {" "}
                <i className="fal fa-phone" /> Contact# +1-306-261-8482
              </a>
            </h2>



            <h2>
              For any inquiries, the below form can be used...
            </h2>
            <Fade>
              <VContactsForm />
            </Fade>


          </div>
          <Fade>
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
