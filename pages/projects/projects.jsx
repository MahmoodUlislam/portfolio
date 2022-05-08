import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { Fade } from "react-awesome-reveal";
// import { obhizatrikLanding } from "../../public/obhizatrikLanding.png";
// import { ObhizatrikLanding } from "../../assets";
import Divider from '@mui/material/Divider';
// import { uploadcareLoader } from '@uploadcare/nextjs-loader';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import { styled } from '@mui/material/styles';
import { uploadcareLoader } from '@uploadcare/nextjs-loader';
import { VFooter } from "../../utils";
import Navbar from "../../utils/Navbar";
import { useTypedText } from "../../utils/typingtext";
import styles from "./projects.module.scss";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: '#0d0107',
  ...theme.typography.body2,
  height: '500px',
  borderRadius: '10px',
  justifyContent: 'center',
  textAlign: 'center',
}));

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
      <Fade>
        <div className={styles.timelineGridCotainer}>
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
            <Divider sx={{ color: '#fff' }} />
          </div>
        </div>
      </Fade>
      <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={4}>
          <Grid item xs={12} lg={6}>
            <Item>


              <div className={styles.content}>
                <div className={styles.summary}>
                  <h1 style={{ display: "flex", justifyContent: "center" }}>
                    Obhizatrik Foundation
                  </h1>
                  <div className={styles.image}>
                    <Image
                      alt="CV mahmood"
                      src='/CV-mahmood-for-software-engineering.jpg'
                      layout='responsive'
                      width='764px'
                      height='1080px'
                      loader={uploadcareLoader}
                    />
                    {/* <Image
                      onClick={() => {
                        window.open(
                          "https://obhizatrik.org/",
                          "_blank"
                        );
                      }}
                      src="/obhizatrikLanding.png"
                      unoptimized
                      alt="Picture of Obhizatrik Landing Page"
                      width="400px"
                      height="200px"
                    /> */}
                  </div>
                  <Link href="https://obhizatrik.org/">
                    <a
                      className={styles.link}
                      style={{
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                      }}
                      target="_blank"
                      rel="stylesheet"
                    >
                      web link of Obhizatrik Foundation
                    </a>
                  </Link>
                  {/* <Iframe
                    unoptimized
                    url="http://www.youtube.com/embed/8riiLr668q4"
                    height="450px"
                    id="myId"
                    className="myClassname"
                    display="initial"
                    position="relative"
                    width="850px"
                    allowFullScreen={true}
                  /> */}

                  <Fade>
                    <h2>

                      A reactJS project with AntDesign UI library at frontend. This website is for Obhizatrik Foundation. Also there are systems for online payment.

                    </h2>
                  </Fade>
                </div>

              </div>



            </Item>
          </Grid>
          <Grid item xs={12} lg={6}>
            <Item>
              <div className={styles.content}>
                <div className={styles.summary}>
                  <h1 style={{ display: "flex", justifyContent: "center" }}>
                    User Analyzer for food delivery app
                  </h1>
                  <div className={styles.image}>

                    <Image
                      onClick={() => {
                        window.open(
                          "https://user-analyzer-of-food-delivery-app.vercel.app/",
                          "_blank"
                        );
                      }}
                      src="/UserAnalyzerLanding.png"
                      unoptimized
                      alt="Picture of UserAnalyzerFoodApp Landing Page"
                      width="400px"
                      height="200px"
                    />
                  </div>
                  <Link href="https://user-analyzer-of-food-delivery-app.vercel.app/">
                    <a
                      className={styles.link}
                      style={{
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                      }}
                      target="_blank"
                      rel="stylesheet"
                    >
                      web link of User Analyzer for food delivery app
                    </a>
                  </Link>
                  <Fade>
                    <h2>

                      A react.js application for user analysis of food delivery app ##Opinions regarding the task: # I have used Material UI for easy implementation of any future optimization in this app # I have used a layout option for the app that can be used for multiple pages also in future optimization.

                    </h2>
                  </Fade>
                </div>
              </div>

            </Item>
          </Grid>
          <Grid item xs={12} lg={6}>
            <Item>

              <div className={styles.content}>
                <div className={styles.summary}>
                  <h1 style={{ display: "flex", justifyContent: "center" }}>
                    dev-meetup-nextjs
                  </h1> <div className={styles.image}>

                    <Image
                      onClick={() => {
                        window.open(
                          "https://dev-meetup-nextjs.vercel.app/",
                          "_blank"
                        );
                      }}
                      src="/DevMeetupLanding.png"
                      unoptimized
                      alt="Picture of Obhizatrik Landing Page"
                      width="400px"
                      height="200px"
                    />
                  </div>
                  <Link href="https://dev-meetup-nextjs.vercel.app/">
                    <a
                      className={styles.link}
                      style={{
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                      }}
                      target="_blank"
                      rel="stylesheet"
                    >
                      web link of dev-meetup-nextjs, a meetup for developers
                    </a>
                  </Link>

                  <Fade>
                    <h2>
                      A next.js application for Rental app for developers' meetup ##Opinions regarding the task: # I have used CSS in moduler way for easy implementation of any future optimization in this app # I have used a layout option for the app that can be used for multiple pages also in future optimization

                    </h2>
                  </Fade>
                </div>
              </div>


            </Item>
          </Grid>
          <Grid item xs={12} lg={6}>
            <Item>

              <div className={styles.content}>
                <div className={styles.summary}>
                  <h1 style={{ display: "flex", justifyContent: "center" }}>
                    Rental app
                  </h1>
                  <div className={styles.image}>

                    <Image
                      onClick={() => {
                        window.open(
                          "https://rental-app-beta.vercel.app/",
                          "_blank"
                        );
                      }}
                      src="/RentalAppLanding.png"
                      unoptimized
                      alt="Picture of Obhizatrik Landing Page"
                      width="400px"
                      height="200px"
                    />
                  </div>
                  <Link href="https://rental-app-beta.vercel.app/">
                    <a
                      className={styles.link}
                      style={{
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                      }}
                      target="_blank"
                      rel="stylesheet"
                    >
                      web link of Rental app for electrical equipments
                    </a>
                  </Link>

                  <Fade>
                    <h2>

                      A next.js application for Rental app for electrical equipments ##Opinions regarding the task: # I have used Material UI for easy implementation of any future optimization in this app # I have used a layout option for the app that can be used for multiple pages also in future optimization.

                    </h2>
                  </Fade>
                </div>
              </div>


            </Item>
          </Grid>
          <Grid item xs={12} lg={6}>
            <Item>


              <div className={styles.content}>
                <div className={styles.summary}>
                  <h1 style={{ display: "flex", justifyContent: "center" }}>
                    e-commerce app
                  </h1>
                  <div className={styles.image}>
                    <Image
                      onClick={() => {
                        window.open(
                          "https://commerce-iota-liart-21.vercel.app/",
                          "_blank"
                        );
                      }}
                      src="/commerceNextjsLanding.png"
                      unoptimized
                      alt="Picture of e-commerce Nextjs Landing Page"
                      width="400px"
                      height="200px"
                    />
                  </div>
                  <Link href="https://commerce-iota-liart-21.vercel.app/">
                    <a
                      className={styles.link}
                      style={{
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                      }}
                      target="_blank"
                      rel="stylesheet"
                    >
                      web link of e-commerce app by Next.js
                    </a>
                  </Link>

                  <Fade>
                    <h2>
                      A next.js application for e-commerce website. ##Opinions regarding the task: # I have followed Vercel's Big-commerce app for easy implementation of any future optimization in this app # I have used a layout option for the app that can be used for multiple pages also in future optimization.
                    </h2>
                  </Fade>
                </div>
              </div>



            </Item>
          </Grid>
          <Grid item xs={12} lg={6}>
            <Item>


              <div className={styles.content}>
                <div className={styles.summary}>
                  <h1 style={{ display: "flex", justifyContent: "center" }}>
                    mahmood-ul-islam-selise
                  </h1>
                  <div className={styles.image}>
                    <Image
                      onClick={() => {
                        window.open(
                          "https://mahmood-ul-islam-selise.vercel.app/",
                          "_blank"
                        );
                      }}
                      src="/SeliseProject.png"
                      unoptimized
                      alt="Picture of SeliseProject Landing Page"
                      width="400px"
                      height="200px"
                    />
                  </div>
                  <Link href="https://mahmood-ul-islam-selise.vercel.app/">
                    <a
                      className={styles.link}
                      style={{
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                      }}
                      target="_blank"
                      rel="stylesheet"
                    >
                      web link of Rental app for electrical equipments
                    </a>
                  </Link>

                  <Fade>
                    <h2>
                      A next.js application for e-commerce website. ##Opinions regarding the task: # I have used material UI for easy implementation of any future optimization in this app # I have used a layout option for the app that can be used for multiple pages also in future optimization

                    </h2>
                  </Fade>
                </div>
              </div>



            </Item>
          </Grid>
          <Grid item xs={12} lg={6}>
            <Item>
              <div className={styles.content}>
                <div className={styles.summary}>
                  <h1 style={{ display: "flex", justifyContent: "center" }}>
                    Akkhor
                  </h1>
                  <div className={styles.image}>
                    <Image
                      onClick={() => {
                        window.open(
                          "https://obhizatrik.org/",
                          "_blank"
                        );
                      }}
                      src="/obhizatrikLanding.png"
                      unoptimized
                      alt="Picture of Obhizatrik Landing Page"
                      width="400px"
                      height="200px"
                    />
                  </div>

                  <a
                    className={styles.link}
                    style={{
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                    target="_blank"
                    rel={"external"}
                    href="mailto:mahmood.islam@gmail.com"
                  >
                    web link of Rental app for electrical equipments
                  </a>

                  <Fade>
                    <h2>
                      A react native project with expo. This app is made for quiz exam. Please email for any query

                    </h2>
                  </Fade>
                </div>
              </div>



            </Item>
          </Grid>
        </Grid>
      </Box>
      <VFooter />
    </div>
  );
}
