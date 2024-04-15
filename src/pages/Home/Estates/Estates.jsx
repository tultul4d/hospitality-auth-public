import { Link } from "react-router-dom";


const Estates = ({cards}) => {
    const {estate_title, image, id} = cards;
    return (
        
        <div className="">
            <div className="card w-96 bg-base-100 shadow-xl">
  <figure className="px-10 pt-10">
    <img src={image} alt="Shoes" className="rounded-xl" />
  </figure>
  <div className="card-body items-center text-center">
    <h2 className="card-title">Shoes!</h2>
    <p>If a dog chews shoes whose shoes does he choose?</p>
    <div className="card-actions">
      <Link
      to={`/cards/${id}`}>
      <button className="btn btn-primary">View Property</button></Link>
    </div>
  </div>
</div>
        </div>
    );
};

export default Estates;
