import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import { styled } from '@mui/material/styles';
import { uploadcareLoader } from '@uploadcare/nextjs-loader';
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { Fade } from "react-awesome-reveal";
import { VFooter } from "../../utils";
import Navbar from "../../utils/Navbar";
import { useTypedText } from "../../utils/typingtext";
import styles from "./projects.module.scss";

const projects = require("../../data/projects.json");

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
      <div className={styles.timelineGridCotainer}>
        <div className={styles.content}>
          <div className={styles.summary}>
            <h1>Projects</h1>
            <Fade>
              <h2>
                {useTypedText(
                  "Please see bellow for some of my projects to find out my experience.",
                  30,
                  350
                )}
              </h2>
            </Fade>
          </div>
          <Divider sx={{ color: '#fff' }} />
        </div>
      </div>
      <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={4}>
          {projects.map((project: any) => (
            <Grid item xs={12} lg={6} key={project.name}>
              <Item>
                <div className={styles.content}>
                  <div className={styles.summary}>
                    <h1 style={{ display: "flex", justifyContent: "center" }}>
                      {project.name}
                    </h1>
                    <div className={styles.image}>
                      <Image
                        src={project.src}
                        loader={uploadcareLoader}
                        alt={`Picture of ${project.name} Landing Page`}
                        width={400}
                        height={200}
                      />
                    </div>
                    <Link
                      className={styles.link}
                      style={{
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                      }}
                      target="_blank"
                      rel="stylesheet"
                      href={project.cloudLink}
                    >
                      web link of {project.name}
                    </Link>
                    <h2>
                      {project.description}
                    </h2>
                  </div>
                </div>
              </Item>
            </Grid>
          ))}
        </Grid>
      </Box>

      <VFooter />
    </div>
  );
}
