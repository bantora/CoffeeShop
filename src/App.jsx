import "./App.css";
import { Navbar, Home, About, Brewers, Contact } from "./components";

const App = () => {
  return (
    <>
      <div className='scroll-container'>
        test deployment
        <Navbar />
        <Home />
        <Brewers />
        <About />
        <Contact />
      </div>
    </>
  );
};

export default App;
