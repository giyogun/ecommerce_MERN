import Link from "next/link";
import React, { useContext, useEffect } from "react";
import { BsBagCheckFill } from "react-icons/bs";
import AppContext from "../context/appContext";
import { runFireworks } from "../lib/utils";

const Success = () => {
  const ctx = useContext(AppContext);
  const { defaultState } = ctx;

  useEffect(() => {
    localStorage.clear();
    defaultState();
    runFireworks();
  }, []);

  return (
    <div className="success-wrapper">
      <div className="success">
        <p className="icon">
          <BsBagCheckFill />
        </p>
        <h3>Thank you for your order!</h3>
        <p className="email-msg">Check your email for the receipt.</p>
        <p className="description">
          If you have any queries, please email
          <a href="mailto:giyogun@yahoo.com" className="email">
            giyogun@yahoo.com
          </a>
        </p>
        <Link href="/">
          <button className="btn" type="button">
            Continue Shopping
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Success;
