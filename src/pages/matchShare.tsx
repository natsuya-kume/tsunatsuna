import Container from '@/components/layouts/container/Container'
import Meta from '@/components/layouts/meta/Meta'
import MatchShare from '@/features/matchShare/MatchShare'

const PrivacyPage = () => {
  return (
    <Container>
      <Meta pageTitle="MatchShare" pageDesc="This is matchShare page" />
      <MatchShare />
    </Container>
  )
}

export default PrivacyPage
