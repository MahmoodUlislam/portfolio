'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Mail, Phone, Globe, Github, Linkedin, Download } from 'lucide-react'
import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'
import DecorativeElement from '@/components/ui/DecorativeElement'
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
                Senior Software Developer | Cloud & AI Specialist
              </p>
            </motion.div>
            <DecorativeElement page="about" />
          </div>
        </section>

        {/* Contact & Overview Section */}
        <section className={styles.contactSection}>
          <div className={styles.contactContainer}>
            <motion.div
              className={styles.contactGrid}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <div className={styles.contactInfo}>
                <h2 className={styles.contactTitle}>Contact Information</h2>
                <div className={styles.contactDetails}>
                  <div className={styles.contactItem}>
                    <Phone className={styles.contactIcon} />
                    <span>+1-306-261-8482</span>
                  </div>
                  <div className={styles.contactItem}>
                    <Mail className={styles.contactIcon} />
                    <span>mahmood.islam@gmail.com</span>
                  </div>
                  <div className={styles.contactItem}>
                    <Globe className={styles.contactIcon} />
                    <span>https://portfolio-mahmoodulislam.vercel.app</span>
                  </div>
                  <div className={styles.contactItem}>
                    <Github className={styles.contactIcon} />
                    <span>https://github.com/MahmoodUlislam</span>
                  </div>
                  <div className={styles.contactItem}>
                    <Linkedin className={styles.contactIcon} />
                    <span>https://www.linkedin.com/in/mahmoodislam</span>
                  </div>
                </div>
                <a
                  href="/CVmahmood.pdf"
                  download
                  className={styles.downloadButton}
                >
                  <Download className={styles.downloadIcon} />
                  Download Full CV
                </a>
              </div>

              <div className={styles.overviewInfo}>
                <h2 className={styles.overviewTitle}>Professional Overview</h2>
                <p className={styles.overviewDescription}>
                  I&apos;m a passionate Senior Software Developer and Cloud & AI Specialist with over 5 years of experience
                  in building AI-powered healthcare applications and cloud-native solutions. Currently working at Virtual Health Hub in Canada,
                  I specialize in modern web technologies, AWS cloud infrastructure, and AI/ML integration.
                </p>
                <p className={styles.overviewDescription}>
                  My expertise spans across full-stack development, cloud architecture, AI/ML, and healthcare technology.
                  I love solving complex problems and creating innovative solutions that make a real impact in healthcare.
                </p>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Areas of Expertise Section */}
        <section className={styles.expertiseSection}>
          <div className={styles.expertiseContainer}>
            <motion.div
              className={styles.expertiseHeader}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className={styles.expertiseTitle}>Areas of Expertise</h2>
            </motion.div>

            <div className={styles.expertiseGrid}>
              {[
                {
                  title: 'Programming Languages',
                  skills: ['JavaScript', 'Python']
                },
                {
                  title: 'Frontend Development',
                  skills: ['React.js', 'Next.js', 'Vue.js', 'React Native (Expo)', 'PyQt', 'Swift (iOS native)']
                },
                {
                  title: 'State Management & Utilities',
                  skills: ['Redux', 'Vuex', 'React Query', 'react-i18next']
                },
                {
                  title: 'Data Visualization & UI Components',
                  skills: ['Chart.js', 'ECharts', 'react-calendar', 'vue-cal', 'PDFMake']
                },
                {
                  title: 'Backend Development',
                  skills: ['Node.js', 'Express.js', 'Next.js (API & Middleware)', 'AWS Lambda', 'AWS Amplify Backend']
                },
                {
                  title: 'API Development',
                  skills: ['RESTful APIs', 'GraphQL', 'Apollo GraphQL']
                },
                {
                  title: 'Real-Time Communication',
                  skills: ['WebSockets', 'Server-Sent Events (SSE)', 'Amazon Chime SDK', 'WebRTC', 'Socket.IO']
                },
                {
                  title: 'Database Management & Storage',
                  skills: ['PostgreSQL', 'MySQL', 'Amazon RDS', 'Firebase Firestore', 'MongoDB', 'Amazon DynamoDB', 'Prisma', 'Sequelize', 'Amazon S3']
                },
                {
                  title: 'Cloud & DevOps (AWS)',
                  skills: ['AWS Fargate (Amazon ECS)', 'Amazon EC2', 'AWS Lambda', 'Amazon SageMaker', 'Amazon API Gateway', 'VPC', 'Application Load Balancer (ALB)', 'Network Load Balancer (NLB)', 'EventBridge', 'Amazon S3', 'Amazon RDS', 'Amazon DynamoDB', 'Amazon SNS', 'Amazon SQS', 'Amazon SES', 'Amazon Pinpoint', 'Amazon Data Firehose', 'AWS Cognito', 'AWS Identity and Access Management (IAM)', 'AWS Secrets Manager', 'Amazon Bedrock', 'Transcribe', 'Polly', 'Amazon Rekognition', 'HealthLake', 'Amazon Comprehend', 'Amazon CloudWatch', 'AWS Step Functions']
                },
                {
                  title: 'Authentication & Security',
                  skills: ['OAuth 2.0', 'OpenID Connect (OIDC)', 'AWS Amplify Auth', 'Crypto.js', 'bcrypt.js', 'Auth0', 'AWS Cognito']
                },
                {
                  title: 'Build & Deployment Tools',
                  skills: ['GitHub', 'Bitbucket', 'GitHub Action', 'AWS Amplify CI/CD', 'Docker', 'Docker Compose', 'Vite', 'Webpack']
                },
                {
                  title: 'Testing & Code Quality',
                  skills: ['Jest', 'Puppeteer', 'Custom Node.js Scripts', 'ESLint', 'Prettier']
                },
                {
                  title: 'CMS Integration',
                  skills: ['WordPress', 'Storyblok CMS']
                },
                {
                  title: 'Computer Vision',
                  skills: ['Custom classifiers on SageMaker', 'Rekognition (pre-screen)', 'OpenCV (preprocessing)', 'image quality gates', 'confidence thresholds']
                }
              ].map((category, index) => (
                <motion.div
                  key={category.title}
                  className={styles.expertiseCard}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <h3 className={styles.expertiseCardTitle}>{category.title}</h3>
                  <div className={styles.expertiseSkills}>
                    {category.skills.map((skill) => (
                      <span
                        key={skill}
                        className={styles.expertiseSkill}
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

        {/* AI Workflow Integration Section */}
        <section className={styles.aiSection}>
          <div className={styles.aiContainer}>
            <motion.div
              className={styles.aiContent}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className={styles.aiTitle}>AI Workflow Integration</h2>
              <p className={styles.aiDescription}>
                Designed and productionized multi-agent and computer-vision pipelines across healthcare apps. For LifeLine, built an agentic system on Amazon Bedrock
                (chatbot, session-summary, and risk-analytics agents) with streaming I/O, Polly TTS, and Transcribe STT; integrated Chime SDK for sessions and ambient
                listening (text + Rekognition facial/engagement cues) to generate real-time summaries and risk signals, with structured memory and secure backend
                context injection. For SkinScan, implemented a three-stage CV pipeline—Rekognition pre-screen, SageMaker classification, and serverless wound
                segmentation with RLE masks—plus Bedrock agents for wound staging, healing assessment, and clinical recommendations; integrated Comprehend Medical
                for ICD-10/RxNorm inference and real-time SSE streaming for analysis progress. Both solutions run in VPC-isolated AWS environments with Cognito auth,
                presigned S3 media flows, and full audit/reporting for privacy and accountability.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Experience Highlights Section */}
        <section className={styles.experienceSection}>
          <div className={styles.experienceContainer}>
            <motion.div
              className={styles.experienceHeader}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className={styles.experienceTitle}>Experience Highlights</h2>
            </motion.div>

            <div className={styles.experienceGrid}>
              {[
                {
                  company: 'Virtual Health Hub',
                  position: 'Senior Software Developer | Cloud & AI Specialist',
                  duration: 'March 2025 – Present',
                  location: 'Saskatoon, Saskatchewan, Canada',
                  highlights: [
                    'Managing the Lifeline Project end-to-end, including development, cloud infrastructure, and solution architecture',
                    'Built highly scalable system using Next.js, Vue.js, React.js, Quasar, and React Native for enterprise-level healthcare applications',
                    'Created AI chatbot with voice/text integration using Amazon Bedrock and Polly',
                    'Developed video conference ambient listening with Chime SDK, Transcribe, S3 and Bedrock',
                    'Built Agentic AI system with multiple agents for chatbot, video summary, and risk analytics',
                    'Architected and managed AWS cloud infrastructure including Cognito, ECS, RDS, EventBridge, and more'
                  ]
                },
                {
                  company: 'Virtual Health Hub',
                  position: 'Software Developer',
                  duration: 'August 2024 – February 2025',
                  location: 'Saskatoon, Saskatchewan, Canada',
                  highlights: [
                    'Developed full-stack healthcare applications using React.js, Vue.js, and Node.js',
                    'Implemented AI integrations and cloud infrastructure',
                    'Built appointment booking and medication management systems',
                    'Integrated Amazon Chime SDK with React Native using Swift & Kotlin'
                  ]
                },
                {
                  company: 'Saaska Software Inc.',
                  position: 'Software Engineer and Technical Support Assistant',
                  duration: 'April 2023 – June 2024',
                  location: 'Saskatoon, Saskatchewan, Canada',
                  highlights: [
                    'Developed esiKidz childcare management software using React.js and React Native',
                    'Created scalable web and mobile applications',
                    'Performed optimization of developer toolchain and automated deployment',
                    'Supported Business Development and Marketing with internal software solutions'
                  ]
                },
                {
                  company: 'SELISE Digital Platforms',
                  position: 'Software Engineer',
                  duration: 'June 2022 – Aug 2022',
                  location: 'Switzerland',
                  highlights: [
                    'Developed Sunrise-club event booking site for Telco users',
                    'Implemented OAuth 2 + OIDC and Adobe Analytics',
                    'Maintained web firewall security and URL redirects',
                    'Created complete language translation system'
                  ]
                },
                {
                  company: 'Quantic Dynamics Ltd.',
                  position: 'Web Developer',
                  duration: 'Feb 2019 – May 2022',
                  location: 'Bangladesh',
                  highlights: [
                    'Developed full-stack web applications using React.js, Next.js, and Node.js',
                    'Implemented responsive designs and REST API solutions',
                    'Architected frontend & backend solutions with asynchronous client-server communication',
                    'Customized fully responsive websites with mobile, tablet and desktop views'
                  ]
                }
              ].map((job, index) => (
                <motion.div
                  key={`${job.company}-${job.position}-${index}`}
                  className={styles.experienceCard}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <div className={styles.experienceHeader}>
                    <h3 className={styles.experienceCompany}>{job.company}</h3>
                    <h4 className={styles.experiencePosition}>{job.position}</h4>
                    <div className={styles.experienceMeta}>
                      <span>{job.duration}</span>
                      <span>•</span>
                      <span>{job.location}</span>
                    </div>
                  </div>
                  <ul className={styles.experienceHighlights}>
                    {job.highlights.map((highlight, highlightIndex) => (
                      <li key={highlightIndex} className={styles.experienceHighlight}>
                        {highlight}
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Education Section */}
        <section className={styles.educationSection}>
          <div className={styles.educationContainer}>
            <motion.div
              className={styles.educationContent}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className={styles.educationTitle}>Education</h2>
              <div className={styles.educationItems}>
                <div className={styles.educationItem}>
                  <h3 className={styles.educationDegree}>Applied Certificate in Website Design and Development</h3>
                  <p className={styles.educationSchool}>Saskatchewan Polytechnic</p>
                </div>
                <div className={styles.educationItem}>
                  <h3 className={styles.educationDegree}>Bachelor of Science in Textile Engineering</h3>
                  <p className={styles.educationSchool}>Ahsanullah University of Science & Technology</p>
                  <p className={styles.educationNote}>WES Canadian equivalency 4-year bachelor, Ref# 4848976</p>
                </div>
              </div>
            </motion.div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
