import { Suspense } from 'react'
import ContactsPage from '@/components/pages/ContactsPage'
import Loading from '@/components/ui/Loading'

export const metadata = {
  title: 'Contact Me',
  description: 'Get in touch with me for collaborations, opportunities, or just to say hello.',
}

export default function Contacts() {
  return (
    <Suspense fallback={<Loading />}>
      <ContactsPage />
    </Suspense>
  )
}
