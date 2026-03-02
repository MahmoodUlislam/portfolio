'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Mail, Phone, Globe, Github, Linkedin, Download } from 'lucide-react'
import Image from 'next/image'
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
                Senior Software Engineer | Cloud & AI Specialist
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
                  Senior Software Engineer – specializing in cloud-native and AI-powered application development for the healthcare industry. Currently leading end-to-end development of production-grade telemedicine platforms.
                </p>
                <p className={styles.overviewDescription}>
                  AWS Certified Machine Learning Engineer – Associate, combining deep full-stack engineering expertise with hands-on machine learning and data engineering capabilities.
                </p>
                <p className={styles.overviewDescription}>
                  My work spans the full technology lifecycle — from designing cloud architectures and building scalable backend systems to training custom computer vision models and deploying multi-agent AI systems in production. I independently architect and manage multiple healthcare platforms, including virtual mental health treatment systems featuring agentic AI with multi-modal interaction, ambient summarization, and clinical risk analytics, as well as AI-powered medical imaging platforms with custom-trained vision transformers for classification and semantic segmentation.
                </p>
                <p className={styles.overviewDescription}>
                  <strong>Key strengths:</strong>
                </p>
                <ul className={styles.overviewList}>
                  <li>Designed and productionized agentic AI systems orchestrating multiple specialized agents with structured memory, context injection, and streaming I/O for real-time interactions</li>
                  <li>Built end-to-end computer vision pipelines from data preparation and model training to fine-tuning, deployment, and serverless inference at scale</li>
                  <li>Integrated AI deeply into full-stack applications including NLP, speech-to-text, text-to-speech, medical terminology extraction, and real-time video/audio analysis</li>
                  <li>Implemented RAG architectures, prompt engineering strategies, and guardrails to ensure safe, accurate, and context-aware AI responses in sensitive healthcare environments</li>
                  <li>Managed the complete MLOps lifecycle, including model versioning, monitoring, A/B testing, and CI/CD for ML workflows</li>
                </ul>
                <p className={styles.overviewDescription}>
                  Beyond engineering – independently authored peer-reviewed research manuscripts and collaborated on funding and ethics board applications, bridging applied technology with academic contribution. Driven by building technology that directly impacts patient care in communities with limited access to specialists, combining technical depth with a mission-focused approach to healthcare innovation.
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
                  skills: ['React.js', 'Vue.js', 'React Native', 'Swift (iOS)', 'Next.js']
                },
                {
                  title: 'Backend Development',
                  skills: ['Node.js', 'Express.js', 'Next.js (API & Middleware)', 'AWS Lambda', 'AWS Amplify Backend', 'RESTful APIs', 'GraphQL', 'Apollo GraphQL', 'WebSockets', 'Server-Sent Events (SSE)', 'Amazon Chime SDK', 'WebRTC', 'Socket.IO']
                },
                {
                  title: 'Database Management & Storage',
                  skills: ['PostgreSQL', 'MySQL', 'Amazon RDS', 'Firebase Firestore', 'MongoDB', 'Amazon DynamoDB', 'Prisma', 'Sequelize', 'Amazon S3']
                },
                {
                  title: 'Cloud & DevOps (AWS)',
                  skills: ['Fargate (ECS)', 'Amazon EC2', 'API Gateway', 'VPC', 'ALB', 'NLB', 'Amazon EventBridge', 'Amazon SNS', 'Amazon SQS', 'Amazon SES', 'Amazon Pinpoint', 'AWS Cognito', 'AWS IAM', 'AWS Secrets Manager', 'Amazon CloudWatch', 'CloudTrail', 'AWS Step Functions', 'CloudFormation', 'AWS CDK']
                },
                {
                  title: 'ML Frameworks & Training',
                  skills: ['Amazon SageMaker AI', 'PyTorch', 'HuggingFace Transformers', 'Boto3', 'Model Evaluation', 'Hyperparameter Optimization', 'Bias Detection', 'Training & Fine-tuning', 'Deployment']
                },
                {
                  title: 'Generative AI & Agents',
                  skills: ['Amazon Bedrock', 'Foundation Models', 'Agents', 'Knowledge Bases', 'Guardrails', 'Prompt Engineering', 'RAG Architectures', 'Multi-agent Orchestration']
                },
                {
                  title: 'Computer Vision',
                  skills: ['Custom-trained SageMaker Models', 'Semantic Segmentation', 'Image Classification', 'Amazon Rekognition (built-in & custom labels)']
                },
                {
                  title: 'NLP & Medical AI',
                  skills: ['Amazon Comprehend', 'Comprehend Medical', 'Amazon Transcribe', 'Amazon Polly', 'Amazon HealthLake']
                },
                {
                  title: 'Data Pipelines & ETL',
                  skills: ['AWS Glue', 'Glue DataBrew', 'Amazon Data Firehose', 'Amazon Kinesis', 'Amazon EMR']
                },
                {
                  title: 'Data Analytics & Warehousing',
                  skills: ['Amazon Athena', 'Amazon Redshift', 'Amazon QuickSight', 'AWS Lake Formation']
                },
                {
                  title: 'Data Preparation & Analysis',
                  skills: ['Pandas', 'NumPy', 'Scikit-learn', 'Data Wrangling', 'Feature Selection']
                },
                {
                  title: 'MLOps & Model Management',
                  skills: ['SageMaker Pipelines', 'Model Monitor', 'SageMaker Feature Store', 'SageMaker Processing', 'A/B Testing', 'Shadow Testing', 'Canary Deployment', 'Model Registry']
                },
                {
                  title: 'ML Concepts',
                  skills: ['Supervised & Unsupervised Learning', 'Deep Learning (CNNs, Transformers, ViTs)', 'Transfer Learning', 'Ensemble Methods', 'Time-series Forecasting', 'Anomaly Detection']
                },
                {
                  title: 'Authentication & Security',
                  skills: ['OAuth 2.0', 'OpenID Connect (OIDC)', 'AWS Amplify Auth', 'Auth0']
                },
                {
                  title: 'Build & Deployment Tools',
                  skills: ['GitHub', 'Bitbucket', 'GitHub Actions', 'AWS Amplify CI/CD', 'CodePipeline', 'CodeBuild', 'CodeDeploy', 'Docker', 'Docker Compose']
                },
                {
                  title: 'Testing & Code Quality',
                  skills: ['Jest', 'Puppeteer', 'Custom Node.js Scripts']
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
                  position: 'Senior Software Engineer | Cloud & AI Specialist',
                  duration: 'March 2025 – Present',
                  location: 'Saskatoon, Saskatchewan, Canada',
                  highlights: [
                    'Managing the Lifeline Project end-to-end, including development, cloud infrastructure, and solution architecture',
                    'Built highly scalable system using Next.js, Vue.js, React.js, Quasar, and React Native, maintaining HIPAA compliance',
                    'Created multi-modal AI chatbot with voice/text integration using Amazon Bedrock, Polly and Transcribe',
                    'Developed video conference ambient listening to summarize meetings with Chime SDK, Transcribe, S3 and Bedrock',
                    'Built Agentic AI system with multiple agents for chatbot, video conference summary, and risk analytics',
                    'Architected AWS cloud infrastructure including Cognito, ECS Fargate, RDS, EventBridge, API Gateway, and Chime SDK',
                    'Developed custom native module in Expo using Swift & Kotlin to bridge Amazon Chime SDK with React Native',
                    'Authored peer-reviewed manuscript on AI safety evaluation in mental health systems'
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
                    'Built dynamic appointment booking and medication management systems with analytics and notifications',
                    'Integrated Amazon Chime SDK with React Native using Swift & Kotlin'
                  ]
                },
                {
                  company: 'Saaska Software Inc.',
                  position: 'Software Engineer',
                  duration: 'April 2023 – June 2024',
                  location: 'Saskatoon, Saskatchewan, Canada',
                  highlights: [
                    'Developed esiKidz childcare management software using React.js and React Native at the enterprise level',
                    'Learned data engineering by creating apps for web crawling, data extraction, and manipulation',
                    'Experienced AWS cloud infrastructure maintenance, including Lambda, Amazon S3, API Gateway',
                    'Performed optimization of developer toolchain, fully automating deployment and minimizing development friction'
                  ]
                },
                {
                  company: 'SELISE Digital Platforms',
                  position: 'Software Engineer',
                  duration: 'June 2022 – Aug 2022',
                  location: 'Switzerland',
                  highlights: [
                    'Developed Sunrise-club event booking site for Telco (Sunrise) users of Switzerland',
                    'Implemented OAuth 2 + OIDC, Storyblok CMS, and MongoDB database',
                    'Maintained URL redirect with WAF in production and web firewall security',
                    'Constructed a complete language translation system'
                  ]
                },
                {
                  company: 'Quantic Dynamics Ltd.',
                  position: 'Web Developer',
                  duration: 'Feb 2019 – May 2022',
                  location: 'Bangladesh',
                  highlights: [
                    'Built fully responsive web applications using React.js, Next.js, and Node.js with MongoDB and Firebase',
                    'Architected frontend and backend solutions with RESTful API integration and asynchronous client-server communication',
                    'Implemented data manipulation, search, and sort functionalities using Node.js'
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

        {/* Certifications Section */}
        <section className={styles.certificationsSection}>
          <div className={styles.certificationsContainer}>
            <motion.div
              className={styles.certificationsContent}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className={styles.certificationsTitle}>Certifications</h2>
              <div className={styles.certificationsGrid}>
                <motion.a
                  href="https://www.credly.com/badges/0e1a5b1c-f08c-483a-bf10-23ccdba8a23b/public_url"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.certificationCard}
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <div className={styles.certificationBadgeImage}>
                    <Image
                      src="/aws-certified-machine-learning-engineer-associate.png"
                      alt="AWS Certified Machine Learning Engineer – Associate"
                      width={120}
                      height={120}
                      className={styles.certBadgeImg}
                    />
                  </div>
                  <div className={styles.certificationDetails}>
                    <span className={styles.certIssuer}>Amazon Web Services (AWS)</span>
                    <h3 className={styles.certName}>AWS Certified Machine Learning Engineer – Associate</h3>
                    <p className={styles.certDescription}>
                      Validates expertise in building, training, tuning, and deploying machine learning models using AWS services.
                    </p>
                    <span className={styles.certVerify}>
                      Verify on Credly &rarr;
                    </span>
                  </div>
                </motion.a>
              </div>
            </motion.div>
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
