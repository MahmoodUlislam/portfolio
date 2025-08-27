'use client'

import Image from 'next/image'
import { ExternalLink, Github, Eye } from 'lucide-react'
import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'
import styles from './ProjectsPage.module.css'

const projects = [
  {
    id: 1,
    title: 'LifeLine - Virtual Mental Health Platform',
    description: 'AI-powered virtual mental health treatment platform with video conferencing, AI chatbot, and real-time session analysis. Features ambient listening, risk analytics, and comprehensive patient management.',
    image: '/LifeLineAPPicon-NoBackground.png',
    technologies: ['React.js', 'Vue.js', 'Next.js', 'Node.js', 'AWS Bedrock', 'Chime SDK', 'PostgreSQL'],
    category: 'Healthcare',
    liveUrl: 'https://lifelineapp.ca',
    featured: true
  },
  {
    id: 2,
    title: 'SkinScan - AI Dermatology Platform',
    description: 'End-to-end dermatology imaging platform with computer vision pipeline. Features AR-guided photo capture, AI-powered skin analysis, and clinician portal.',
    image: '/SkinScanLogo.png',
    technologies: ['Swift (iOS)', 'Next.js', 'Node.js', 'AWS SageMaker', 'Rekognition', 'S3', 'PostgreSQL'],
    category: 'Healthcare',
    liveUrl: 'https://skinscanapp.ca',
    featured: true
  },
  {
    id: 3,
    title: 'esiKidz - Childcare Management Software',
    description: 'Enterprise-level childcare management software with web and mobile applications. Features client management, scheduling, and comprehensive reporting.',
    image: '/esiKidzLogo.png',
    technologies: ['React.js', 'React Native', 'Node.js', 'MySQL', 'AWS Lambda', 'S3'],
    category: 'SaaS',
    liveUrl: 'https://esikidz.com',
    featured: true
  },
  {
    id: 4,
    title: 'Sunrise-club - Event Booking Platform',
    description: 'Event booking site for Telco (Sunrise) users of Switzerland. Features high security with web firewall, OAuth 2 + OIDC authentication, Adobe Analytics, and complete language translation system.',
    image: '/SunriseLogo.svg',
    technologies: ['React.js', 'Next.js', 'TypeScript', 'MongoDB', 'Storyblok CMS', 'Material UI', 'Ant Design', 'SASS'],
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
                Here you can find out more about the projects I have been part of,
                and experiences I have achieved while working with those projects...
              </p>
            </div>
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
                  <div className={styles.projectImageContainer}>
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
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
