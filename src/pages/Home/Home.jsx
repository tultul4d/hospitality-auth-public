import { useLoaderData } from "react-router-dom";
import Banner from "./Banner";
import Card from "./Card/Card";
import Slider from "./Slider";





const Home = () => {
    const cards = useLoaderData();
    console.log(cards)
    return (
        <div>
            <Banner></Banner>
            <Card></Card>
            <Slider></Slider>
            <div>
           
            </div>
            
           
             
        </div>
    );
};

export default Home;