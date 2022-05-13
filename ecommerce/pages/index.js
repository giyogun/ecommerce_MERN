import React from "react";
import FooterBanner from "../components/FooterBanner";
import HeroBanner from "../components/HeroBanner";
import Product from "../components/Product";
import axios from 'axios';

const URL = "https://giyogun-ecom.herokuapp.com/api"

const Home = ({ products, banner }) => {
  return (
    <>
      <HeroBanner heroBanner={banner.length && banner[0]} />

      <div className="products-heading">
        <h2>Available Products</h2>
        <p>Best price in the market</p>
      </div>

      <div className="products-container">
        {products?.map((product) => (
          <Product key={product._id} product={product} />
        ))}
      </div>

      <FooterBanner footerBanner={banner && banner[0]} />
    </>
  );
};

export const getServerSideProps = async () => {
  const productResponse = await axios.get(`${URL}/products`);
  const data = await productResponse.data;

  const bannerResponse = await axios.get(`${URL}/banner`)

  const bannerData = await bannerResponse.data;

  return {
    props: { products: data.map(product => product), banner: bannerData.map(item => item) },
  };
};

export default Home;
