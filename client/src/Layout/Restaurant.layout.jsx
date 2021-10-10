import React from 'react';
import { TiStarOutline } from "react-icons/ti";
import { RiDirectionLine, RiShareForwardLine } from "react-icons/ri";
import { BiBookmarkPlus } from "react-icons/bi";


//components
import RestaurantNavbar from "../Components/Navbar/restaurantNavbar";
import ImageGrid from '../Components/restaurant/ImageGrid';
import RestaurantInfo from "../Components/restaurant/RestaurantInfo";
import InfoButtons from "../Components/restaurant/InfoButtons";
import TabsContainer from '../Components/restaurant/Tabs';
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
              <RestaurantInfo 
                name="Mumbai Express" 
                restaurantRating="3.5" 
                deliveryRating="4.6" 
                cuisine="Thali, Spring Rol, Mughlai, Naan" 
                address="Agartala,Tripura " 
            />
            <div className="my-4 flex flex-wrap gap-3">
                <InfoButtons isActive>
                    <TiStarOutline /> Add Review
                </InfoButtons>
                <InfoButtons>
                    <RiDirectionLine /> Direction
                </InfoButtons>
                <InfoButtons>
                    <BiBookmarkPlus /> Bookmark
                </InfoButtons>
                <InfoButtons>
                    <RiShareForwardLine /> Share
                </InfoButtons>
            </div>
              <div className="my-4">
                <TabsContainer />
              </div>
        </div>
        </>
    );
};

export default RestaurantLayout;
