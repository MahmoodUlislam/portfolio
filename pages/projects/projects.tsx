import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';
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
  height: 'auto',
  borderRadius: '10px',
  padding: '20px',
  margin: '20px 0',
  textAlign: 'center',
}));

export default function VProjects() {
  return (
    <div className={styles.projectContainer}>
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
            <h2>
              Please see below for some of my projects to find out my experience
            </h2>
          </div>

        </div>
      </div>
      <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', padding: '20px' }}>
        {projects.map((project: any) => (
          <Item key={project.name}>
            <h1 style={{ marginBottom: '10px' }}>{project.name}</h1>
            <div className={styles.image} style={{ marginBottom: '20px' }}>
              <Image
                src={project.src}
                loader={uploadcareLoader}
                alt={`Picture of ${project.name} Landing Page`}
                width={400}
                height={200}
              />
            </div>
            <p style={{ marginBottom: '20px', fontSize: '16px', color: '#fff' }}>
              {project.description}
            </p>
            <Link
              className={styles.link}
              style={{
                display: 'inline-block',
                padding: '10px 20px',
                backgroundColor: '#3466aa',
                color: '#fff',
                borderRadius: '5px',
                textDecoration: 'none',
              }}
              target="_blank"
              rel="noopener noreferrer"
              href={project.cloudLink}
            >
              Visit {project.name}
            </Link>
          </Item>
        ))}
      </Box>
      <VFooter />
    </div>
  );
}
