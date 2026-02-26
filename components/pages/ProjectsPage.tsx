'use client'

import Image from 'next/image'
import { ExternalLink, Github, Eye } from 'lucide-react'
import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'
import DecorativeElement from '@/components/ui/DecorativeElement'
import styles from './ProjectsPage.module.css'

const projects = [
  {
    id: 1,
    title: 'LifeLine - Virtual Mental Health Platform',
    description: 'Virtual mental health treatment platform featuring multi-agent AI on Amazon Bedrock, Chime SDK video conferencing with ambient listening, and HIPAA-compliant AWS architecture.',
    image: '/LifeLineAPPicon-NoBackground.png',
    technologies: ['React.js', 'Vue.js', 'Quasar', 'React Native', 'Node.js', 'AWS Bedrock', 'Chime SDK', 'PostgreSQL', 'Swift', 'Kotlin'],
    category: 'Healthcare',
    liveUrl: 'https://lifelineapp.ca',
    featured: true
  },
  {
    id: 2,
    title: 'SkinScan - AI Wound-Care Imaging Platform',
    description: 'AI-powered wound-care imaging platform with a custom SageMaker CV model for classification and segmentation, AR-guided iOS capture, and Bedrock agents for clinical recommendations.',
    image: '/SkinScanLogo.png',
    technologies: ['Swift (iOS)', 'Next.js', 'Node.js', 'SageMaker AI', 'Bedrock', 'Rekognition', 'Comprehend Medical', 'PostgreSQL'],
    category: 'Healthcare',
    liveUrl: 'https://skinscanapp.ca',
    featured: true
  },
  {
    id: 3,
    title: 'esiKidz - Childcare Management Software',
    description: 'Enterprise SaaS childcare management software built with React.js and React Native, powered by Node.js APIs and AWS cloud infrastructure.',
    image: '/esiKidzLogo.png',
    technologies: ['React.js', 'React Native', 'Node.js', 'MySQL', 'AWS Lambda', 'Amazon S3'],
    category: 'SaaS',
    liveUrl: 'https://esikidz.com',
    featured: true
  },
  {
    id: 4,
    title: 'Sunrise-club - Event Booking Platform',
    description: 'Event booking platform for Sunrise (Telco) users in Switzerland with OAuth 2 + OIDC authentication, Storyblok CMS, and multi-language support.',
    image: '/SunriseLogo.svg',
    technologies: ['React.js', 'Next.js', 'TypeScript', 'MongoDB', 'Storyblok CMS', 'Material UI', 'SASS'],
    category: 'E-commerce',
    liveUrl: 'https://www.sunrise.ch/en/moments',
    featured: true
  }
]

export default function ProjectsPage() {
  const filteredProjects = projects

  return (
    <div className={styles.projectsContainer}>
      <Navbar activeTab="Projects" />

      <main className={styles.mainContent}>
        {/* Hero Section */}
        <section className={styles.heroSection}>
          <div className={styles.heroContainer}>
            <div className={styles.heroContent}>
              <h1 className={styles.heroTitle}>
                My Projects
              </h1>
              <p className={styles.heroSubtitle}>
                Here you can find out more about some of the projects I have been part of,
                and experiences I have achieved while working with those projects...
              </p>
            </div>
            <DecorativeElement page="projects" />
          </div>
        </section>



        {/* Projects Grid */}
        <section className={styles.projectsSection}>
          <div className={styles.projectsContainer}>
            <div className={styles.projectsGrid}>
              {filteredProjects.map((project) => (
                <div
                  key={project.id}
                  className={styles.projectCard}
                >
                  {/* Project Image */}
                  <div
                    className={styles.projectImageContainer}
                    data-project={project.title.split(' - ')[0]}
                  >
                    <Image
                      src={project.image}
                      alt={project.title}
                      width={200}
                      height={200}
                      className={styles.projectImage}
                    />
                    <div className={styles.projectImageOverlay} />

                    {/* Action Buttons */}
                    <div className={styles.projectActions}>
                      {project.liveUrl && project.liveUrl !== '#' && (
                        <a
                          href={project.liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className={styles.projectActionButton}
                        >
                          <Eye className={styles.eyeIcon} />
                        </a>
                      )}
                    </div>
                  </div>

                  <div className={styles.projectContent}>
                    <h3 className={styles.projectTitle}>
                      {project.title}
                    </h3>

                    <p className={styles.projectDescription}>
                      {project.description}
                    </p>

                    <div className={styles.projectTechnologies}>
                      {project.technologies.map((tech) => (
                        <span
                          key={tech}
                          className={styles.projectTech}
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className={styles.ctaSection}>
          <div className={styles.ctaContainer}>
            <div className={styles.ctaContent}>
              <h2 className={styles.ctaTitle}>
                Let&apos;s Work Together
              </h2>
              <p className={styles.ctaDescription}>
                Interested in collaborating on a project? Let&apos;s discuss how we can bring your ideas to life.
              </p>
              <a
                href="/contacts"
                className={styles.ctaButton}
              >
                Get In Touch
                <ExternalLink className={styles.externalLinkIcon} />
              </a>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
