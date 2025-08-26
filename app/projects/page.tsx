import { Suspense } from 'react'
import ProjectsPage from '@/components/pages/ProjectsPage'
import Loading from '@/components/ui/Loading'

export const metadata = {
  title: 'Projects',
  description: 'Explore my portfolio of projects and applications.',
}

export default function Projects() {
  return (
    <Suspense fallback={<Loading />}>
      <ProjectsPage />
    </Suspense>
  )
}
