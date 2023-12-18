import "../../App.css";
import "./home.css";

const Home = () => {
  const p1 = `Dare to venture into "The Coffee Black Hole," a captivating destination for those who crave the profound depths of premium coffee. It's an invitation to traverse the aromatic cosmos of coffee's richest essences, where the pull of flavor is irresistible.`;
  const p2 = `Within this celestial phenomenon, the blur of the outer world gives way to the clarity of absolute indulgence. Each approach towards the core is a promise of a deeper taste, a journey through the roasted heart of coffee lore.`;
  const p3 = `Succumb to the allure of this sensory singularity, where every sip is an encounter with the sublime. "The Coffee Black Hole" is not just a sip, but an immersion into the very spirit of coffee — brief, yet endlessly enchanting.`;

  return (
    <>
      <div id='home' className='home section'>
        <div className='wrapper'>
          <div className='scroll-text'>
            <h1>COFFEE SHOP</h1>
            <h2>The Black Hole</h2>
            <p>{p1}</p>
            <p>{p2}</p>
            <p>{p3}</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
