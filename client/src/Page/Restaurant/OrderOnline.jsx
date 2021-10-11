import React from "react";
import { AiOutlineCompass } from "react-icons/ai";
import { BiTimeFive } from "react-icons/bi";

// components
import FloatMenuBtn from "../../Components/restaurant/Order-Oline/FloatMenuBtn";
import MenuListContainer from "../../Components/restaurant/Order-Oline/MenuListContainer";
import Fooditem from "../../Components/restaurant/Order-Oline/FoodItem";
import FoodList from "../../Components/restaurant/Order-Oline/FoodList";

const OrderOnline = (props) => {
  return (
    <>
      <div className="w-full flex h-screen">
          <aside className="hidden md:block w-1/4 flex flex-col gap-3 border-r overflow-y-scroll border-gray-200 h-screen  ">
            <MenuListContainer />
            <MenuListContainer />
          
          </aside>
          <div className="w-full px-3 md:w-3/4 h-screen ">
              <div className="pl-3 mb-4">
                <h2 className="text-xl font-semibold ">Order Online </h2>
                <h4 className="flex items-center gap-2 font-light text-gray-500">
                    <AiOutlineCompass /> Live Track Your Order | <BiTimeFive /> 45 min
                </h4>
              </div>
              
              <section className="flex flex-col gap-3 h-screen md:gap-5 overflow-y-scroll">
                <FoodList 
                  title="Recommended" 
                  items={[
                    {
                      price:"1000",
                      rating:4,
                      description:"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptates voluptas, possimus voluptatem fugiat aliquid reiciendis repellat delectus magni enim iure voluptatibus magnam, cumque in aspernatur quod cum provident quia est.",
                      title:"Yummy food",
                      image:"https://b.zmtcdn.com/data/dish_photos/a71/e44cef76c977ef548ba714ed07f13a71.jpg"
                    },
                  
                  ]} 
                />                                      
              </section>
          </div>
      </div>
      <FloatMenuBtn />
    </>
  );
};

export default OrderOnline;