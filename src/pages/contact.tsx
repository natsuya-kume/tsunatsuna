import Container from '@/components/layouts/container/Container'
import Meta from '@/components/layouts/meta/Meta'
import { Contact } from '@/features/contact/components/Contact'

const ContactPage = () => {
  return (
    <Container>
      <Meta pageTitle="Contact" pageDesc="This is contact page" />
      <Contact />
    </Container>
  )
}

export default ContactPage
