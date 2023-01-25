import styles from "../style";
import {facebook} from "../assets/index.js";
import {Link} from "react-router-dom";
import "../index.css"
import React from "react";

const ForgotPasswordCard = () => (
    <center>
  <section className={`${styles.flexCenter} ${styles.marginY} ${styles.padding} max-w-[700px] sm:flex-row flex-col bg-black-gradient-2 rounded-[20px] box-shadow `}>
      <center>
        <img src={facebook} alt="User" className="w-[100px] h-[100px] mb-10" />
          <div className=" items-center flex flex-wrap sm:justify-start justify-center w-full relative">
              <div className="flex justify-start items-center mb-12 min-w-[0] sm:min-w-[450px]">
                  <img src={facebook} className="absolute ml-4 w-8" alt="Email icon"/>
                  <input type="text" placeholder="Email address"/>
              </div>
          </div>
          <Link style={{ cursor:"pointer" }} className={`${styles.paragraph} mt-4 text-[20px]  pt-4 pb-4 pl-8 pr-8 mb-8 font-poppins text-primary font-medium cursor-pointer items-start bg-blue-gradient rounded-[30px]`} to={'/Sign-in'}>
              Reset
          </Link>
      </center>
  </section>
    </center>
);

export default ForgotPasswordCard;
