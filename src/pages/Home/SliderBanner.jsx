
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
      <div className="card w-96 bg-purple-200 mt-10 ">
  <div className="card-body">
  <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
        <div className="w-10 rounded-full">
          <img alt="Tailwind CSS Navbar component" src="https://i.ibb.co/SJ917TH/beautiful-young-woman-whip-hair-smiling-haircare-concept.jpg" />
        </div>
      </div>
    <h2 className="card-title text-purple-400">Rima</h2>
    <p className='font-mono'>My stay at The Grand Plaza was fantastic! The location was perfect, right in the heart of Manhattan with easy access to all the major attractions. The room was spacious and well-appointed, with stunning views of the city skyline. The staff were incredibly friendly and accommodating, making me feel right at home.</p>
    
  </div>
</div>
      </SwiperSlide>
      <SwiperSlide><div className="card w-96 bg-purple-200 mt-10 ">
  <div className="card-body">
  <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
        <div className="w-10 rounded-full">
          <img alt="Tailwind CSS Navbar component" src="https://i.ibb.co/bXwxC2V/confident-attractive-caucasian-guy-beige-pullon-smiling-broadly-while-standing-against-gray.jpg" />
        </div>
      </div>
    <h2 className="card-title text-purple-400">Ruhan</h2>
    <p className='font-mono'>I recently stayed at The Beach Resort in Miami and it was absolutely amazing! The hotel is right on the beach, offering breathtaking views and easy access to the ocean. The room was beautifully decorated and very comfortable, with all the amenities you could ask for.</p>
    
  </div>
</div></SwiperSlide>
      <SwiperSlide><div className="card w-96 bg-purple-200 mt-10 ">
  <div className="card-body">
  <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
        <div className="w-10 rounded-full">
          <img alt="Tailwind CSS Navbar component" src="https://i.ibb.co/NNHqp1Y/emotions-young-man-blue-shirt.jpg" />
        </div>
      </div>
    <h2 className="card-title text-purple-400">Arab</h2>
    <p className='font-mono'>My stay at the Mountain View Lodge in Colorado was nothing short of perfect. The lodge is nestled in the mountains, offering stunning views of the surrounding scenery. The room was cozy and inviting, with a fireplace and comfortable furnishings. The staff were incredibly welcoming and went above and beyond to ensure I had everything I needed during my stay.</p>
    
  </div>
</div></SwiperSlide>
      <SwiperSlide><div className="card w-96 bg-purple-200 mt-10 ">
  <div className="card-body">
  <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
        <div className="w-10 rounded-full">
          <img alt="Tailwind CSS Navbar component" src="https://i.ibb.co/4StpDPs/handsome-confident-smiling-man-with-hands-crossed-chest.jpg" />
        </div>
      </div>
    <h2 className="card-title text-purple-400">Khan</h2>
    <p className='font-mono'>I recently stayed at The Urban Oasis in Tokyo and it exceeded all my expectations. The hotel is located in a bustling neighborhood, with plenty of shops, restaurants, and attractions nearby. The room was spacious and modern, with all the latest amenities. </p>
    
  </div>
</div></SwiperSlide>
      ...
    </Swiper>
    );
};

export default SliderBanner;