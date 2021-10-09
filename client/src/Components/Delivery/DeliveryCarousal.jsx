import React from 'react';
import Slider from "react-slick";
//component
import DeliveryCategory from './DeliveryCategory';
import { NextArrow, PrevArrow } from '../CarousalArrow';

const DeliveryCarousal = () => {

    const categories = [
        {
            image:"https://b.zmtcdn.com/data/o2_assets/d0bd7c9405ac87f6aa65e31fe55800941632716575.png",
            title:"pizza",
        },
        {
            image:"https://b.zmtcdn.com/data/o2_assets/adbe5236974520ecba7cb9f47e4c92011632716658.png",
            title:"chicken",
        },
        {
            image:"https://b.zmtcdn.com/data/o2_assets/2b5a5b533473aada22015966f668e30e1633434990.png",
            title:"paratha",
        },
        {
            image:"https://b.zmtcdn.com/data/o2_assets/7e83ad932f340bacd71bd7e891ede6541632716696.png",
            title:"biriyani",
        },
        {
            image:"https://b.zmtcdn.com/data/o2_assets/dff007e05e2f72a4abc0772c7a8cd0951632716697.png",
            title:"burger",
        },
        {
            image:"https://b.zmtcdn.com/data/o2_assets/7e83ad932f340bacd71bd7e891ede6541632716696.png",
            title:"biriyani",
        },
        {
            image:"https://b.zmtcdn.com/data/o2_assets/adbe5236974520ecba7cb9f47e4c92011632716658.png",
            title:"chicken",
        },
];
    const settings = {
    arrows:true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />
  };

    return (
        <>
            <h1 className="text-xl font-semibold mb-4 ">Inspiration for your first order</h1>
            <div className="lg:hidden flex flex-wrap gap-3 lg:gap-0 justify-between">
                
            </div>
            <div className="hidden lg:block">
                    <Slider {...settings}>
                        {categories.map((food) => (
                        <DeliveryCategory {...food} />
                        ))}
                    </Slider>
            </div>
        </>
    );
};

export default DeliveryCarousal;
