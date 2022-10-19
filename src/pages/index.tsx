import type { NextPage } from 'next'

import Container from '@/components/layouts/container/Container'
import Home from '@/features/home/components/Home'

const HomePage: NextPage = () => {
  return (
    <Container>
      <Home
        title="TSUNA TSUNA PORTFOLIO"
        subtitle="Let's take a look on my work."
        imageOn
      />
    </Container>
  )
}
export default HomePage
