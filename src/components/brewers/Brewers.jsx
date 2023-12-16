import "./brewers.css";
import "../../App.css";

import mokapot from "../../assets/mokapot.png";

import { Card } from "../reusable";

const Brewers = () => {
  return (
    <div id='brewers' className='brewers section'>
      <Card title='Moka pot' img={mokapot}>
        The Moka pot, a stovetop espresso maker invented in the 1930s by Alfonso
        Bialetti, is famous for its iconic design and ability to brew strong,
        aromatic coffee.
      </Card>
    </div>
  );
};

export default Brewers;
