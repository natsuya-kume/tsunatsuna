import SelfIntroduction from '@/features/profile/components/SelfIntroduction'
import Skills from '@/features/profile/components/Skills'

type Props = {
  title: string
  subtitle: string
}

const Profile: React.FC<Props> = ({ title, subtitle }) => {
  return (
    <>
      <SelfIntroduction title={title} subtitle={subtitle} />
      <Skills />
    </>
  )
}

export default Profile
