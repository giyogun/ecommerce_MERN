import React from "react";
import Link from "next/link";

const Product = ({ product: { image, name, slug, price } }) => {
  return (
    <div>
      <Link href={`/product/${slug}`}>
        <div className="product-card">
          <img
            src={image[0]}
            width={250}
            height={250}
            alt={name}
            className="product-image"
          />
          <p className="product-name">{name}</p>
          <p className="product-name">{`$${price}`}</p>
        </div>
      </Link>
    </div>
  );
};

export default Product;
