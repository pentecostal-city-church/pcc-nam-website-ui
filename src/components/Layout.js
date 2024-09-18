import * as React from "react"
import NavModule from "./NavModule/NavModule"
import AnimMain from "./AnimMain/AnimMain"
import Footer from "./Footer/Footer"
import { motion } from "framer-motion"
import { GlobalStyle } from "../styles/GlobalStyles"
import { withPrefix } from "gatsby";
import window from 'global';

const Layout = ({ children }) => {
  return (
    <>
      <GlobalStyle />
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.75 }}
      >
          {window?.location?.pathname === '/' ? (<div style={{ width: '100vw', height: '100vh', backgroundPositionX: '50%', backgroundPositionY: '50%', backgroundRepeat: 'no-repeat', backgroundAttachment: 'fixed', backgroundPosition: 'center', backgroundSize: 'cover', backgroundImage: `url("${withPrefix('/img/welcome.jpeg')}")` }}>
            <NavModule />
            <AnimMain>
              {children}
              <Footer />
            </AnimMain>
          </div>) : (
            <div>
              <NavModule />
              <AnimMain>
                {children}
                <Footer />
              </AnimMain>
            </div>
          )}
      </motion.div>
    </>
  )
}

export default Layout