// import { Swiper, SwiperSlide } from 'swiper/react';
// import 'swiper/css';

const Banner = () => {
    return (
        <div>
           <div className="carousel 
             lg:w-full lg:h-[400px] md:h-[300px] lg:ml-0 md:ml-0 ml-10  rounded-lg">
          
  <div id="item1" className="carousel-item w-full ">
  
    <img src="https://i.ibb.co/V3ksBhS/beautiful-luxury-outdoor-swimming-pool-hotel-resort.jpg" className="w-full" />
  </div> 
  <div id="item2" className="carousel-item w-full">
    <img src="https://i.ibb.co/r4vF2vH/white-arch-deck-chairs-tropical-beach.jpg" className="w-full" />
  </div> 
  <div id="item3" className="carousel-item w-full">
    <img src="https://i.ibb.co/CKGKFCS/pool.jpg" className="w-full" />
  </div> 
  <div id="item4" className="carousel-item w-full">
    <img src="https://i.ibb.co/myHhNpd/beautiful-outdoor-view-with-umbrella.jpg" className="w-full" />
  </div>
  
</div> 
<div className="flex justify-center w-full py-2 gap-2 ">

  <a href="#item1" className="btn btn-xs ">1</a> 
  <a href="#item2" className="btn btn-xs">2</a> 
  <a href="#item3" className="btn btn-xs">3</a> 
  <a href="#item4" className="btn btn-xs">4</a>
</div>
        </div>
    );
};

export default Banner;