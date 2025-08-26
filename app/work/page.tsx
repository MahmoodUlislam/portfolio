import { Suspense } from 'react'
import WorkPage from '@/components/pages/WorkPage'
import Loading from '@/components/ui/Loading'

export const metadata = {
  title: 'Work Experience',
  description: 'Explore my professional work experience and career journey.',
}

export default function Work() {
  return (
    <Suspense fallback={<Loading />}>
      <WorkPage />
    </Suspense>
  )
}
