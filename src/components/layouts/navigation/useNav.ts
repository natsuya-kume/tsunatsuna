import { useState } from 'react'

export const useNav = () => {
  const [navIsOpen, setNavIsOpen] = useState(false)
  const toggleNav = () => {
    setNavIsOpen((prev) => !prev)
  }
  const closeNav = () => {
    setNavIsOpen(false)
  }

  return { toggleNav, closeNav, navIsOpen }
}
