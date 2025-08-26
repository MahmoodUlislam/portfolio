import { Suspense } from 'react'
import HomePage from '@/components/pages/HomePage'
import Loading from '@/components/ui/Loading'

export default function Home() {
  return (
    <Suspense fallback={<Loading />}>
      <HomePage />
    </Suspense>
  )
}
