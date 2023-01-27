import React from 'react'
import { people, twitter } from "../assets/index.js";
import { data } from "../constants/index.js";


const AnnouncementCard = ({ Annonce, images }) => {
    const slideLeft = () => {
        let slider = document.getElementById('slider');
        slider.scrollLeft = slider.scrollLeft - 550;
    };

    const slideRight = () => {
        let slider = document.getElementById('slider');
        slider.scrollLeft = slider.scrollLeft + 550;
    };
    return (
        <section>
            <div className=" min-w-full flex flex-col mb-4 p-4 rounded-[16px] gap-4 bg-black-gradient font-poppins text-white font-medium">
                <div className="sm:flex justify-start items-center">
                    <img className="w-8 rounded-full absolute " src={people} alt="" />
                    <span className="pl-10 text-[16px]">abdelmalek djemaa</span>
                </div>
                <div className="ml-7">
                    <span>title : {Annonce.title}</span>
                    <br />
                    <span>Description :{Annonce.description}</span>                    <br />
                    <span>category :{Annonce.category}</span>                    <br />
                    <span>theme :{Annonce.theme}</span>                    <br />
                    <span>modality :
                        {Annonce.modality}</span><br />
                    <span>sold :{Annonce.sold}</span><br />
                    <span>wilaya :{Annonce.wilaya}</span><br />
                    <span>commune :{Annonce.commune}</span>

                </div>
                <div className='relative flex items-center'>
                    <button className='opacity-50 cursor-pointer hover:opacity-100 text-3xl' onClick={slideLeft}>
                        {'<'}
                    </button>
                    <div
                        id='slider'
                        className='w-full h-full rounded-[16px] overflow-x-scroll scroll whitespace-nowrap scroll-smooth scrollbar-hide'
                    >
                        {data.map((item) => (
                            <img
                                className='rounded-[16px] w-full  h-full inline-block pr-2 pl-2 cursor-pointer'
                                src={item.img}
                                alt='/'
                            />
                        ))}
                    </div>
                    <button className='opacity-50 cursor-pointer hover:opacity-100 text-3xl' onClick={slideRight}>
                        {'>'}
                    </button>
                </div>
                <div className="flex items-start gap-6 ml-7">
                    <img className="cursor-pointer" src={twitter} alt="" />
                    <img className="cursor-pointer" src={twitter} alt="" />
                    <img className="cursor-pointer" src={twitter} alt="" />
                </div>
            </div>
        </section>

    )
}

export default AnnouncementCard;
