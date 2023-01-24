import styles from "../style";
import {facebook} from "../assets/index.js";
import "../index.css"
import {Link} from "react-router-dom";
import React from "react";

const SignInCard = () => (
    <center>
  <section className={`${styles.flexCenter} ${styles.marginY} ${styles.padding} max-w-[700px] sm:flex-row flex-col bg-black-gradient-2 rounded-[20px] box-shadow `}>
      <center>
        <img src={facebook} alt="User" className="w-[70px] h-[70px] mb-10" />
          <div className="flex justify-start items-center mb-8 min-w-[0] sm:min-w-[450px]">
              <img src={facebook} className="absolute ml-4 w-8" alt="Email icon"/>
              <input type="text" placeholder="Email address"/>
          </div>
          <div className="flex justify-start items-center relative mb-12">
              <img src={facebook} className="absolute ml-4 w-8" alt="Password icon"/>
              <input type="password" placeholder="Password"/>
          </div>
          <Link style={{ cursor:"pointer" }} className={`${styles.paragraph} mt-4 text-[14px]  pt-4 pb-4 pl-8 pr-8 mb-0 font-poppins text-primary font-medium cursor-pointer text-[30px] items-start bg-blue-gradient rounded-[30px]`} to={'/Sign-in'}>
              Sign in
          </Link>
      <p className={`${styles.paragraph} mt-5 text-[20px] mb-5`}>
          Sign in with
      </p>
        <img src={facebook} alt="User" className="w-[45px] h-[45px] mb-10" style={{ cursor:"pointer" }}/>
          <a style={{ cursor:"pointer" }} href={null} className={`${styles.paragraph} mt-1 text-[15px] mb-0`}>
              Forgot password?
          </a>
      </center>
  </section>
    </center>
);

export default SignInCard;
