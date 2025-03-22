import * as logos from "../../assets";
import { VIcon } from "../icon";
import styles from "./toolstech.module.scss";

// Mapping of technologies to their corresponding icons
const techStack = [
  {
    category: "Programming Languages",
    technologies: [
      { name: "JavaScript", icon: "jsLogo", size: 65 },
      { name: "Python", icon: "pythonLogo", size: 65 }, // Add pythonLogo.svg later
    ],
  },
  {
    category: "Frontend Development",
    technologies: [
      { name: "React.js", icon: "reactLogo", size: 65 },
      { name: "Next.js", icon: "nextLogo", size: 100 },
      { name: "Vue.js", icon: "vueLogo", size: 65 }, // Add vueLogo.svg later
      { name: "Quasar Framework", icon: "quasarLogo", size: 65 }, // Add quasarLogo.svg later
      { name: "React Native (Expo)", icon: "reactLogo", size: 65 },
    ],
  },
  {
    category: "State Management & Utilities",
    technologies: [
      { name: "Redux", icon: "reduxLogo", size: 65 },
      { name: "Vuex", icon: "vueLogo", size: 65 }, // Add vueLogo.svg later
      { name: "React Query", icon: "reactQueryLogo", size: 65 }, // Add reactQueryLogo.svg later
      { name: "react-i18next", icon: "i18nextLogo", size: 65 }, // Add i18nextLogo.svg later
    ],
  },
  {
    category: "Data Visualization & UI Components",
    technologies: [
      { name: "Chart.js", icon: "chartJsLogo", size: 65 }, // Add chartJsLogo.svg later
      { name: "ECharts", icon: "echartsLogo", size: 65 }, // Add echartsLogo.svg later
      { name: "react-calendar", icon: "reactCalendarLogo", size: 65 }, // Add calendarLogo.svg later
      { name: "vue-cal", icon: "vueCalLogo", size: 65 }, // Add vueCalLogo.svg later
      { name: "PDFMake", icon: "pdfMakeLogo", size: 65 }, // Add pdfMakeLogo.svg later
    ],
  },
  {
    category: "Backend Development",
    technologies: [
      { name: "Node.js", icon: "nodeLogo", size: 65 },
      { name: "Express.js", icon: "expressLogo", size: 65 }, // Add expressLogo.svg later
      { name: "GraphQL", icon: "graphqlLogo", size: 65 },
      { name: "Apollo GraphQL", icon: "apolloLogo", size: 65 },
    ],
  },
  {
    category: "Databases & Storage",
    technologies: [
      { name: "PostgreSQL", icon: "postgresqlLogo", size: 65 },
      { name: "MySQL", icon: "mysqlLogo", size: 65 },
      { name: "MongoDB", icon: "mongoLogo", size: 65 },
      { name: "Firebase Firestore", icon: "firebaseLogo", size: 65 },
      { name: "Amazon DynamoDB", icon: "awsDynamoLogo", size: 65 },
      { name: "Prisma", icon: "prismaLogo", size: 65 }, // Add prismaLogo.svg later
      { name: "Sequelize", icon: "sequelizeLogo", size: 65 }, // Add sequelizeLogo.svg later
    ],
  },
  {
    category: "Cloud & DevOps (AWS)",
    technologies: [
      { name: "AWS Lambda", icon: "awsLambdaLogo", size: 65 },
      { name: "AWS Amplify", icon: "awsAmplifyLogo", size: 65 },
      { name: "AWS API Gateway", icon: "awsApiGatewayLogo", size: 65 },
      { name: "AWS Cognito", icon: "awsCognitoLogo", size: 65 },
      { name: "Amazon S3", icon: "awsS3Logo", size: 65 },
      { name: "AWS EC2", icon: "awsEc2Logo", size: 65 },
      { name: "AWS ECS (Fargate)", icon: "awsEcsLogo", size: 65 },
      { name: "AWS EventBridge", icon: "awsEventBridgeLogo", size: 65 }, // Add awsEventBridgeLogo.svg later
      { name: "AWS Pinpoint", icon: "awsPinpointLogo", size: 65 }, // Add awsPinpointLogo.svg later
    ],
  },
  {
    category: "AI & Machine Learning",
    technologies: [
      { name: "Amazon Bedrock", icon: "awsBedrockLogo", size: 65 }, // Add awsBedrockLogo.svg later
      { name: "Amazon Transcribe", icon: "awsTranscribeLogo", size: 65 }, // Add awsTranscribeLogo.svg later
      { name: "Amazon Polly", icon: "awsPollyLogo", size: 65 }, // Add awsPollyLogo.svg later
      { name: "Amazon Rekognition", icon: "awsRekognitionLogo", size: 65 }, // Add awsRekognitionLogo.svg later
      { name: "Amazon HealthLake", icon: "awsHealthLakeLogo", size: 65 }, // Add awsHealthLakeLogo.svg later
    ],
  },
  {
    category: "Testing & Code Quality",
    technologies: [
      { name: "Jest", icon: "jestLogo", size: 50 },
      { name: "Puppeteer", icon: "puppeteerLogo", size: 50 }, // Add puppeteerLogo.svg later
      { name: "ESLint", icon: "eslintLogo", size: 50 },
      { name: "Prettier", icon: "prettierLogo", size: 50 },
    ],
  },
  {
    category: "Build & Deployment Tools",
    technologies: [
      { name: "Docker", icon: "dockerLogo", size: 65 },
      { name: "GitHub", icon: "gitHubLogo", size: 65 },
      { name: "Bitbucket", icon: "bitbucketLogo", size: 65 }, // Add bitbucketLogo.svg later
      { name: "Vite", icon: "viteLogo", size: 65 },
      { name: "Webpack", icon: "webpackLogo", size: 65 },
      { name: "GitHub Actions", icon: "gitHubActionsLogo", size: 65 }, // Add gitHubActionsLogo.svg later
    ],
  },
  {
    category: "Design & UI Tools",
    technologies: [
      { name: "Figma", icon: "figmaLogo", size: 50 },
      { name: "AdobeXD", icon: "adobeXDLogo", size: 50 },
    ],
  },
];

export function VToolsTech() {
  return (
    <div className={styles.technologiesIcons}>
      {techStack.map((category, index) => (
        <div key={index} className={styles.technologiesIconsRow}>
          {category.technologies.map((tech, idx) => (
            logos[tech.icon] ? (
              <VIcon
                key={idx}
                defaulIcon={logos[tech.icon]}
                onHoverIcon={logos[`${tech.icon}Hover`] || logos[tech.icon]}
                height={tech.size}
                width={tech.size}
                name={tech.name}
              />
            ) : (
              <span key={idx} className={styles.missingIcon}>
                {/* Placeholder for missing icons */}
                {tech.name} (Icon Missing)
              </span>
            )
          ))}
        </div>
      ))}
    </div>
  );
}
