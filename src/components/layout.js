import React, { useState } from "react"
import Dropdown from "./Dropdown"
import Footer from "./Footer"
import Header from "./header"
import { GlobalStlye } from "./styles/GlobalStyles"

const Layout = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false)

  const toggle = () => {
    setIsOpen(!isOpen)
  }
  return (
    <>
      <GlobalStlye />
      <Dropdown isOpen={isOpen} toggle={toggle} />
      <Header toggle={toggle} />
      <main>{children}</main>
      <Footer />
    </>
  )
}

export default Layout
