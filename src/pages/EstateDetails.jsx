import { useLoaderData, useParams } from "react-router-dom";


const EstateDetails = () => {
    const cards = useLoaderData();
    const {id} =  useParams();
    const idInt = parseInt(id);
    

    const card = cards.estate.find(card => card.id === idInt);
    console.log(card)
    
    return (
        <div className="card w-96 bg-base-100 shadow-xl">
  <figure className="px-10 pt-10">
    <img src={card.image} alt="Shoes" className="rounded-xl" />
  </figure>
  <div className="card-body items-center text-center">
    <h2 className="card-title">{card.estate_title}</h2>
    <p>If a dog chews shoes whose shoes does he choose?</p>
    <div className="card-actions">
      <button className="btn btn-primary">Buy Now</button>
    </div>
  </div>
</div>
    );
};

export default EstateDetails;