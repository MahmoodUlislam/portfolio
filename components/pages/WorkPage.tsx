'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import Image from 'next/image'
import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'
import styles from './WorkPage.module.css'

const workExperience = [
  {
    company: 'Virtual Health Hub',
    position: 'Senior Software Developer | Cloud & AI Specialist',
    duration: 'March 2025 - Present',
    location: 'Saskatoon, Saskatchewan, Canada',
    description: 'Leading development of AI-powered healthcare applications including LifeLine and SkinScan. Managing end-to-end project development, cloud infrastructure, and solution architecture.',
    technologies: ['React.js', 'Vue.js', 'Next.js', 'Node.js', 'AWS', 'Swift', 'Python'],
    logo: '/VHH_Logo.jpg'
  },
  {
    company: 'Virtual Health Hub',
    position: 'Software Developer',
    duration: 'August 2024 - February 2025',
    location: 'Saskatoon, Saskatchewan, Canada',
    description: 'Developed full-stack healthcare applications using React.js, Vue.js, and Node.js. Implemented AI integrations and cloud infrastructure.',
    technologies: ['React.js', 'Vue.js', 'Node.js', 'AWS', 'PostgreSQL'],
    logo: '/VHH_Logo.jpg'
  },
  {
    company: 'Saaska Software Inc.',
    position: 'Software Engineer and Technical Support Assistant',
    duration: 'April 2023 - June 2024',
    location: 'Saskatoon, Saskatchewan, Canada',
    description: 'Developed esiKidz childcare management software using React.js and React Native. Created scalable web and mobile applications.',
    technologies: ['React.js', 'React Native', 'Node.js', 'MySQL', 'AWS Lambda'],
    logo: '/SaaskaLogo.png'
  },
  {
    company: 'SELISE Digital Platforms',
    position: 'Software Engineer',
    duration: 'June 2022 - August 2022',
    location: 'Switzerland',
    description: 'Developed Sunrise-club event booking site for Telco users. Implemented OAuth 2 + OIDC, Adobe Analytics, and maintained web firewall security.',
    technologies: ['React.js', 'Next.js', 'TypeScript', 'MongoDB', 'Storyblok CMS', 'Material UI'],
    logo: '/seliseLogo.jpg'
  },
  {
    company: 'Quantic Dynamics Ltd.',
    position: 'Web Developer',
    duration: 'February 2019 - May 2022',
    location: 'Bangladesh',
    description: 'Developed full-stack web applications using React.js, Next.js, and Node.js. Implemented responsive designs and REST API solutions.',
    technologies: ['React.js', 'Next.js', 'Node.js', 'MongoDB', 'Firebase', 'Material UI'],
    logo: '/Quantic-Dynamics-Logo-Red-4.0-500px.jpg'
  }
]

const timelineVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2
    }
  }
}

const itemVariants = {
  hidden: { opacity: 0, x: -50 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.6
    }
  }
}

export default function WorkPage() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  })

  return (
    <div className={styles.workContainer}>
      <Navbar activeTab="Work" />

      <main className={styles.mainContent}>
        {/* Hero Section */}
        <section className={styles.skillsSection}>
          <div className={styles.container}>
            <motion.div
              className={styles.header}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className={styles.title}>
                Work Experience
              </h1>
              <p className={styles.subtitle}>
                My professional journey in software development and engineering
              </p>
            </motion.div>
          </div>
        </section>

        {/* Timeline Section */}
        <section className={styles.skillsSection}>
          <div className={styles.container}>
            <motion.div
              ref={ref}
              variants={timelineVariants}
              initial="hidden"
              animate={inView ? "visible" : "hidden"}
              className={styles.timeline}
            >
              {workExperience.map((work, index) => (
                <motion.div
                  key={work.company}
                  variants={itemVariants}
                  className={styles.timelineItem}
                >
                  <div className={styles.timelineContent}>
                    <div className={styles.card}>
                      <div className={styles.cardContent}>
                        <div className={styles.logoContainer}>
                          <Image
                            src={work.logo}
                            alt={work.company}
                            fill
                            className={styles.logoImage}
                          />
                        </div>

                        <div className={styles.content}>
                          <h3 className={styles.companyName}>
                            {work.company}
                          </h3>
                          <h4 className={styles.position}>
                            {work.position}
                          </h4>
                          <div className={styles.meta}>
                            <span>{work.duration}</span>
                            <span>•</span>
                            <span>{work.location}</span>
                          </div>
                          <p className={styles.description}>
                            {work.description}
                          </p>
                          <div className={styles.technologies}>
                            {work.technologies.map((tech) => (
                              <span
                                key={tech}
                                className={styles.techTag}
                              >
                                {tech}
                              </span>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Skills Section */}
        <section className={styles.skillsSection}>
          <div className={styles.container}>
            <motion.div
              className={styles.header}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className={styles.title}>
                Key Skills
              </h2>
              <p className={styles.subtitle}>
                Technologies and tools I&apos;ve worked with throughout my career
              </p>
            </motion.div>

            <div className={styles.skillsGrid}>
              {[
                { title: 'Frontend', skills: ['React.js', 'Vue.js', 'Next.js', 'React Native', 'Swift (iOS)'] },
                { title: 'Backend', skills: ['Node.js', 'Express.js', 'REST APIs', 'GraphQL', 'WebSockets'] },
                { title: 'Cloud & DevOps', skills: ['AWS', 'ECS Fargate', 'Lambda', 'API Gateway', 'CloudWatch'] },
                { title: 'Databases', skills: ['PostgreSQL', 'MySQL', 'DynamoDB', 'Firebase', 'Prisma'] },
                { title: 'AI & ML', skills: ['AWS Bedrock', 'SageMaker', 'Rekognition', 'Transcribe', 'Polly'] },
                { title: 'Tools', skills: ['Git', 'GitHub', 'Docker', 'Jest', 'ESLint'] }
              ].map((category, index) => (
                <motion.div
                  key={category.title}
                  className={styles.skillCard}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <h3 className={styles.skillTitle}>{category.title}</h3>
                  <div className={styles.skillTags}>
                    {category.skills.map((skill) => (
                      <span
                        key={skill}
                        className={styles.skillTag}
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
