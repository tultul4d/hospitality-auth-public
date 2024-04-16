import { Helmet } from "react-helmet-async";
import { useLoaderData, useParams } from "react-router-dom";
import { FaLocationDot } from "react-icons/fa6";
import { LiaHotelSolid } from "react-icons/lia";

const EstateDetails = () => {
    const cards = useLoaderData();
    const {id} =  useParams();
    const idInt = parseInt(id);
    

    const card = cards.estate.find(card => card.id === idInt);
    console.log(card)
    
    return (
        
        <div className="card lg:w-[800px] md:w-[700px] w-[400px] lg:ml-60 bg-base-100 shadow-xl">
            <Helmet>
            <title>
                Card | Details
            </title>
        </Helmet>
  <figure className="px-10 pt-10">
    <img src={card.image} alt="Shoes" className="rounded-xl" />
  </figure>
  <div className="card-body items-center text-center">
    <div className="flex">
        
    <h2 className="card-title font-mono">{card.estate_title}</h2>
    </div>
    <div className="flex">
    <h2 className="text-purple-700 mt-1 gap-3"><LiaHotelSolid></LiaHotelSolid></h2>
    <h2 className="font-mono gap-5 ml-2">{card.segment_name}</h2>
    </div>

  
    <p className=" text-start text-slate-500">{card.description}</p>
    <div className="flex justify-between">
      <div className="flex"><h2 className="text-violet-800"><FaLocationDot></FaLocationDot></h2>
      <h2 className="">{card.location}</h2>
      </div>
      <div className="ml-5"><h2 className="text-slate-600"><span className="font-medium text-purple-600">Area:</span>{card.area}</h2></div>
      <h2 className="ml-5 text-slate-600 "><span className="font-medium text-purple-600">For:</span>{card.status}</h2>
      <h2 className="ml-5 text-slate-600"><span className="font-medium text-purple-600">Price:</span>{card.price}</h2>
    </div>
    
  </div>
</div>
    );
};

export default EstateDetails;