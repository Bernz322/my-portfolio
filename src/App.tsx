import React, { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Route, Routes, useLocation } from "react-router-dom";
import { GlobalStyles, StyledMain } from "./styles";
import {
  About,
  Contact,
  Cursor,
  Footer,
  Hero,
  Navbar,
  Page404,
  Preloader,
  Project,
  SideElement,
} from "./components";
import { ThemeModeProvider } from "./context/ThemeContext";
import Vacay from "./components/pages/Vacay";
import JBShort from "./components/pages/JBShort";
import Spotify from "./components/pages/Spotify";
import Tsismis from "./components/pages/Tsismis";
// import Thesis from "./components/pages/Thesis";
import Others from "./components/pages/Others";

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

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
      <Cursor />
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
            <Route path="/others" element={<Others />} />
            {/* <Route path="/thesis" element={<Thesis />} /> */}
            <Route path="*" element={<Page404 />} />
          </Routes>

          <Footer />
        </AnimatePresence>
      )}
    </ThemeModeProvider>
  );
}

export default App;
