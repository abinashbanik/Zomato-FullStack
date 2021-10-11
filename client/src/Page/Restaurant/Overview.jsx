import React from 'react';
import { Link, useParams } from "react-router-dom";
import { IoMdArrowDropright } from 'react-icons/io';
import Slider from "react-slick";
import ReactStars from "react-rating-stars-component";

//components
import MenuCollection from '../../Components/restaurant/MenuCollection';
import MenuSimilarRestaurantcard from '../../Components/restaurant/MenuSimilarRestaurantcard';
import { NextArrow, PrevArrow } from '../../Components/CarousalArrow';
import ReviewCard from './Reviews/reviewCard';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'

const Overview = () => {
    const {id} = useParams();

    const settings = {
        arrows:true,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        nextArrow: <NextArrow />,
        prevArrow: <PrevArrow />
      };
    const ratingChanged = (newRating) => {
        console.log(newRating);
      };

    return (
        <>
            <div className="flex flex-col md:flex-row relative">
                <div className="md:w-8/12 w-full ">
                    <h2 className="text-lg font-semibold md:text-xl my-4">
                        About this place
                    </h2>
                    <div className="flex justify-between items-center">
                        <h4 className="text-lg font-medium">Menu</h4>
                        <Link to={`/restaurant/${id}/menu`}>
                            <span className="flex itenms-center gap-1 text-zomato-400">
                                See all menu <IoMdArrowDropright /> 
                            </span> 
                        </Link>                        
                    </div>
                    <div className="flex flex-wrap gap-3 my-4">
                            <MenuCollection 
                                menuTitle="Menu"
                                pages="3"
                                image="https://b.zmtcdn.com/data/menus/179/59179/5b618826ffaeb64a1b76f7a936e714a2.jpg" 
                            />
                    </div>
                    <h4 className="text-lg font-medium">Cuisines</h4>
                    <div className="flex flex-wrap gap-2 my-2">
                        <span className="border border-gray-600 text-blue-600 px-2 py-1 rounded-full ">Street Food</span>
                        <span className="border border-gray-600 text-blue-600 px-2 py-1 rounded-full ">Street Food</span>
                        <span className="border border-gray-600 text-blue-600 px-2 py-1 rounded-full ">Street Food</span>
                    </div>
                    <div className="my-4">
                        <h4 className="text-lg font-medium ">Average Cost</h4>
                        <p>₹200 for one order (approx.)</p>
                        <small className="text-gray-500">Exclusive of applicable taxes and charges, if any</small>
                    </div>
                    <div className="my-4 ">
                        <h4 className="text-lg font-medium ">Similar Restaurants</h4>
                        <Slider {...settings}>
                            <MenuSimilarRestaurantcard 
                                image="https://b.zmtcdn.com/data/pictures/chains/2/18878982/40ed4233df2404c73dc8398144faf5a1_featured_v2.jpg"
                                title="food"
                            />
                            <MenuSimilarRestaurantcard 
                                image="https://b.zmtcdn.com/data/pictures/chains/2/18878982/40ed4233df2404c73dc8398144faf5a1_featured_v2.jpg"
                                title="food"
                            />
                            <MenuSimilarRestaurantcard 
                                image="https://b.zmtcdn.com/data/pictures/chains/2/18878982/40ed4233df2404c73dc8398144faf5a1_featured_v2.jpg"
                                title="food"
                            />
                            <MenuSimilarRestaurantcard 
                                image="https://b.zmtcdn.com/data/pictures/chains/2/18878982/40ed4233df2404c73dc8398144faf5a1_featured_v2.jpg"
                                title="food"
                            />
                            <MenuSimilarRestaurantcard 
                                image="https://b.zmtcdn.com/data/pictures/chains/2/18878982/40ed4233df2404c73dc8398144faf5a1_featured_v2.jpg"
                                title="food"
                            />
                        </Slider>

                    </div>
                    <div className="my-4">
                        <h4 className="text-lg font-medium">Rate your delivery experience</h4>

                    </div>
                    <div>                    
                    <ReactStars
                        count={5}
                        onChange={ratingChanged}
                        size={24}
                        activeColor="#ffd700"
                    />
                    </div>
                    <div className="my-4 flex flex-col gap-4 ">
                            <ReviewCard />
                            <ReviewCard />
                            <ReviewCard />
                            <ReviewCard />
                    </div>
                </div>
                <aside 
                    style={{ height: "fit-content" }}
                    className="hidden md:flex md:w-4/12 sticky rounded-xl top-2 bg-white p-3 shadow-md flex flex-col gap-4">
                        <div>
                            <h4 className="text-xl font-medium">Call Now</h4>
                            <h5 className="text-zomato-400 font-medium">+918040414141</h5>
                        </div>
                        <div>
                            <h4 className="text-xl font-medium">Map</h4>
                            <div className="w-full h-48">
                                <MapContainer center={[23.836729020985313, 91.2941594998267]} zoom={13} scrollWheelZoom={false}>
                                <TileLayer
                                    attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                                />
                                <Marker position={[23.836729020985313, 91.2941594998267]}>
                                    <Popup>
                                    A pretty CSS3 popup. <br /> Easily customizable.
                                    </Popup>
                                </Marker>
                                </MapContainer>
                            </div>
                        </div>

                </aside>
            </div>
        </>
    );
};

export default Overview;
