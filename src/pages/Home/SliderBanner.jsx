import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';


const SliderBanner = () => {
    return (
        <Swiper
        modules={[Navigation, Pagination, Scrollbar, A11y]}
        spaceBetween={50}
        slidesPerView={2}
        navigation
        pagination={{ clickable: true }}
        scrollbar={{ draggable: true }}
     
    >
      <SwiperSlide>
        <img src="https://i.ibb.co/V3ksBhS/beautiful-luxury-outdoor-swimming-pool-hotel-resort.jpg" alt="" style={{width: "100%"}} />
      </SwiperSlide>
      <SwiperSlide><img src="https://i.ibb.co/r4vF2vH/white-arch-deck-chairs-tropical-beach.jpg" alt="" style={{width: "100%"}} /></SwiperSlide>
      <SwiperSlide><img src="https://i.ibb.co/CKGKFCS/pool.jpg" alt="" style={{width: "100%"}}/></SwiperSlide>
      <SwiperSlide><img src="https://i.ibb.co/myHhNpd/beautiful-outdoor-view-with-umbrella.jpg" alt="" style={{width: "100%"}} /></SwiperSlide>
      ...
    </Swiper>
    );
};

export default SliderBanner;