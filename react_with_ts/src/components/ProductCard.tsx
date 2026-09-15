
import React from "react";


type Props = {
    product:string;
  category:string;
description:string;
id:number;
image:string;
price:number;
title:string;
rating:{
    rate:number;
    count:number;
}
};

const ProductCard = ({ product }: Props) => {
  return (
    <div className="w-72 rounded-xl border bg-white p-4 shadow-md">

      <img
        src={product.image}
        alt={product.title}
        className="h-48 w-full rounded-lg object-contain"
      />

      <div className="mt-4">

        <p className="text-sm text-gray-500">
          {product.category}
        </p>

        <h2 className="mt-1 text-lg font-semibold">
          {product.title}
        </h2>

        <p className="mt-2 text-sm text-gray-500">
          {product.description}
        </p>

        <div className="mt-3 flex items-center gap-2">
          <span className="text-yellow-500">
            ⭐ {product.rating.rate}
          </span>

          <span className="text-sm text-gray-500">
            ({product.rating.count})
          </span>
        </div>

        <div className="mt-4 flex items-center justify-between">

          <span className="text-xl font-bold text-green-600">
            ${product.price}
          </span>

          <button className="rounded-lg bg-blue-600 px-4 py-2 text-sm text-white hover:bg-blue-700">
            Add to Cart
          </button>

        </div>

      </div>
    </div>
  );
};

export default ProductCard;

