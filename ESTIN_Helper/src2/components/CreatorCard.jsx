import {socialMedia} from "../constants/index.js";

const CreatorCard = ({ name, title, img }) => (
  <div className="items-center flex justify-between flex-col px-8 py-12 rounded-[20px]  max-w-[260px] items-center md:mr-10 sm:mr-5 mr-0 my-5 creator-card">
          <img src={img} alt={name} className="w-[72px] h-[72px] rounded-full ml-3 items-center" />
          <br/>
    <div className="flex flex-row items-center">
      <div className="flex flex-col items-center ">
          <center>
        <h4 className="font-poppins font-semi-bold text-[24px] leading-[32px] text-white">
          {name}
        </h4>
        <p className="font-poppins font-normal text-[16px] leading-[24px] text-dimWhite items-center">
          {title}
            <br/>
            <br/>
        </p>
          <div className="flex flex-auto mt-6 ml-10">
              {socialMedia.map((social, index) => (
                  <img
                      key={social.id}
                      src={social.icon}
                      alt={social.id}
                      className={`w-[21px] h-[21px] object-contain cursor-pointer ${
                          index !== socialMedia.length - 1 ? "mr-6" : "mr-0"
                      }`}
                      onClick={() => window.open(social.link)}
                  />
              ))}
          </div>
          </center>
      </div>
    </div>
  </div>
);


export default CreatorCard;
