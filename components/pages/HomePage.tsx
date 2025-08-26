'use client'

import { motion, useScroll, useTransform } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import { ChevronDown, ArrowRight } from 'lucide-react'
import { useInView } from 'react-intersection-observer'
import Navbar from '@/components/layout/Navbar'
import MainHeader from '@/components/sections/MainHeader'
import ToolsTech from '@/components/sections/ToolsTech'
import Footer from '@/components/layout/Footer'

const fadeInUp = {
  initial: { opacity: 0, y: 60 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 }
}

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.1
    }
  }
}

export default function HomePage() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  })

  const { scrollYProgress } = useScroll()
  const imageOpacity = useTransform(scrollYProgress, [0, 0.3], [1, 0])
  const secondImageOpacity = useTransform(scrollYProgress, [0.1, 0.4], [0, 1])

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white">
      <Navbar activeTab="Home" />

      <main className="relative">
        {/* Hero Section */}
        <section className="min-h-screen flex flex-col justify-center items-center relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-blue-600/20 via-purple-600/20 to-pink-600/20" />

          <motion.div
            className="container mx-auto px-4 z-10"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
          >
            <div className="flex flex-col lg:flex-row items-center justify-center gap-12 lg:gap-20">
              <motion.div
                className="flex-1 text-center lg:text-left"
                variants={fadeInUp}
                initial="initial"
                animate="animate"
              >
                <MainHeader />
              </motion.div>

              <motion.div
                className="relative"
                variants={fadeInUp}
                initial="initial"
                animate="animate"
                transition={{ delay: 0.2 }}
              >
                <div className="relative w-80 h-96 lg:w-96 lg:h-[500px] rounded-3xl overflow-hidden">
                  {/* First Image (Closed Laptop) */}
                  <motion.div
                    className="absolute inset-0"
                    style={{ opacity: imageOpacity }}
                  >
                    <Image
                      src="/pro-pic1.jpg"
                      alt="Mahmood ul Islam - Laptop Closed"
                      fill
                      className="object-cover transition-all duration-1000"
                      priority
                    />
                  </motion.div>

                  {/* Second Image (Open Laptop) */}
                  <motion.div
                    className="absolute inset-0"
                    style={{ opacity: secondImageOpacity }}
                  >
                    <Image
                      src="/pro-pic2.jpg"
                      alt="Mahmood ul Islam - Laptop Open"
                      fill
                      className="object-cover transition-all duration-1000"
                      priority
                    />
                  </motion.div>

                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
                </div>
                <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full opacity-20 animate-pulse" />
              </motion.div>
            </div>
          </motion.div>

          <motion.div
            className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            <ChevronDown className="w-8 h-8 text-white/60" />
          </motion.div>
        </section>

        {/* Work History Section */}
        <section className="relative py-20 bg-black">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-900/20 to-purple-900/20" />
          <motion.div
            ref={ref}
            className="container mx-auto px-4 relative z-10"
            variants={staggerContainer}
            initial="initial"
            animate={inView ? "animate" : "initial"}
          >
            <motion.div
              className="text-center max-w-4xl mx-auto"
              variants={fadeInUp}
            >
              <h2 className="text-5xl lg:text-7xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                Work<br />History
              </h2>
              <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
                Here you can find out more about the companies I have collaborated with,
                and the experiences I have gained while working there...
              </p>
              <Link
                href="/work"
                className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-full font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105"
              >
                Check out my work history
                <ArrowRight className="w-5 h-5" />
              </Link>
            </motion.div>
          </motion.div>
        </section>

        {/* Technologies Section */}
        <section className="py-20 bg-slate-900">
          <motion.div
            className="container mx-auto px-4"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="text-center mb-16">
              <h2 className="text-4xl lg:text-6xl font-bold mb-6">
                Technologies and Tools I work with
              </h2>
            </div>
            <ToolsTech />
          </motion.div>
        </section>

        {/* About Section */}
        <section className="relative py-20 bg-slate-800">
          <div className="absolute inset-0 bg-gradient-to-l from-green-900/20 to-blue-900/20" />
          <motion.div
            className="container mx-auto px-4 relative z-10"
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="text-center max-w-4xl mx-auto">
              <h2 className="text-5xl lg:text-7xl font-bold mb-6 bg-gradient-to-r from-green-400 to-blue-400 bg-clip-text text-transparent">
                About me
              </h2>
              <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
                Here you can find out more about my professional life and career...
              </p>
              <Link
                href="/about"
                className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-green-600 to-blue-600 text-white rounded-full font-semibold hover:from-green-700 hover:to-blue-700 transition-all duration-300 transform hover:scale-105"
              >
                Get to know more about me
                <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
          </motion.div>
        </section>

        {/* Projects Section */}
        <section className="relative py-20 bg-black">
          <div className="absolute inset-0 bg-gradient-to-r from-orange-900/20 to-red-900/20" />
          <motion.div
            className="container mx-auto px-4 relative z-10"
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="text-center max-w-4xl mx-auto">
              <h2 className="text-5xl lg:text-7xl font-bold mb-6 bg-gradient-to-r from-orange-400 to-red-400 bg-clip-text text-transparent">
                My<br />Projects
              </h2>
              <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
                Here you can find out more about the projects I have been part of,
                and experiences I have achieved while working with those projects...
              </p>
              <Link
                href="/projects"
                className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-orange-600 to-red-600 text-white rounded-full font-semibold hover:from-orange-700 hover:to-red-700 transition-all duration-300 transform hover:scale-105"
              >
                Check out some of my projects
                <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
          </motion.div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
