'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import Image from 'next/image'
import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'
import styles from './AboutPage.module.css'

export default function AboutPage() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  })

  return (
    <div className={styles.aboutContainer}>
      <Navbar activeTab="About" />

      <main className={styles.mainContent}>
        {/* Hero Section */}
        <section className={styles.heroSection}>
          <div className={styles.heroContainer}>
            <motion.div
              className={styles.heroContent}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className={styles.heroTitle}>
                About Me
              </h1>
              <p className={styles.heroSubtitle}>
                Lead Software Engineer & Cloud & AI Architect
              </p>
            </motion.div>
          </div>
        </section>

        {/* About Content */}
        <section className={styles.aboutContentSection}>
          <div className={styles.aboutContentContainer}>
            <div className={styles.aboutGrid}>
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
              >
                <div className={styles.profileImageContainer}>
                  <Image
                    src="/pro-pic1.jpg"
                    alt="Mahmood ul Islam"
                    width={500}
                    height={600}
                    className={styles.profileImage}
                  />
                  <div className={styles.decorativeElement} />
                </div>
              </motion.div>

              <motion.div
                ref={ref}
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className={styles.aboutTextContent}
              >
                <h2 className={styles.aboutHeading}>
                  Hi, I&apos;m Mahmood ul Islam
                </h2>

                <p className={styles.aboutDescription}>
                  I&apos;m a passionate Senior Software Developer and Cloud & AI Specialist with over 5 years of experience
                  in building AI-powered healthcare applications and cloud-native solutions. Currently working at Virtual Health Hub in Canada,
                  I specialize in modern web technologies, AWS cloud infrastructure, and AI/ML integration.
                </p>

                <p className={styles.aboutDescription}>
                  My expertise spans across full-stack development, cloud architecture, AI/ML, and healthcare technology.
                  I love solving complex problems and creating innovative solutions that make a real impact in healthcare.
                </p>

                <div className={styles.statsGrid}>
                  <div className={styles.statCard}>
                    <div className={styles.statNumber}>5+</div>
                    <div className={styles.statLabel}>Years Experience</div>
                  </div>
                  <div className={styles.statCard}>
                    <div className={styles.statNumber}>10+</div>
                    <div className={styles.statLabel}>Projects Completed</div>
                  </div>
                  <div className={styles.statCard}>
                    <div className={styles.statNumber}>25+</div>
                    <div className={styles.statLabel}>Technologies</div>
                  </div>
                  <div className={styles.statCard}>
                    <div className={styles.statNumber}>100%</div>
                    <div className={styles.statLabel}>Client Satisfaction</div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Skills Section */}
        <section className={styles.skillsSection}>
          <div className={styles.skillsContainer}>
            <motion.div
              className={styles.skillsHeader}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className={styles.skillsTitle}>
                My Expertise
              </h2>
              <p className={styles.skillsDescription}>
                Areas where I excel and technologies I master
              </p>
            </motion.div>

            <div className={styles.skillsGrid}>
              {[
                {
                  title: 'Frontend Development',
                  description: 'Building responsive and interactive user interfaces with modern frameworks.',
                  skills: ['React.js', 'Vue.js', 'Next.js', 'React Native', 'Swift (iOS)']
                },
                {
                  title: 'Backend Development',
                  description: 'Creating robust server-side applications and APIs.',
                  skills: ['Node.js', 'Express.js', 'REST APIs', 'GraphQL', 'WebSockets']
                },
                {
                  title: 'Cloud & DevOps',
                  description: 'Deploying and managing applications in the cloud.',
                  skills: ['AWS', 'ECS Fargate', 'Lambda', 'API Gateway', 'CloudWatch']
                },
                {
                  title: 'Database Design',
                  description: 'Designing and optimizing database solutions.',
                  skills: ['PostgreSQL', 'MySQL', 'DynamoDB', 'Firebase', 'Prisma']
                },
                {
                  title: 'AI & Machine Learning',
                  description: 'Integrating AI services and building intelligent applications.',
                  skills: ['AWS Bedrock', 'SageMaker', 'Rekognition', 'Transcribe', 'Polly']
                },
                {
                  title: 'Healthcare Technology',
                  description: 'Building secure and compliant healthcare applications.',
                  skills: ['HIPAA Compliance', 'Chime SDK', 'HealthLake', 'Cognito', 'VPC']
                }
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
                  <p className={styles.skillDescription}>{category.description}</p>
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
