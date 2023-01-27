import styles from "../style";
import {facebook} from "../assets/index.js";
import {Link} from "react-router-dom";
import "../index.css"
import React from "react";

const SignUpCard = () => (
    <center>
  <section className={`${styles.flexCenter} ${styles.marginY} ${styles.padding} max-w-[700px] sm:flex-row flex-col bg-black-gradient-2 rounded-[20px] box-shadow `}>
      <center>
        <img src={facebook} alt="User" className="w-[70px] h-[70px] mb-10" />
          <div className=" items-center flex flex-wrap sm:justify-start justify-center w-full relative">
              <div className="flex justify-start items-center mb-8 m-0">
                  <img src={facebook} className="absolute ml-4 w-8" alt="Name icon"/>
                  <input className="border-none bg-black-gradient rounded-[50px] h-12 w-[95%] p-8 pl-14 text-white" type="text" placeholder="Name"/>
              </div>
              <div className="flex justify-start items-center relative mb-8">
                  <img src={facebook} className="absolute ml-4 w-8" alt="Age icon"/>
                  <input className="border-none bg-black-gradient rounded-[50px] h-12 w-[95%] p-8 pl-14 text-white" type="text" placeholder="Age"/>
              </div>
              <div className="flex justify-start items-center mb-8 m-0">
                  <img src={facebook} className="absolute ml-4 w-8" alt="Email icon"/>
                  <input className="border-none bg-black-gradient rounded-[50px] h-12 w-[95%] p-8 pl-14 text-white" type="text" placeholder="Email address"/>
              </div>
              <div className="flex justify-start items-center mb-8 m-0">
                  <img src={facebook} className="absolute ml-4 w-8" alt="Phone number icon"/>
                  <input className="border-none bg-black-gradient rounded-[50px] h-12 w-[95%] p-8 pl-14 text-white" type="text" placeholder="Phone number"/>
              </div>
              <div className="flex justify-start items-center mb-8 m-0">
                  <img src={facebook} className="absolute ml-4 w-8" alt="Password icon"/>
                  <input className="border-none bg-black-gradient rounded-[50px] h-12 w-[95%] p-8 pl-14 text-white" type="password" placeholder="Password"/>
              </div>
              <div className="flex justify-start items-center mb-8 m-0">
                  <img src={facebook} className="absolute ml-4 w-8" alt="Country icon"/>
                  <input className="border-none bg-black-gradient rounded-[50px] h-12 w-[95%] p-8 pl-14 text-white" type="text" placeholder="Country"/>
              </div>
              <div className="flex justify-start items-center mb-12 m-0">
                  <img src={facebook} className="absolute ml-4 w-8" alt="Confirm password icon"/>
                  <input className="border-none bg-black-gradient rounded-[50px] h-12 w-[95%] p-8 pl-14 text-white" type="password" placeholder="Confirm password"/>
              </div>
          </div>
          <Link style={{ cursor:"pointer" }} className={`${styles.paragraph} mt-4 text-[20px]  pt-4 pb-4 pl-8 pr-8 mb-0 font-poppins text-primary font-medium cursor-pointer items-start bg-blue-gradient rounded-[30px]`} to={'/Home'}>
              Sign up
          </Link>
      <p className={`${styles.paragraph} mt-5 text-[20px] mb-5`}>
          Sign up with
      </p>
        <img src={facebook} alt="User" className="w-[45px] h-[45px] mb-10" style={{ cursor:"pointer" }}/>
          <Link style={{ cursor:"pointer" }} className={`${styles.paragraph} mt-1 text-[15px] mb-0`} to={'/Sign-in'}>
              Already have an account
          </Link>
      </center>
  </section>
    </center>
);

export default SignUpCard;
