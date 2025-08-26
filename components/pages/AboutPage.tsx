'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import Image from 'next/image'
import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'

export default function AboutPage() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  })

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white">
      <Navbar activeTab="About" />

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
                About Me
              </h1>
              <p className="text-xl text-gray-300 mb-8">
                Lead Software Engineer & Cloud & AI Architect
              </p>
            </motion.div>
          </div>
        </section>

        {/* About Content */}
        <section className="section-padding">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
              >
                <div className="relative">
                  <Image
                    src="/pro-pic1.jpg"
                    alt="Mahmood ul Islam"
                    width={500}
                    height={600}
                    className="rounded-2xl shadow-2xl"
                  />
                  <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full opacity-20 animate-pulse" />
                </div>
              </motion.div>

              <motion.div
                ref={ref}
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="space-y-6"
              >
                <h2 className="text-3xl lg:text-4xl font-bold text-white">
                  Hi, I&apos;m Mahmood ul Islam
                </h2>

                <p className="text-gray-300 leading-relaxed">
                  I&apos;m a passionate Senior Software Developer and Cloud & AI Specialist with over 5 years of experience
                  in building AI-powered healthcare applications and cloud-native solutions. Currently working at Virtual Health Hub in Canada,
                  I specialize in modern web technologies, AWS cloud infrastructure, and AI/ML integration.
                </p>

                <p className="text-gray-300 leading-relaxed">
                  My expertise spans across full-stack development, cloud architecture, AI/ML, and healthcare technology.
                  I love solving complex problems and creating innovative solutions that make a real impact in healthcare.
                </p>

                <div className="grid grid-cols-2 gap-4 pt-6">
                  <div className="text-center p-4 bg-white/5 rounded-lg">
                    <div className="text-2xl font-bold text-blue-400">5+</div>
                    <div className="text-sm text-gray-400">Years Experience</div>
                  </div>
                  <div className="text-center p-4 bg-white/5 rounded-lg">
                    <div className="text-2xl font-bold text-blue-400">10+</div>
                    <div className="text-sm text-gray-400">Projects Completed</div>
                  </div>
                  <div className="text-center p-4 bg-white/5 rounded-lg">
                    <div className="text-2xl font-bold text-blue-400">25+</div>
                    <div className="text-sm text-gray-400">Technologies</div>
                  </div>
                  <div className="text-center p-4 bg-white/5 rounded-lg">
                    <div className="text-2xl font-bold text-blue-400">100%</div>
                    <div className="text-sm text-gray-400">Client Satisfaction</div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Skills Section */}
        <section className="section-padding bg-black/20">
          <div className="container mx-auto px-4">
            <motion.div
              className="text-center mb-16"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl lg:text-6xl font-bold mb-6 text-gradient">
                My Expertise
              </h2>
              <p className="text-xl text-gray-300">
                Areas where I excel and technologies I master
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
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
                  className="card"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <h3 className="text-xl font-bold text-white mb-3">{category.title}</h3>
                  <p className="text-gray-300 text-sm mb-4">{category.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill) => (
                      <span
                        key={skill}
                        className="px-3 py-1 bg-blue-500/20 text-blue-300 rounded-full text-xs border border-blue-500/30"
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
