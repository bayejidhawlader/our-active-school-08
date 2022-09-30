import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import Info from "./information/Info";
import Product from "./Product/Product";

const Card = () => {
  const [products, setProducts] = useState([]);

  const [cart, setCart] = useState([]);


  useEffect(() => {
    fetch("products.json")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);

  const handelAddToList = (product) => {
    const newCart = [...cart, product];
    setCart(newCart);
  };

  return (
    <div className="flex">
      <div className="card grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 w-[70%] gap-7 px-4 mt-20">
        {products.map((product) => (
          <Product
            key={product.name}
            product={product}
            handelAddToList={handelAddToList}
          ></Product>
        ))}
      </div>

      <div className="w-[28%]">
        <Info cart={cart}></Info>
      </div>
    </div>
  );
};

export default Card;
