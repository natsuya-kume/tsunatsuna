import Container from '@/components/layouts/container/Container'
import Profile from '@/features/profile/components/Profile'

const ProfilePage = () => {
  console.log('')
  return (
    <Container>
      <Profile
        title="Profile Page"
        subtitle="Feel free to read short description about me."
      />
    </Container>
  )
}

export default ProfilePage
