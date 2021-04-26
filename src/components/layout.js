import * as React from "react"
import Header from "./Header"
import { GlobalStlye } from "./styles/GlobalStyles"


const Layout = ({ children }) => {

  return (
    <>
      <GlobalStlye />
      <Header/>
        <main>{children}</main>
    </>
  )
}

export default Layout
