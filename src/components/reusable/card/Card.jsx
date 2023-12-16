import "./card.css";

const Card = ({ title, img, children }) => {
  return (
    <div className='container'>
      <div className='image'>
        <img src={img} />
      </div>
      <div className='title'>{title}</div>
      <div className='content'>
        <div className='description'>{children}</div>
      </div>
    </div>
  );
};

export default Card;
