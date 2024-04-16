import React, { useEffect } from 'react';
// import 'bootstrap/dist/css/bootstrap.min.css'
import Aos from 'aos'
import 'aos/dist/aos.css'
import { TbWorld } from "react-icons/tb";
import { GoGift } from "react-icons/go";
import { TiSocialSkypeOutline } from "react-icons/ti";
import { RiHotelLine } from "react-icons/ri";
import 'animate.css';

const Animation = () => {
    <head>
  <link
    rel="stylesheet"
    href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css"
  />
</head>

    useEffect(() => {
        Aos.init({ duration: 3000 });
    }, [])
    return (
        <div className=' flex-column align-items-center  p-5' >
            <div className="card lg:w-96 md:w-1.52 bg-gray-200 shadow-xl lg:ml-96" data-aos="fade-left">
                <div className="card-body">
                <h1 class="animate__animated animate__bounce card-title">Welcome to <span className='text-purple-400 font-mono'>Dream Hotel</span> </h1>
                    {/* <h2 className="card-title">Welcome to <span className='text-purple-400 font-mono'>Dream Hotel</span> </h2> */}
                    <p className='text-sm text-slate-700 '> where luxury meets comfort. Established in <span className='font-mono'>2024</span>, we pride ourselves on providing exceptional service and creating memorable experiences for our guests.</p>
                    
                    <p className='text-purple-400 font-mono'>Offers</p>
                    <p>Travel ideas and special discounts </p>
                    <hr />
                    <div className='lg:flex justify-between'>
                        <div>
                            <div className='flex'>
                                <h2><TbWorld></TbWorld></h2>
                                <h2 className='text-purple-400'>Travel Guides</h2>
                            </div>
                            <h1>Amsterdam</h1>
                            <h1>Berlin</h1>
                            <h1>Brussels</h1>
                            <h1>Madrid</h1>
                            </div>
                        <div>
                            <div className='flex mt-2'>
                                <h2><GoGift></GoGift></h2>
                                <h2 className=' text-purple-400 font-mono ml-4'>Gift Cards</h2>
                            </div>
                            <div className='flex mt-2'>
                                <h2><TiSocialSkypeOutline></TiSocialSkypeOutline></h2>
                                <h2 className=' text-purple-400 font-mono ml-4'>Social events</h2>
                            </div>
                            <div className='flex mt-2'>
                                <h2><RiHotelLine></RiHotelLine></h2>
                                <h2 className=' text-purple-400 font-mono ml-4'>More beyond hotels</h2>
                            </div>
                        </div>
                    </div>
                    
                    
                </div>
            </div>
            
            

        </div>
    );
};

export default Animation;