import axios from "axios";
import Head from "next/head";
import React, { useContext, useState } from "react";
import toast from "react-hot-toast";
import {
  AiOutlineMinus,
  AiOutlinePlus,
  AiOutlineStar
} from "react-icons/ai";
import Product from "../../components/Product";
import AppContext from "../../context/appContext";

const URL = "https://giyogun-ecom.herokuapp.com/api"

const ProductDetails = ({ product, products }) => {
  const [index, setIndex] = useState(0);
  const [amount, setAmount] = useState(0);
  const ctx = useContext(AppContext);
  const { addProduct, setShowCart } = ctx;
  const { image, name, details, price } = product;
  const qty = amount === 0 ? 1 : amount;

  const checkoutHandler = () => {
    addProduct({ ...product, qty });
    setShowCart();
  };

  return (
    <div>
      <Head>
        <title>{name}</title>
      </Head>
      <div className="product-detail-container">
        <div>
          <div>
            <img src={image[index]} className="product-detail-image" />
          </div>
          <div className="small-images-container">
            {image?.map((img, i) => (
              <img
                src={img}
                className={
                  i === index ? "small-image selected-image" : "small-image"
                }
                key={i}
                onMouseEnter={() => setIndex(i)}
              />
            ))}
          </div>
        </div>
        <div className="product-detail-desc">
          <h1>{name}</h1>
          <div className="reviews">
            <div>
              <AiOutlineStar />
              <AiOutlineStar />
              <AiOutlineStar />
              <AiOutlineStar />
              <AiOutlineStar />
            </div>
            <p>(0)</p>
          </div>
          <h4>Details:</h4>
          <p>{details}</p>
          <p className="price">{`$${price}`}</p>
          <div className="quantity">
            <h3>Quantity:</h3>
            <p className="quantity-desc">
              <span
                className="minus"
                onClick={() => setAmount(amount <= 0 ? 0 : amount - 1)}
              >
                <AiOutlineMinus />
              </span>
              <span className="num">{amount}</span>
              <span className="plus" onClick={() => setAmount(amount + 1)}>
                <AiOutlinePlus />
              </span>
            </p>
          </div>
          <div className="buttons">
            <button
              className="add-to-cart"
              onClick={() => {
                addProduct({ ...product, qty });
                toast.success(
                  `${qty} ${
                    qty === 1 ? "item" : "items"
                  } successfully added to cart`,
                  { id: "itemAdd" }
                );
              }}
            >
              Add to Cart
            </button>
            <button className="buy-now" onClick={checkoutHandler}>
              Buy Now
            </button>
          </div>
        </div>
      </div>
      <div className="maylike-products-wrapper">
        <h2>You may also like</h2>
        <div className="marquee">
          <div className="maylike-products-container track">
            {products.map((p) => (
              <Product key={p._id} product={p} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export const getStaticPaths = async () => {
  const response = await axios.get(`${URL}/products`);

  const data = await response.data;
  const paths = data.map((i) => ({
    params: { slug: i.slug },
  }));

  return {
    fallback: false,
    paths,
  };
};

export const getStaticProps = async ({ params: { slug } }) => {
  const singleProduct = await axios.get(
    `${URL}/products/${slug}`
  );
  const allProducts = await axios.get(`${URL}/products`);

  const product = singleProduct.data;

  const data = await allProducts.data;

  return {
    props: { products: data.map((product) => product), product },
  };
};

export default ProductDetails;
