import React, { useEffect, useState } from "react";
import { GlobalStyles } from "./styles";
import { Navbar, Preloader } from "./components";
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
          <div className="App">
            <h3>Todo</h3>
            <ul>
              <li>Splash Screen with Animations</li>
              <li>Socials in left side (Britanny Style)</li>
              <li>Contact email in right side</li>
              <p>Goal ends here today</p>
              <li>Hero Section</li>
              <li>Footer</li>
              <li>Scrollbar Minimalist</li>
            </ul>
          </div>
        </React.Fragment>
      )}
    </ThemeModeProvider>
  );
}

export default App;
