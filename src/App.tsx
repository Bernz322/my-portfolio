import React, { useEffect, useState } from "react";
import { GlobalStyles, StyledMain } from "./styles";
import {
  About,
  Contact,
  Cursor,
  Footer,
  Hero,
  JBShort,
  Navbar,
  Preloader,
  Project,
  SideElement,
  Spotify,
  Thesis,
  Tsismis,
  Vacay,
} from "./components";
import { ThemeModeProvider } from "./context/ThemeContext";
// import "./styles/fonts.css";
import { AnimatePresence, motion } from "framer-motion";
import { Route, Routes, useLocation } from "react-router-dom";

const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

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
        <AnimatePresence exitBeforeEnter>
          <Navbar />
          <SideElement />
          <ScrollToTop />
          <Routes>
            <Route
              path="/"
              element={
                <StyledMain>
                  <Hero />
                  <About />
                  <Project />
                  <Contact />
                </StyledMain>
              }
            />
            <Route path="/vacay" element={<Vacay />} />
            <Route path="/jbshort" element={<JBShort />} />
            <Route path="/spotify" element={<Spotify />} />
            <Route path="/tsismis" element={<Tsismis />} />
            <Route path="/thesis" element={<Thesis />} />
          </Routes>

          <Footer />
        </AnimatePresence>
      )}
    </ThemeModeProvider>
  );
}

export default App;
