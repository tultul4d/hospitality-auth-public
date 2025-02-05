import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";


const ErrorPages = () => {
    return (
        <div className="text-center mt-10">
            <Helmet>
                <title>Error</title>
            </Helmet>
            
            <h2 className="text-2xl font-bold">not found page</h2>
            <Link to="/" className="border mt-10 bg-[#328EFF] bg-opacity-15 text-[#328EFF]">Go back to home</Link>
        </div>
    );
};

export default ErrorPages;