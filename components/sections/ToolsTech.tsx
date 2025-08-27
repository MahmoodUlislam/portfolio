'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import Image from 'next/image'
import styles from './ToolsTech.module.css'

const techStack = [
  {
    category: "Programming Languages",
    technologies: [
      { name: "JavaScript", icon: "/logos/javascript.png", color: "#F7DF1E" },
      { name: "Python", icon: "/logos/python.png", color: "#3776AB" },
    ],
  },
  {
    category: "Frontend Development",
    technologies: [
      { name: "React.js", icon: "/logos/react.png", color: "#61DAFB" },
      { name: "Next.js", icon: "/logos/nextjs.png", color: "#000000" },
      { name: "Vue.js", icon: "/logos/vuejs.png", color: "#4FC08D" },
      { name: "React Native", icon: "/logos/react.png", color: "#61DAFB" },
      { name: "PyQt", icon: "/logos/pyqt-official.png", color: "#3776AB" },
      { name: "Swift", icon: "/logos/swift-official.png", color: "#FA7343" },
    ],
  },
  {
    category: "State Management & Utilities",
    technologies: [
      { name: "Redux", icon: "/logos/Redux_Logo.png", color: "#764ABC" },
      { name: "Vuex", icon: "/logos/vuex-official.png", color: "#4FC08D" },
      { name: "React Query", icon: "/logos/react-query-official.png", color: "#FF4154" },
      { name: "react-i18next", icon: "/logos/react.png", color: "#61DAFB" },
    ],
  },
  {
    category: "Data Visualization & UI",
    technologies: [
      { name: "Chart.js", icon: "/logos/chartjs-official.png", color: "#FF6384" },
      { name: "react-calendar", icon: "/logos/react.png", color: "#61DAFB" },
      { name: "vue-cal", icon: "/logos/vuejs.png", color: "#4FC08D" },
      { name: "PDFMake", icon: "/logos/javascript.png", color: "#F7DF1E" },
    ],
  },
  {
    category: "Backend Development",
    technologies: [
      { name: "Node.js", icon: "/logos/nodejs.png", color: "#339933" },
      { name: "Express.js", icon: "/logos/expressLogo.svg", color: "#000000" },
      { name: "REST APIs", icon: "/logos/nodejs.png", color: "#339933" },
      { name: "GraphQL", icon: "/logos/graphql.png", color: "#E10098" },
      { name: "Apollo GraphQL", icon: "/logos/apollo-graphql-official.png", color: "#311C87" },
      { name: "WebSockets", icon: "/logos/websocket-official.png", color: "#00D9FF" },
      { name: "Server-Sent Events", icon: "/logos/nodejs.png", color: "#339933" },
      { name: "WebRTC", icon: "/logos/webrtc-official.png", color: "#F7DF1E" },
      { name: "Socket.IO", icon: "/logos/socketio-official.png", color: "#010101" },
    ],
  },
  {
    category: "Databases & Storage",
    technologies: [
      { name: "PostgreSQL", icon: "/logos/postgresql.png", color: "#336791" },
      { name: "MySQL", icon: "/logos/mysql.png", color: "#4479A1" },
      { name: "Amazon RDS", icon: "/logos/aws-rds.svg", color: "#FF9900" },
      { name: "MongoDB", icon: "/logos/mongodb.png", color: "#47A248" },
      { name: "DynamoDB", icon: "/logos/aws-dynamodb-official.svg", color: "#FF9900" },
      { name: "Firebase Firestore", icon: "/logos/firebase.png", color: "#FFCA28" },
      { name: "Prisma", icon: "/logos/prisma-official.svg", color: "#2D3748" },
      { name: "Sequelize", icon: "/logos/sequelize-official.png", color: "#52B0E7" },
      { name: "Amazon S3", icon: "/logos/aws-s3.svg", color: "#FF9900" },
    ],
  },
  {
    category: "Cloud & DevOps (AWS)",
    technologies: [
      { name: "AWS Lambda", icon: "/logos/aws-lambda.svg", color: "#FF9900" },
      { name: "ECS Fargate", icon: "/logos/aws-ecs.svg", color: "#FF9900" },
      { name: "Amazon EC2", icon: "/logos/aws-ec2.svg", color: "#FF9900" },
      { name: "Amazon SageMaker", icon: "/logos/aws-sagemaker.svg", color: "#FF9900" },
      { name: "API Gateway", icon: "/logos/aws-api-gateway.svg", color: "#FF9900" },
      { name: "VPC", icon: "/logos/aws-vpc-official.png", color: "#FF9900" },
      { name: "Application Load Balancer", icon: "/logos/aws-load-balancer.svg", color: "#FF9900" },
      { name: "Network Load Balancer", icon: "/logos/aws-load-balancer.svg", color: "#FF9900" },
      { name: "EventBridge", icon: "/logos/aws-eventbridge.svg", color: "#FF9900" },
      { name: "Amazon SNS", icon: "/logos/aws-sns.svg", color: "#FF9900" },
      { name: "Amazon SQS", icon: "/logos/aws-sqs.svg", color: "#FF9900" },
      { name: "Amazon SES", icon: "/logos/aws-ses.svg", color: "#FF9900" },
      { name: "Amazon Pinpoint", icon: "/logos/aws-pinpoint.svg", color: "#FF9900" },
      { name: "Amazon Data Firehose", icon: "/logos/aws-data-firehose.svg", color: "#FF9900" },
      { name: "AWS Cognito", icon: "/logos/aws-cognito.svg", color: "#FF9900" },
      { name: "AWS IAM", icon: "/logos/aws-iam.svg", color: "#FF9900" },
      { name: "AWS Secrets Manager", icon: "/logos/aws-secrets-manager.svg", color: "#FF9900" },
      { name: "Amazon CloudWatch", icon: "/logos/aws-cloudwatch.svg", color: "#FF9900" },
      { name: "AWS Step Functions", icon: "/logos/aws-step-functions.svg", color: "#FF9900" },
    ],
  },
  {
    category: "AI & Machine Learning",
    technologies: [
      { name: "PyTorch", icon: "/logos/pytorch-official.png", color: "#EE4C2C" },
      { name: "TensorFlow", icon: "/logos/tensorflow-official.png", color: "#FF6F00" },
      { name: "NumPy", icon: "/logos/numpy-official.svg", color: "#4DABCF" },
      { name: "Matplotlib", icon: "/logos/matplotlib-official.png", color: "#11557C" },
      { name: "Scikit-learn", icon: "/logos/scikit-learn-official.png", color: "#F7931E" },
      { name: "Amazon Bedrock", icon: "/logos/aws-bedrock.svg", color: "#FF9900" },
      { name: "Amazon Transcribe", icon: "/logos/aws-transcribe.svg", color: "#FF9900" },
      { name: "Amazon Polly", icon: "/logos/aws-polly.svg", color: "#FF9900" },
      { name: "Amazon Rekognition", icon: "/logos/aws-rekognition.svg", color: "#FF9900" },
      { name: "Amazon HealthLake", icon: "/logos/aws-healthlake.png", color: "#FF9900" },
      { name: "Amazon Comprehend", icon: "/logos/aws-comprehend.svg", color: "#FF9900" },
      { name: "OpenCV", icon: "/logos/opencv-official.png", color: "#3776AB" },
    ],
  },
  {
    category: "Authentication & Security",
    technologies: [
      { name: "OAuth 2.0", icon: "/logos/oauth2-official.svg", color: "#FF6B35" },
      { name: "OpenID Connect", icon: "/logos/openid-connect-official.png", color: "#F78C40" },
      { name: "AWS Amplify Auth", icon: "/logos/aws-amplify-official.svg", color: "#FF9900" },
      { name: "Auth0", icon: "/logos/auth0-official.png", color: "#EB5424" },
    ],
  },
  {
    category: "Build & Deployment",
    technologies: [
      { name: "GitHub", icon: "/logos/github.png", color: "#181717" },
      { name: "Bitbucket", icon: "/logos/bitbucket.jpeg", color: "#0052CC" },
      { name: "GitHub Actions", icon: "/logos/github.png", color: "#181717" },
      { name: "AWS Amplify CI/CD", icon: "/logos/aws-amplify-official.svg", color: "#FF9900" },
      { name: "Docker", icon: "/logos/docker.png", color: "#2496ED" },
      { name: "Docker Compose", icon: "/logos/docker-compose-official.png", color: "#2496ED" },
      { name: "Vite", icon: "/logos/vite-official.png", color: "#646CFF" },
      { name: "Webpack", icon: "/logos/webpack-official.png", color: "#8DD6F9" },
    ],
  },
  {
    category: "Testing & Code Quality",
    technologies: [
      { name: "Jest", icon: "/logos/jestLogo.svg", color: "#C21325" },
      { name: "Puppeteer", icon: "/logos/puppeteer-official.png", color: "#40B5A4" },
      { name: "ESLint", icon: "/logos/eslintLogo.svg", color: "#4B32C3" },
    ],
  },
  {
    category: "CMS Integration",
    technologies: [
      { name: "WordPress", icon: "/logos/wordpress-official.png", color: "#21759B" },
      { name: "Storyblok CMS", icon: "/logos/storyblok-official.png", color: "#00B3B0" },
    ],
  },
]

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
}

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5
    }
  }
}

export default function ToolsTech() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  })

  return (
    <motion.div
      ref={ref}
      variants={containerVariants}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      className={styles.techContainer}
    >
      {techStack.map((category, categoryIndex) => (
        <motion.div
          key={category.category}
          variants={itemVariants}
          className={styles.techCategory}
        >
          <h3 className={styles.categoryTitle}>
            {category.category}
          </h3>

          <div className={styles.techGrid}>
            {category.technologies.map((tech, techIndex) => (
              <motion.div
                key={tech.name}
                className={styles.techCard}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={inView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                transition={{
                  duration: 0.3,
                  delay: categoryIndex * 0.1 + techIndex * 0.05
                }}
              >
                <div className={styles.techCardContent}>
                  <div className={styles.techIconContainer}>
                    <Image
                      src={tech.icon}
                      alt={tech.name}
                      fill
                      className={styles.techIcon}
                      onError={(e) => {
                        // Fallback for missing images
                        const target = e.target as HTMLImageElement
                        target.style.display = 'none'
                        const fallback = target.nextElementSibling as HTMLElement
                        if (fallback) {
                          fallback.style.display = 'flex'
                        }
                      }}
                    />
                    <div className={styles.techFallback}>
                      {tech.name}
                    </div>
                  </div>

                  <span className={styles.techName}>
                    {tech.name}
                  </span>

                  {/* Tooltip */}
                  <div className={styles.techTooltip}>
                    <div className={styles.tooltipContent}>
                      {tech.name}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      ))}
    </motion.div>
  )
}
