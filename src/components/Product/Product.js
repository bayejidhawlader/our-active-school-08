import React from "react";

const Product = ({ product, handelAddToList }) => {
  const { name, img, time, button } = product;

  return (
    <div className="bg-white shadow-xl items-center text-center card-body">
      <figure className="">
        <img src={img} alt="Shoes" />
      </figure>
      <h2 className="text-black text-xl font-semibold">{name}</h2>
      <h4 className="text-black text-base font-semibold">
        Time Required: {time}<span>m</span>
      </h4>
      <button
        onClick={() => handelAddToList(product)}
        className="btn text-white btn-success"
      >
        {button}
      </button>
    </div>
  );
};

export default Product;
