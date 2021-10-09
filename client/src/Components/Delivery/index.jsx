import React, {useState} from 'react';

//components
import DeliveryCarousal from './DeliveryCarousal';
import Brand from './Brand';
import RestaurantCard from '../RestaurantCard';

const Delivery = () => {
    const [restaurantList, setRestaurantList] = useState([
        {
            _id: "123456",
            photos: [
                "https://b.zmtcdn.com/data/pictures/2/19494942/49614d62302ca754b7182750d362d91c.jpg?fit=around|771.75:416.25&crop=771.75:416.25;*,*",
            ],
            name: "Thalaivars Biryani",
            cuisine: ["Street", "Beverages", "tea"],
            averageCost: 100,
            isPro: true,
            isOff: 80,
            durationOfdelivery: 47,
            RestaurantReviewValue: 4.1,
        },
        {
            _id: "123456-2",
            photos: [
                "https://b.zmtcdn.com/data/pictures/7/55397/fb83f44f6bbbdd08809b95f8fb6bdb98.jpg?fit=around|771.75:416.25&crop=771.75:416.25;*,*",
            ],
            name: "Empire Restaurant",
            cuisine: ["Biryani", "North Indian", "tea"],
            averageCost: 100,
            isPro: true,
            isOff: 80,
            durationOfdelivery: 47,
            RestaurantReviewValue: 4.1,
        },
        {
            _id: "123456-3",
            photos: [
                "https://b.zmtcdn.com/data/pictures/2/19494942/49614d62302ca754b7182750d362d91c.jpg?fit=around|771.75:416.25&crop=771.75:416.25;*,*",
            ],
            name: "Thalaivars Biryani",
            cuisine: ["Street", "Beverages", "tea"],
            averageCost: 100,
            isPro: true,
            isOff: 80,
            durationOfdelivery: 47,
            RestaurantReviewValue: 4.1,
        },
    ]);
    return (
        <>
            <DeliveryCarousal />
            <Brand />
            <div className="flex justify-between flex-wrap">
                {
                    restaurantList.map((restaurant) => (
                        <RestaurantCard {...restaurant} key={restaurant._id} />
                    ))
                }                
            </div>
        </>
    );
};

export default Delivery;
