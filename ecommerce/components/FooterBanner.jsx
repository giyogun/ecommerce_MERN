import React from "react";
import Link from "next/link";

const FooterBanner = ({
  footerBanner: {
    discount,
    largeText1,
    largeText2,
    smallText,
    midText,
    product,
    buttonText,
    image,
    saleTime,
    desc,
  },
}) => {
  const slug = product.toLowerCase().replace(/ /g, "-");

  return (
    <div className="footer-banner-container">
      <div className="banner-desc">
        <div className="left">
          <p>{discount}</p>
          <h3>{largeText1}</h3>
          <h3>{largeText2}</h3>
          <p>{saleTime}</p>
        </div>
        <div className="right">
          <p>{smallText}</p>
          <h3>{midText}</h3>
          <p>{desc}</p>
          <Link href={`/product/${slug}`}>
            <button type="button">{buttonText}</button>
          </Link>
        </div>
        <img src={image} alt={product} className='footer-banner-image' />
      </div>
    </div>
  );
};

export default FooterBanner;
