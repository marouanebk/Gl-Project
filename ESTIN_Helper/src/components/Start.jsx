import styles from "../style";
import {image1} from "../assets";
import {Link} from "react-router-dom";
import React from "react";

const Start = () => {
    return (
    <section id="home" className={`flex md:flex-row flex-col ${styles.paddingY}`}>
      <div className={`flex-1 ${styles.flexStart} flex-col xl:px-0 sm:px-16 px-6`}>

        <div className="flex flex-row justify-between items-center w-full">
          <h1 className="flex-1 font-poppins font-semi-bold ss:text-[72px] text-[52px] text-white ss:leading-[100.8px] leading-[75px]">
            ESTIN <br className="sm:block hidden" />{" "}
            <span className="text-gradient">Helper</span>{" "}
          </h1>
        </div>

        <h1 className="font-poppins font-semi-bold ss:text-[68px] text-[52px] text-white ss:leading-[100.8px] leading-[75px] w-full">
          For all Students.
        </h1>
        <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
          Our team of experts create this site to help student to find
          solution to their problems, and also help each others.
        </p>
          <Link style={{ cursor:"pointer" }} className={`${styles.paragraph} mt-8 text-[20px]  pt-5 pb-5 pl-11 pr-11 mb-0 font-poppins text-primary font-medium cursor-pointer items-start bg-blue-gradient rounded-[10px]`} to={'/Sign-up'}>
              Register
          </Link>
      </div>

      <div className={`flex-1 flex ${styles.flexCenter} md:my-0 my-10 relative`}>
        <img src={image1} alt="billing" className="w-[80] h-[80%] relative z-[5]" />

        {/* gradient start */}
        <div className="absolute z-[0] w-[40%] h-[35%] top-0 pink__gradient" />
        <div className="absolute z-[1] w-[80%] h-[80%] rounded-full white__gradient bottom-40" />
        <div className="absolute z-[0] w-[50%] h-[50%] right-20 bottom-20 blue__gradient" />
        {/* gradient end */}
      </div>

      <div className={`ss:hidden ${styles.flexCenter}`}>
      </div>
    </section>
  );
};

export default Start;
