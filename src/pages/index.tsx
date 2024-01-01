import type { NextPage } from 'next'
import { useEffect } from 'react'

import Container from '@/components/layouts/container/Container'
import Meta from '@/components/layouts/meta/Meta'
import Home from '@/features/home/Home'

const HomePage: NextPage = () => {
  useEffect(() => {
    if ('ReactNativeWebView' in window) {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      ;(window.ReactNativeWebView as any).postMessage(
        JSON.stringify({ type: 'xAuthSuccess', hoge: document.location })
      )
    }
  }, [])
  return (
    <Container>
      <Meta />
      <Home
        title="I KEEP GROWING!!"
        subtitle="Let's take a look on my work."
        imageOn
      />
    </Container>
  )
}
export default HomePage
