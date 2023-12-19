import "../../App.css";
import "./about.css";

const About = () => {
  return (
    <div id='about' className='about section'>
      <div className='rectangle'>
        <div className='text-container'>
          <h1>About Us</h1>
          <p>
            Welcome to our world of web development, where a dedicated team of
            innovative developers enhances their skills by creating versatile
            boilerplate websites. This particular site, crafted with a focus on
            coffee, exemplifies our commitment to functional elegance and
            contemporary design. Our mission is to provide clients with robust,
            user-friendly starting points for their online presence, catering to
            businesses ranging from local coffee shops to large coffee brands.
            With each project, we strive to blend engaging design with seamless
            functionality, turning your digital vision into reality.
          </p>
        </div>
      </div>
      <div className='squares'>
        <div className='square the-story'>
          <div className='text-container'>
            <h1>The Story.</h1>
          </div>
        </div>
        <div className='square facts'>
          
        </div>
      </div>
    </div>
  );
};

export default About;
