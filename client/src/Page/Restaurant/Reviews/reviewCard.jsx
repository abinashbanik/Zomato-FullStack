import React from 'react';
import { TiStarFullOutline } from 'react-icons/ti';

const ReviewCard = () => {
    return (
        <>
           <div className=" my-3 flex flex-col gap-3">
                <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                        <div className="w-10 h-10 rounded-full">
                            <img 
                                src="https://b.zmtcdn.com/data/user_profile_pictures/de5/816c740d2c3be2fe8dc80b8c55619de5.jpg"
                                alt="avatar"
                                className="w-full h-full rounded-full object-cover"
                            />
                        </div>
                        <div className="flex flex-col ">
                            <h3 className="text-lg font-semibold">Pavan Banik</h3>
                            <small className="text-gray-500">5 Reviews &#8226; 3 Followers</small>    
                        </div>
                    </div>
                    <button className="text-zomato-400 border py-2 px-4  rounded-lg border-zomato-400">Follow</button>
                     
                </div> 
                <div>
                    <div className="flex items-center gap-3">
                        <span className="text-white bg-green-700 px-2 py-1 gap-1 flex items-center w-10 h-5 rounded-lg">3 <TiStarFullOutline /></span>
                        <h5 className="font-regular text-xs uppercase">Delivery</h5>
                        <small className="text-gray-500">3 days ago</small>    
                    </div>
                    <div className="w-full">
                        <p className="w-full text-gray-600 font-light text-base">
                            All types of foods are very tasty and provides the delivery 
                            very soon and correct time of period and the service provided by the members in the restaurant are excellent 
                            and the food are very hygiene very the customer could be healthy and stay strong .
                        </p>    
                    </div>    
                </div>     
            </div> 
        </>
    );
};

export default ReviewCard;
