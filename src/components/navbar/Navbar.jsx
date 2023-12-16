import "./navbar.css";

const Navbar = () => {
  const scrollToElement = (el) => {
    const element = document.getElementById(el);
    if (element) element.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className='navbar'>
      <a href='#home' onClick={() => scrollToElement("home")}>
        Home
      </a>
      <a href='#brewers' onClick={() => scrollToElement("brewers")}>
        Brewers
      </a>
      <a href='#about' onClick={() => scrollToElement("about")}>
        About Us
      </a>
      <a href='#contact' onClick={() => scrollToElement("contact")}>
        Contact Us
      </a>
    </div>
  );
};

export default Navbar;
