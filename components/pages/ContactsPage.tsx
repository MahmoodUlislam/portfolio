'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Mail, Phone, MapPin, Send, Github, Linkedin } from 'lucide-react'
import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'
import styles from './ContactsPage.module.css'

const contactInfo = [
  {
    icon: Mail,
    title: 'Email',
    value: 'mahmood.islam@gmail.com',
    href: 'mailto:mahmood.islam@gmail.com'
  },
  {
    icon: Phone,
    title: 'Phone',
    value: '+1 (306) 261-8482',
    href: 'tel:+13062618482'
  },
  {
    icon: MapPin,
    title: 'Location',
    value: 'Canada',
    href: '#'
  }
]

const socialLinks = [
  {
    name: 'LinkedIn',
    href: 'https://www.linkedin.com/in/mahmoodislam/',
    icon: Linkedin,
    color: 'hover:text-blue-400'
  },
  {
    name: 'GitHub',
    href: 'https://github.com/MahmoodUlislam',
    icon: Github,
    color: 'hover:text-gray-400'
  }
]

export default function ContactsPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle')
  const [statusMessage, setStatusMessage] = useState('')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus('idle')
    setStatusMessage('')

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      })

      const result = await response.json()

      if (result.success) {
        setSubmitStatus('success')
        setStatusMessage(result.message)
        setFormData({ name: '', email: '', subject: '', message: '' })
      } else {
        setSubmitStatus('error')
        setStatusMessage(result.message)
      }
    } catch (error) {
      console.error('Contact Error:', error)
      setSubmitStatus('error')
      setStatusMessage('Failed to send message. Please try again or contact me directly at mahmood.islam@gmail.com')
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  return (
    <div className={styles.contactsContainer}>
      <Navbar activeTab="Contacts" />

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
                Get In Touch
              </h1>
              <p className={styles.heroSubtitle}>
                Let&apos;s discuss your next project or just say hello
              </p>
            </motion.div>
          </div>
        </section>

        {/* Contact Content */}
        <section className={styles.contactSection}>
          <div className={styles.contactContainer}>
            <div className={styles.contactGrid}>
              {/* Contact Form */}
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
              >
                <h2 className={styles.formTitle}>Send a Message</h2>
                <form onSubmit={handleSubmit} className={styles.contactForm}>
                  <div className={styles.formRow}>
                    <div className={styles.formGroup}>
                      <label htmlFor="name" className={styles.formLabel}>
                        Name
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        className={styles.formInput}
                        placeholder="Your name"
                        required
                      />
                    </div>
                    <div className={styles.formGroup}>
                      <label htmlFor="email" className={styles.formLabel}>
                        Email
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        className={styles.formInput}
                        placeholder="your.email@example.com"
                        required
                      />
                    </div>
                  </div>
                  <div className={styles.formGroup}>
                    <label htmlFor="subject" className={styles.formLabel}>
                      Subject
                    </label>
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      className={styles.formInput}
                      placeholder="What's this about?"
                      required
                    />
                  </div>
                  <div className={styles.formGroup}>
                    <label htmlFor="message" className={styles.formLabel}>
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      rows={6}
                      className={styles.formTextarea}
                      placeholder="Tell me about your project..."
                      required
                    />
                  </div>
                  <button
                    type="submit"
                    className={styles.formButton}
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? (
                      <>
                        <div className={styles.spinner} />
                        Sending...
                      </>
                    ) : (
                      <>
                        <Send className={styles.sendIcon} />
                        Send Message
                      </>
                    )}
                  </button>

                  {submitStatus !== 'idle' && (
                    <div className={`${styles.statusMessage} ${styles[submitStatus]}`}>
                      {statusMessage}
                    </div>
                  )}
                </form>
              </motion.div>

              {/* Contact Info */}
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className={styles.contactInfo}
              >
                <div>
                  <h2 className={styles.contactInfoTitle}>Contact Information</h2>
                  <div className={styles.contactInfoList}>
                    {contactInfo.map((info, index) => (
                      <motion.a
                        key={info.title}
                        href={info.href}
                        className={styles.contactInfoItem}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: index * 0.1 }}
                        viewport={{ once: true }}
                      >
                        <div className={styles.contactInfoIcon}>
                          <info.icon className={styles.contactInfoIconSvg} />
                        </div>
                        <div>
                          <h3 className={styles.contactInfoItemTitle}>{info.title}</h3>
                          <p className={styles.contactInfoItemValue}>{info.value}</p>
                        </div>
                      </motion.a>
                    ))}
                  </div>
                </div>


                <div className={styles.workTogetherCard}>
                  <h3 className={styles.workTogetherTitle}>Let&apos;s Work Together</h3>
                  <p className={styles.workTogetherDescription}>
                    I&apos;m always open to discussing new opportunities, interesting projects,
                    or just having a chat about technology and development.
                  </p>
                </div>
              </motion.div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
