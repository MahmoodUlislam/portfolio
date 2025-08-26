'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import Image from 'next/image'

const techStack = [
  {
    category: "Programming Languages",
    technologies: [
      { name: "JavaScript", icon: "/logos/javascript.png", color: "#F7DF1E" },
      { name: "Python", icon: "/logos/python.png", color: "#3776AB" },
      { name: "Swift", icon: "/logos/swift.png", color: "#FA7343" },
    ],
  },
  {
    category: "Frontend Development",
    technologies: [
      { name: "React.js", icon: "/logos/react.png", color: "#61DAFB" },
      { name: "Vue.js", icon: "/logos/vue.png", color: "#4FC08D" },
      { name: "Next.js", icon: "/logos/nextjs.png", color: "#000000" },
      { name: "React Native", icon: "/logos/react.png", color: "#61DAFB" },
    ],
  },
  {
    category: "Backend Development",
    technologies: [
      { name: "Node.js", icon: "/logos/nodejs.png", color: "#339933" },
      { name: "Express.js", icon: "/logos/express.png", color: "#000000" },
      { name: "GraphQL", icon: "/logos/graphql.png", color: "#E10098" },
      { name: "WebSockets", icon: "/logos/websocket.png", color: "#FF6B6B" },
    ],
  },
  {
    category: "Databases & Storage",
    technologies: [
      { name: "PostgreSQL", icon: "/logos/postgresql.png", color: "#336791" },
      { name: "MySQL", icon: "/logos/mysql.png", color: "#4479A1" },
      { name: "DynamoDB", icon: "/logos/aws-dynamodb.png", color: "#FF9900" },
      { name: "Firebase", icon: "/logos/firebase.png", color: "#FFCA28" },
    ],
  },
  {
    category: "Cloud & DevOps (AWS)",
    technologies: [
      { name: "AWS Lambda", icon: "/logos/aws-lambda.png", color: "#FF9900" },
      { name: "ECS Fargate", icon: "/logos/aws-ecs.png", color: "#FF9900" },
      { name: "API Gateway", icon: "/logos/aws-api-gateway.png", color: "#FF9900" },
      { name: "CloudFormation", icon: "/logos/aws-cloudformation.png", color: "#FF9900" },
    ],
  },
  {
    category: "AI & Machine Learning",
    technologies: [
      { name: "AWS Bedrock", icon: "/logos/aws-bedrock.png", color: "#FF9900" },
      { name: "SageMaker", icon: "/logos/aws-sagemaker.png", color: "#FF9900" },
      { name: "Rekognition", icon: "/logos/aws-rekognition.png", color: "#FF9900" },
      { name: "Transcribe", icon: "/logos/aws-transcribe.png", color: "#FF9900" },
    ],
  },
  {
    category: "Healthcare & Security",
    technologies: [
      { name: "Chime SDK", icon: "/logos/aws-chime.png", color: "#FF9900" },
      { name: "Cognito", icon: "/logos/aws-cognito.png", color: "#FF9900" },
      { name: "HealthLake", icon: "/logos/aws-healthlake.png", color: "#FF9900" },
      { name: "VPC", icon: "/logos/aws-vpc.png", color: "#FF9900" },
    ],
  },
  {
    category: "Build & Deployment",
    technologies: [
      { name: "Docker", icon: "/logos/docker.png", color: "#2496ED" },
      { name: "GitHub", icon: "/logos/github.png", color: "#181717" },
      { name: "Jest", icon: "/logos/jest.png", color: "#C21325" },
      { name: "ESLint", icon: "/logos/eslint.png", color: "#4B32C3" },
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
      className="space-y-12"
    >
      {techStack.map((category, categoryIndex) => (
        <motion.div
          key={category.category}
          variants={itemVariants}
          className="space-y-6"
        >
          <h3 className="text-2xl lg:text-3xl font-bold text-center text-white mb-8">
            {category.category}
          </h3>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-6">
            {category.technologies.map((tech, techIndex) => (
              <motion.div
                key={tech.name}
                className="group relative"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={inView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                transition={{
                  duration: 0.3,
                  delay: categoryIndex * 0.1 + techIndex * 0.05
                }}
              >
                <div className="flex flex-col items-center space-y-3 p-4 bg-white/5 backdrop-blur-sm rounded-xl border border-white/10 hover:bg-white/10 hover:border-white/20 transition-all duration-300">
                  <div className="relative w-16 h-16 lg:w-20 lg:h-20">
                    <Image
                      src={tech.icon}
                      alt={tech.name}
                      fill
                      className="object-contain"
                      onError={(e) => {
                        // Fallback for missing images
                        const target = e.target as HTMLImageElement
                        target.style.display = 'none'
                        target.nextElementSibling?.classList.remove('hidden')
                      }}
                    />
                    <div className="hidden absolute inset-0 flex items-center justify-center text-2xl font-bold text-white/60">
                      {tech.name.charAt(0)}
                    </div>
                  </div>

                  <span className="text-sm text-center text-white/80 font-medium group-hover:text-white transition-colors duration-300">
                    {tech.name}
                  </span>

                  {/* Tooltip */}
                  <div className="absolute -top-2 left-1/2 transform -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
                    <div className="bg-black/90 text-white text-xs px-2 py-1 rounded whitespace-nowrap">
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
