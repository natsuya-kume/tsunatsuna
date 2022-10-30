import Container from '@/components/layouts/container/Container'
import Meta from '@/components/layouts/meta/Meta'
import Profile from '@/features/profile/components/Profile'

const ProfilePage = () => {
  return (
    <Container>
      <Meta pageTitle="Profile" pageDesc="This is profile page" />
      <Profile
        title="Profile Page"
        subtitle="Feel free to read short description about me."
      />
    </Container>
  )
}

export default ProfilePage
