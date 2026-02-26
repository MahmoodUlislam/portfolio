'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import Image from 'next/image'
import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'
import DecorativeElement from '@/components/ui/DecorativeElement'
import styles from './WorkPage.module.css'

const workExperience = [
  {
    company: 'Virtual Health Hub',
    position: 'Senior Software Engineer | Cloud & AI Specialist',
    duration: 'March 2025 - Present',
    location: 'Saskatoon, Saskatchewan, Canada',
    description: 'Leading development of AI-powered healthcare applications including LifeLine and SkinScan. Managing end-to-end project development, cloud infrastructure, and solution architecture ensuring scalability and HIPAA compliance.',
    technologies: ['React.js', 'Vue.js', 'Next.js', 'Quasar', 'React Native', 'Node.js', 'Swift', 'Python', 'PostgreSQL', 'AWS'],
    logo: '/VHH_Logo.jpg'
  },
  {
    company: 'Virtual Health Hub',
    position: 'Software Developer',
    duration: 'August 2024 - February 2025',
    location: 'Saskatoon, Saskatchewan, Canada',
    description: 'Developed full-stack healthcare applications using React.js, Vue.js, and Node.js. Implemented AI integrations and cloud infrastructure for the LifeLine virtual mental health platform.',
    technologies: ['React.js', 'Vue.js', 'React Native', 'Node.js', 'Express.js', 'PostgreSQL', 'AWS'],
    logo: '/VHH_Logo.jpg'
  },
  {
    company: 'Saaska Software Inc.',
    position: 'Software Engineer',
    duration: 'April 2023 - June 2024',
    location: 'Saskatoon, Saskatchewan, Canada',
    description: 'Developed esiKidz childcare management software using React.js and React Native at enterprise level. Created data engineering apps and maintained AWS cloud infrastructure.',
    technologies: ['React.js', 'React Native', 'Node.js', 'MySQL', 'AWS Lambda', 'Amazon S3'],
    logo: '/SaaskaLogo.png'
  },
  {
    company: 'SELISE Digital Platforms',
    position: 'Software Engineer',
    duration: 'June 2022 - August 2022',
    location: 'Switzerland',
    description: 'Developed Sunrise-club event booking site for Telco (Sunrise) users of Switzerland. Implemented OAuth 2 + OIDC, Storyblok CMS, and maintained web firewall security.',
    technologies: ['React.js', 'Next.js', 'TypeScript', 'MongoDB', 'Storyblok CMS', 'Material UI'],
    logo: '/seliseLogo.jpg'
  },
  {
    company: 'Quantic Dynamics Ltd.',
    position: 'Web Developer',
    duration: 'February 2019 - May 2022',
    location: 'Bangladesh',
    description: 'Built fully responsive web applications using React.js, Next.js, and Node.js with MongoDB and Firebase. Architected frontend and backend solutions with RESTful API integration.',
    technologies: ['React.js', 'Next.js', 'Node.js', 'MongoDB', 'Firebase'],
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
        <section className={styles.heroSection}>
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
            <DecorativeElement page="work" />
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
                  key={`${work.company}-${work.position}-${index}`}
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
                            sizes="(max-width: 768px) 60px, (max-width: 1024px) 80px, 100px"
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
                { title: 'Backend', skills: ['Node.js', 'Express.js', 'REST APIs', 'GraphQL', 'WebSockets', 'Socket.IO'] },
                { title: 'Cloud & DevOps', skills: ['ECS Fargate', 'Lambda', 'API Gateway', 'CloudFormation', 'AWS CDK', 'CloudWatch'] },
                { title: 'Databases', skills: ['PostgreSQL', 'MySQL', 'DynamoDB', 'Firebase', 'Prisma', 'Amazon S3'] },
                { title: 'AI & ML', skills: ['SageMaker AI', 'Bedrock', 'Rekognition', 'Comprehend Medical', 'Transcribe', 'Polly'] },
                { title: 'Data Engineering', skills: ['AWS Glue', 'Kinesis', 'Athena', 'Redshift', 'QuickSight', 'EMR'] },
                { title: 'MLOps', skills: ['SageMaker Pipelines', 'Model Monitor', 'Feature Store', 'A/B Testing', 'Model Registry'] },
                { title: 'Tools & CI/CD', skills: ['Git', 'GitHub Actions', 'Docker', 'CodePipeline', 'CodeBuild', 'Jest'] }
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
