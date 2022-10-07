import Container from '@/components/layouts/container/Container'
import Profile from '@/features/profile/components/Profile'

const ProfilePage = () => {
  return (
    <Container>
      <Profile
        title="Welcome to Profile Page"
        subtitle="Feel free to read short description about me."
      />
    </Container>
  )
}

export default ProfilePage
