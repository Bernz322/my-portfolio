import React, { useEffect, useState } from "react";
import { GlobalStyles, StyledMain } from "./styles";
import { Hero, Navbar, Preloader, SideElement } from "./components";
import { ThemeModeProvider } from "./context/ThemeContext";
import "./styles/fonts.css";
import { AnimatePresence, motion } from "framer-motion";
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
          <StyledMain>
            <SideElement />
            <Hero />
          </StyledMain>
        </React.Fragment>
      )}
    </ThemeModeProvider>
  );
}

export default App;
