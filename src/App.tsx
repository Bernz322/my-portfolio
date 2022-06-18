import React, { useEffect, useState } from "react";
import { GlobalStyles, StyledMain } from "./styles";
import {
  About,
  Contact,
  Cursor,
  Footer,
  Hero,
  Navbar,
  Preloader,
  Project,
  SideElement,
} from "./components";
import { ThemeModeProvider } from "./context/ThemeContext";
import "./styles/fonts.css";
import { AnimatePresence, motion } from "framer-motion";
import { Route, Routes } from "react-router-dom";
function App() {
  const [isLoaded, setIsLoaded] = useState<boolean>(false);

  useEffect(() => {
    setTimeout(() => {
      setIsLoaded(true);
    }, 2500);
  }, [isLoaded]);

  return (
    <ThemeModeProvider>
      <GlobalStyles />
      {/* <Cursor /> */}
      <AnimatePresence>
        {!isLoaded && (
          <motion.div
            exit={{
              opacity: 0,
              transition: {
                ease: "easeInOut",
                duration: 0.5,
              },
            }}
          >
            <Preloader />
          </motion.div>
        )}
      </AnimatePresence>

      {isLoaded && (
        <React.Fragment>
          <Navbar />
          <Routes>
            <Route
              path="/"
              element={
                <StyledMain>
                  <SideElement />
                  <Hero />
                  <About />
                  <Project />
                  <Contact />
                </StyledMain>
              }
            />
          </Routes>

          <Footer />
        </React.Fragment>
      )}
    </ThemeModeProvider>
  );
}

export default App;
