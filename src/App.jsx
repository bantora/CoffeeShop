import "./App.css";
import { Navbar, Home, About, Brewers, Contact } from "./components";

const App = () => {
  return (
    <>
      <Navbar />
      <Home />
      <Brewers />
      <About />
      <Contact />
    </>
  );
};

export default App;
