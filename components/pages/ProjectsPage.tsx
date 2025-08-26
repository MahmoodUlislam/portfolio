'use client'

import { useState } from 'react'
import Image from 'next/image'
import { ExternalLink, Github, Eye } from 'lucide-react'
import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'

const projects = [
  {
    id: 1,
    title: 'LifeLine - Virtual Mental Health Platform',
    description: 'AI-powered virtual mental health treatment platform with video conferencing, AI chatbot, and real-time session analysis. Features ambient listening, risk analytics, and comprehensive patient management.',
    image: '/LifeLineAPPicon-NoBackground.png',
    technologies: ['React.js', 'Vue.js', 'Next.js', 'Node.js', 'AWS Bedrock', 'Chime SDK', 'PostgreSQL', 'SASS'],
    category: 'Healthcare',
    liveUrl: 'https://lifelineapp.ca',
    featured: true
  },
  {
    id: 2,
    title: 'SkinScan - AI Dermatology Platform',
    description: 'End-to-end dermatology imaging platform with computer vision pipeline. Features AR-guided photo capture, AI-powered skin analysis, and clinician portal.',
    image: '/SkinScanLogo.png',
    technologies: ['Swift (iOS)', 'Next.js', 'Node.js', 'AWS SageMaker', 'Rekognition', 'S3', 'PostgreSQL'],
    category: 'Healthcare',
    liveUrl: 'https://skinscanapp.ca',
    featured: true
  },
  {
    id: 3,
    title: 'esiKidz - Childcare Management Software',
    description: 'Enterprise-level childcare management software with web and mobile applications. Features client management, scheduling, and comprehensive reporting.',
    image: '/esiKidzLogo.png',
    technologies: ['React.js', 'React Native', 'Node.js', 'MySQL', 'AWS Lambda', 'S3', 'SASS'],
    category: 'SaaS',
    liveUrl: 'https://esikidz.com',
    featured: true
  },
  {
    id: 4,
    title: 'Sunrise-club - Event Booking Platform',
    description: 'Event booking site for Telco (Sunrise) users of Switzerland. Features high security with web firewall, OAuth 2 + OIDC authentication, Adobe Analytics, and complete language translation system.',
    image: '/SunriseLogo.svg',
    technologies: ['React.js', 'Next.js', 'TypeScript', 'MongoDB', 'Storyblok CMS', 'Material UI', 'Ant Design', 'SASS'],
    category: 'E-commerce',
    liveUrl: 'https://www.sunrise.ch/en/moments',
    featured: true
  }
]

const categories = ['All', 'Healthcare', 'SaaS', 'E-commerce']

export default function ProjectsPage() {
  const [selectedCategory, setSelectedCategory] = useState('All')

  const filteredProjects = selectedCategory === 'All'
    ? projects
    : projects.filter(project => project.category === selectedCategory)

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white">
      <Navbar activeTab="Projects" />

      <main className="pt-20">
        {/* Hero Section */}
        <section className="section-padding">
          <div className="container mx-auto px-4">
            <div className="text-center max-w-4xl mx-auto">
              <h1 className="text-5xl lg:text-7xl font-bold mb-6 text-gradient">
                My Projects
              </h1>
              <p className="text-xl text-gray-300 mb-8">
                Here you can find out more about the projects I have been part of,
                and experiences I have achieved while working with those projects...
              </p>
            </div>
          </div>
        </section>

        {/* Filter Section */}
        <section className="section-padding bg-black/20">
          <div className="container mx-auto px-4">
            <div className="flex flex-wrap justify-center gap-4 mb-12">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${selectedCategory === category
                    ? 'bg-blue-600 text-white shadow-lg'
                    : 'bg-white/10 text-gray-300 hover:bg-white/20 hover:text-white'
                    }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* Projects Grid */}
        <section className="section-padding">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredProjects.map((project) => (
                <div
                  key={project.id}
                  className="bg-white/5 backdrop-blur-sm rounded-xl border border-white/10 p-6 hover:bg-white/10 transition-all duration-300 group"
                >
                  {/* Project Image */}
                  <div className="relative h-48 overflow-hidden rounded-lg mb-6 bg-white/5 flex items-center justify-center p-4">
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      className="object-contain transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                    {/* Action Buttons */}
                    <div className="absolute inset-0 flex items-center justify-center gap-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      {project.liveUrl && project.liveUrl !== '#' && (
                        <a
                          href={project.liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="p-3 bg-blue-600 hover:bg-blue-700 text-white rounded-full transition-colors duration-300"
                        >
                          <Eye className="w-5 h-5" />
                        </a>
                      )}
                    </div>
                  </div>

                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-blue-400 transition-colors duration-300">
                    {project.title}
                  </h3>

                  <p className="text-gray-300 text-sm leading-relaxed mb-4">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 bg-blue-600/20 text-blue-300 text-xs rounded-full border border-blue-600/30"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="section-padding bg-black/20">
          <div className="container mx-auto px-4">
            <div className="text-center max-w-4xl mx-auto">
              <h2 className="text-4xl lg:text-6xl font-bold mb-6 text-gradient">
                Let&apos;s Work Together
              </h2>
              <p className="text-xl text-gray-300 mb-8">
                Interested in collaborating on a project? Let&apos;s discuss how we can bring your ideas to life.
              </p>
              <a
                href="/contacts"
                className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-full font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105"
              >
                Get In Touch
                <ExternalLink className="w-5 h-5" />
              </a>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
