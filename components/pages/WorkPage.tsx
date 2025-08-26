'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import Image from 'next/image'
import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'

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
    technologies: ['React.js', 'Vue.js', 'Node.js', 'AWS', 'PostgreSQL', 'SASS'],
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
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white">
      <Navbar activeTab="Work" />

      <main className="pt-20">
        {/* Hero Section */}
        <section className="section-padding">
          <div className="container mx-auto px-4">
            <motion.div
              className="text-center max-w-4xl mx-auto"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-5xl lg:text-7xl font-bold mb-6 text-gradient">
                Work Experience
              </h1>
              <p className="text-xl text-gray-300 mb-8">
                My professional journey in software development and engineering
              </p>
            </motion.div>
          </div>
        </section>

        {/* Timeline Section */}
        <section className="section-padding bg-black/20">
          <div className="container mx-auto px-4">
            <motion.div
              ref={ref}
              variants={timelineVariants}
              initial="hidden"
              animate={inView ? "visible" : "hidden"}
              className="relative"
            >
              {/* Timeline Line */}
              <div className="absolute left-8 lg:left-1/2 lg:transform lg:-translate-x-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-blue-500 to-purple-500" />

              {workExperience.map((work, index) => (
                <motion.div
                  key={work.company}
                  variants={itemVariants}
                  className={`relative flex items-center mb-16 ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'
                    }`}
                >
                  {/* Timeline Dot */}
                  <div className="absolute left-6 lg:left-1/2 lg:transform lg:-translate-x-1/2 w-4 h-4 bg-blue-500 rounded-full border-4 border-slate-900 z-10" />

                  {/* Content Card */}
                  <div className={`ml-16 lg:ml-0 lg:w-5/12 ${index % 2 === 0 ? 'lg:mr-auto lg:pr-8' : 'lg:ml-auto lg:pl-8'}`}>
                    <div className="card group hover:scale-105 transition-transform duration-300">
                      <div className="flex items-start gap-4">
                        <div className="relative w-16 h-16 rounded-lg overflow-hidden flex-shrink-0 bg-white/5 flex items-center justify-center p-2">
                          <Image
                            src={work.logo}
                            alt={work.company}
                            fill
                            className="object-contain"
                          />
                        </div>
                        <div className="flex-1">
                          <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-blue-400 transition-colors duration-300">
                            {work.company}
                          </h3>
                          <h4 className="text-lg font-semibold text-blue-400 mb-1">
                            {work.position}
                          </h4>
                          <div className="flex items-center gap-4 text-sm text-gray-400 mb-3">
                            <span>{work.duration}</span>
                            <span>•</span>
                            <span>{work.location}</span>
                          </div>
                          <p className="text-gray-300 mb-4 leading-relaxed">
                            {work.description}
                          </p>
                          <div className="flex flex-wrap gap-2">
                            {work.technologies.map((tech) => (
                              <span
                                key={tech}
                                className="px-3 py-1 bg-white/10 rounded-full text-xs text-white/80 border border-white/20"
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
        <section className="section-padding">
          <div className="container mx-auto px-4">
            <motion.div
              className="text-center mb-16"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl lg:text-6xl font-bold mb-6 text-gradient">
                Key Skills
              </h2>
              <p className="text-xl text-gray-300">
                Technologies and tools I&apos;ve worked with throughout my career
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
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
                  className="card"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <h3 className="text-xl font-bold text-white mb-4">{category.title}</h3>
                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill) => (
                      <span
                        key={skill}
                        className="px-3 py-1 bg-blue-500/20 text-blue-300 rounded-full text-sm border border-blue-500/30"
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
