import { ReactNode } from 'react'

import Divider from '@/components/layouts/divider/Divider'
import Footer from '@/components/layouts/footer/Footer'
import Header from '@/components/layouts/header/Header'

type Props = {
  children: ReactNode
}

const Layout = ({ children }: Props) => {
  return (
    <>
      <Header />
      <main>{children}</main>
      <Divider />
      <Footer />
    </>
  )
}

export default Layout
