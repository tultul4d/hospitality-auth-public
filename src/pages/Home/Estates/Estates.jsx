import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { FaLocationDot } from "react-icons/fa6";
import { LiaHotelSolid } from "react-icons/lia";


const Estates = ({cards}) => {
    const { image, id, estate_title, segment_name, description, location,price} = cards;
    return (
        
        <div className="">
          {/* <Helmet>
            <title>
              Card
            </title>
          </Helmet> */}
            <div className="card lg:w-96 w-full bg-base-100 shadow-xl">
  <figure className="px-10 pt-10">
    <img src={image} alt="Shoes" className="rounded-xl" />
  </figure>
  <div className="card-body ">
    <h2 className="text-xl font-bold">{estate_title}</h2>
    <div className="flex">
      <h2><LiaHotelSolid></LiaHotelSolid></h2>
      <h2 className=" font-semibold text-purple-500">{segment_name}</h2>
    </div>
    <p className="text-slate-400">{description}</p>
    <div className="flex">
      <h2><FaLocationDot></FaLocationDot></h2>
      <h2 className="text-purple-700 font-mono">{location}</h2>
    </div>
    <div>
      <h2 className="font-serif">Boking Price:{price}</h2>
    </div>
    <div className="card-actions">
      <Link
      to={`/cards/${id}`}>
      <button className="btn bg-purple-100 text-slate-500">View Property</button></Link>
    </div>
  </div>
</div>
        </div>
    );
};

export default Estates;
