import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { Fade } from "react-awesome-reveal";
import Iframe from "react-iframe";
// import { obhizatrikLanding } from "../../public/obhizatrikLanding.png";
// import { ObhizatrikLanding } from "../../assets";
import { VFooter } from "../../utils";
import Navbar from "../../utils/Navbar";
import { useTypedText } from "../../utils/typingtext";
import styles from "./projects.module.scss";

export default function VProjects() {
  return (
    <div className={styles.workContainer}>
      <Head>
        <title>Projects</title>
        <meta
          name="description"
          content="Mahmood ul Islam Portfolio: work history"
        />
        <meta name="author" content="Mahmood ul Islam" />
        <meta name="keywords" content="Mahmood ul Islam, Portfolio, Frontend" />
        <link rel="shortcut icon" href="/Mi-logo.svg" type="image/x-icon" />
      </Head>
      <Navbar activeTab="Projects" />
      <div className={styles.content}>
        <div className={styles.summary}>
          <h1>Projects</h1>
          <Fade>
            <h2>
              {useTypedText(
                "Please see bellow for some of my projects to find out my experience regarding to the web & mobile app development",
                30,
                350
              )}
            </h2>
          </Fade>
        </div>
        <Fade>
          <div className={styles.timelineGridCotainer}>
            <div className={styles.content}>
              <div className={styles.summary}>
                <h1 style={{ display: "flex", justifyContent: "center" }}>
                  Obhizatrik Foundation
                </h1>

                <Fade>
                  <h2>
                    {useTypedText(
                      "A reactJS project with AntDesign UI library at frontend. This website is for Obhizatrik Foundation. Also there are systems for online payment.",
                      30,
                      350
                    )}
                  </h2>
                </Fade>
                <Link href="https://obhizatrik.org/">
                  <a
                    className={styles.link}
                    style={{
                      display: "flex",
                      justifyContent: "center",
                      fontSize: "2rem",
                      margin: "40px",
                    }}
                    target="_blank"
                    rel="stylesheet"
                  >
                    web link of Obhizatrik Foundation
                  </a>
                </Link>
              </div>

              <Image
                onClick={() => {
                  window.open(
                    "https://obhizatrik.org/",
                    "_blank"
                  );
                }}
                src="/obhizatrikLanding.png"
                alt="Picture of Obhizatrik Landing Page"
                width="800px"
                height="400px"
              />
              <Iframe
                url="http://www.youtube.com/embed/8riiLr668q4"
                height="450px"
                id="myId"
                className="myClassname"
                display="initial"
                position="relative"
                width="850px"
                allowFullScreen={true}
              />
            </div>

            <div className={styles.content}>
              <div className={styles.summary}>
                <h1 style={{ display: "flex", justifyContent: "center" }}>
                  User Analyzer for food delivery app
                </h1>
                <Link href="https://user-analyzer-of-food-delivery-app.vercel.app/">
                  <a
                    className={styles.link}
                    style={{
                      display: "flex",
                      justifyContent: "center",
                      fontSize: "2rem",
                      margin: "40px",
                    }}
                    target="_blank"
                    rel="stylesheet"
                  >
                    web link of User Analyzer for food delivery app
                  </a>
                </Link>
                <Fade>
                  <h2>
                    {useTypedText(
                      "A react.js application for user analysis of food delivery app ##Opinions regarding the task: # I have used Material UI for easy implementation of any future optimization in this app # I have used a layout option for the app that can be used for multiple pages also in future optimization",
                      30,
                      350
                    )}
                  </h2>
                </Fade>
              </div>
            </div>

            <div className={styles.content}>
              <div className={styles.summary}>
                <h1 style={{ display: "flex", justifyContent: "center" }}>
                  Rental app
                </h1>
                <Link href="https://rental-app-beta.vercel.app/">
                  <a
                    className={styles.link}
                    style={{
                      display: "flex",
                      justifyContent: "center",
                      fontSize: "2rem",
                      margin: "40px",
                    }}
                    target="_blank"
                    rel="stylesheet"
                  >
                    web link of Rental app for electrical equipments
                  </a>
                </Link>
                <Fade>
                  <h2>
                    {useTypedText(
                      "A next.js application for Rental app for electrical equipments ##Opinions regarding the task: # I have used Material UI for easy implementation of any future optimization in this app # I have used a layout option for the app that can be used for multiple pages also in future optimization",
                      30,
                      350
                    )}
                  </h2>
                </Fade>
              </div>
            </div>
            <div className={styles.content}>
              <div className={styles.summary}>
                <h1 style={{ display: "flex", justifyContent: "center" }}>
                  dev-meetup-nextjs
                </h1>
                <Link href="https://dev-meetup-nextjs.vercel.app/">
                  <a
                    className={styles.link}
                    style={{
                      display: "flex",
                      justifyContent: "center",
                      fontSize: "2rem",
                      margin: "40px",
                    }}
                    target="_blank"
                    rel="stylesheet"
                  >
                    web link of dev-meetup-nextjs, a meetup for developers
                  </a>
                </Link>
                <Fade>
                  <h2>
                    {useTypedText(
                      "A next.js application for Rental app for developers' meetup ##Opinions regarding the task: # I have used CSS in moduler way for easy implementation of any future optimization in this app # I have used a layout option for the app that can be used for multiple pages also in future optimization",
                      30,
                      350
                    )}
                  </h2>
                </Fade>
              </div>
            </div>

            <div className={styles.content}>
              <div className={styles.summary}>
                <h1 style={{ display: "flex", justifyContent: "center" }}>
                  Akkhor
                </h1>
                <a
                  className={styles.link}
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    fontSize: "2rem",
                  }}
                  rel={"external"}
                  href="mailto:mahmood.islam@gmail.com"
                >
                  {" "}
                  <i className="fal fa-envelope" />
                  send email to know more about Akkhor app
                </a>
                <Fade>
                  <h2>
                    {useTypedText(
                      "A react native project with expo. This app is made for quiz exam.",
                      30,
                      350
                    )}
                  </h2>
                </Fade>
              </div>
            </div>
          </div>
        </Fade>
      </div>
      <VFooter />
    </div>
  );
}
