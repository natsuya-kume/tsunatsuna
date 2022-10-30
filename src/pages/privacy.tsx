import Container from '@/components/layouts/container/Container'
import Meta from '@/components/layouts/meta/Meta'
import Privacy from '@/features/privacy/components/Privacy'

const PrivacyPage = () => {
  return (
    <Container>
      <Meta pageTitle="Privacy" pageDesc="This is privacy page" />
      <Privacy />
    </Container>
  )
}

export default PrivacyPage
