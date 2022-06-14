import { GlobalStyles } from "./styles";
import { Navbar } from "./components";
import { ThemeModeProvider } from "./context/ThemeContext";
function App() {
  return (
    <ThemeModeProvider>
      <GlobalStyles />
      <Navbar />
      <div className="App">
        <h3>Todo</h3>
        <ul>
          <li>Fonts</li>
          <li>Colors</li>
          <li>Style Varables</li>
          <li>Navbar</li>
          <li>Hamburger Menu</li>
          <li>Navbar Mobile Responsive</li>
          <p>Goal Today ends here</p>
          <li>Dark Mode</li>
          <li>Socials in left side (Britanny Style)</li>
          <li>Contact email in right side</li>
          <li>Splash Screen with Animations</li>
        </ul>
      </div>
    </ThemeModeProvider>
  );
}

export default App;
