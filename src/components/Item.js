import React, {useState} from "react";

function Item({ name, category }) {
  const [isInCart, setIsInCart] = useState(false)
  const itemClass = isInCart ? "in-cart" : ""
  
  return (
    <li className="">
      <span>{name}</span>
      <span className="category">{category}</span>
      <button className={itemClass} onClick={() => setIsInCart(isInCart => !isInCart)}>Add to Cart</button>
    </li>
  );
}

export default Item;
