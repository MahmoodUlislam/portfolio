import { Suspense } from 'react'
import AboutPage from '@/components/pages/AboutPage'
import Loading from '@/components/ui/Loading'

export const metadata = {
  title: 'About Me',
  description: 'Learn more about my background, skills, and professional journey.',
}

export default function About() {
  return (
    <Suspense fallback={<Loading />}>
      <AboutPage />
    </Suspense>
  )
}
