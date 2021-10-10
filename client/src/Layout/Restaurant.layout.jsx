import React from 'react';


//components
import RestaurantNavbar from "../Components/Navbar/restaurantNavbar";
import ImageGrid from '../Components/restaurant/ImageGrid';
const RestaurantLayout = () => {
    return (
        <>
        {" "}
        <RestaurantNavbar />
        <div className="conatiner mx-auto px-4 lg:px-20 ">            
              <ImageGrid images={[
                  "https://b.zmtcdn.com/data/pictures/0/61610/f00b07c175ac3bbafd8506f7222fe07d.jpg",
                  "https://b.zmtcdn.com/data/pictures/0/61610/f00b07c175ac3bbafd8506f7222fe07d.jpg",
                  "https://b.zmtcdn.com/data/pictures/0/61610/f00b07c175ac3bbafd8506f7222fe07d.jpg",
                  "https://b.zmtcdn.com/data/pictures/0/61610/f00b07c175ac3bbafd8506f7222fe07d.jpg",
                  "https://b.zmtcdn.com/data/pictures/0/61610/f00b07c175ac3bbafd8506f7222fe07d.jpg",
              ]} />
        </div>
        </>
    );
};

export default RestaurantLayout;
