import { useParams } from "react-router-dom";


const EstateDetails = () => {
    const {id} = useParams();
    return (
        <div>
            <h3 className="text-4xl">details </h3>
            <p>{id}</p>
        </div>
    );
};

export default EstateDetails;