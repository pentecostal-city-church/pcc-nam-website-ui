import * as React from "react"
import NavModule from "./NavModule/NavModule"
import AnimMain from "./AnimMain/AnimMain"
import Footer from "./Footer/Footer"
import { motion } from "framer-motion"
import { GlobalStyle } from "../styles/GlobalStyles"
import { withPrefix } from "gatsby";
import window from 'global';

const Layout = ({ children }) => {
  const [resetState, setResetState] = React.useState(false);
  const intervalRef = React.useRef(null);

  React.useEffect(() => {
    intervalRef.current = setInterval(() => {
      setResetState(!resetState);
    }, 1000);

    return () => {
      clearInterval(intervalRef.current);
      intervalRef.current = null;
    }
  }, []);

  return (
    <>
      <GlobalStyle />
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.75 }}
      >

            <div>
              <AnimMain>
                {children}
                <Footer />
              </AnimMain>
            </div>
          
      </motion.div>
    </>
  )
}

export default Layout