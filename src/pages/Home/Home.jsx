import { useLoaderData } from "react-router-dom";
import Banner from "./Banner";
import Card from "./Card/Card";
import Slider from "./Slider";
import Estates from "./Estates/Estates";
import { Helmet } from "react-helmet-async";
import SliderBanner from "./SliderBanner";
import SliderTitle from "./SliderTitle";






const Home = () => {
    const cards = useLoaderData();
    console.log(cards)
    return (
        <div>
            <Helmet>
                <title>
                    Dream Hotel | Home
                </title>
            </Helmet>
        
            <Banner></Banner>
            <Card></Card>
            <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 mt-8 gap-5">
                {
                    cards.estate.map(card => <Estates key={cards.id} cards={card}></Estates>)
                }
            </div>
            <SliderTitle></SliderTitle>
            <SliderBanner></SliderBanner>
            <Slider></Slider>
            
            
           
             
        </div>
    );
};

export default Home;