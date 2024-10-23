import { useEffect, useState } from "react";
import "./Bottols.css";
import { setLS, storedCartlist } from "../bottolsLS";
import Cart from "./cart";

const Bottols = () => {
  const [bottols, setBottols] = useState([]);
  useEffect(() => {
    fetch("bottols.json")
      .then((res) => res.json())
      .then((data) => setBottols(data));
  }, []);

  const [cart, setCart] = useState([]);
  const cardHandler = (bottol) => {
    const newCart = [...cart, bottol];
    setCart(newCart);
    setLS(bottol.id);
  };

  useEffect(() => {
    if (bottols.length) {
      const storageData = storedCartlist();
      const savedCart = [];
      for (const id of storageData) {
        const savedBottle = bottols.find((bottol) => bottol.id === id);
        savedCart.push(savedBottle)
      }
      setCart(savedCart)
    }
  }, [bottols]);

  return (
    <div>
      <h3>Available Now: {bottols.length} items</h3>
      <Cart cart={cart}></Cart>
      <div className="bottolsContainer">
        {bottols.map((bottol) => (
          <BottolsShow
            key={bottol.id}
            bottol={bottol}
            cardHandler={cardHandler}
          ></BottolsShow>
        ))}
      </div>
    </div>
  );
};

export default Bottols;



//Show Bottol in UI
const BottolsShow = ({ bottol, cardHandler }) => {
  const { name, price, img } = bottol;
  return (
    <div className="bottol">
      <img className="bottol-img" src={img} alt={name} />
      <h4 className="bottolInfo">Name: {name}</h4>
      <h4 className="bottolInfo">Price: {price} $</h4>
      <button onClick={() => cardHandler(bottol)}>Add to Cart</button>
    </div>
  );
};
