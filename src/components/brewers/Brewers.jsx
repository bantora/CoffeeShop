import "./brewers.css";
import "../../App.css";
import "react-image-gallery/styles/css/image-gallery.css";

import mokapot from "../../assets/mokapot.png";
import frenchpress from "../../assets/frenchpress.png";
import pourover from "../../assets/pourover.png";
import aeropress from "../../assets/aeropress.png";
import chemex from "../../assets/chemex.png";

import ImageGallery from "react-image-gallery";

const Brewers = () => {
  const images = [
    {
      original: mokapot,
      thumbnail: mokapot,
      description:
        "The Moka pot: An iconic stovetop espresso maker known for its enduring design, brewing rich, aromatic Italian coffee for coffee enthusiasts worldwide.",
    },
    {
      original: frenchpress,
      thumbnail: frenchpress,
      description:
        "French press: Classic coffee maker brewing bold and flavorful coffee with ease, cherished by coffee lovers for its simplicity and taste.",
    },
    {
      original: pourover,
      thumbnail: pourover,
      description:
        "Pourover: A manual brewing method producing clean, nuanced coffee, favored by connoisseurs for its precision and delightful flavors.",
    },
    {
      original: aeropress,
      thumbnail: aeropress,
      description:
        "AeroPress: Innovative coffee maker crafting smooth, full-bodied brews swiftly, a favorite for its portability and versatile brewing possibilities.",
    },
    {
      original: chemex,
      thumbnail: chemex,
      description:
        "Chemex: Timeless glass pour-over brewer celebrated for its elegant design and delivering clean, aromatic coffee, cherished by coffee aficionados.",
    },
  ];

  return (
    <>
      <div id='brewers' className='brewers section'>
        <ImageGallery
          items={images}
          showPlayButton={false}
          showBullets={false}
          slideDuration={1500}
          autoPlay
          slideInterval={5000}
          showFullscreenButton={false}
          showThumbnails={false}
        />
      </div>
    </>
  );
};

export default Brewers;
