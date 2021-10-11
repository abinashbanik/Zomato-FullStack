import React from "react";

// components
import FloatMenuBtn from "../../Components/restaurant/Order-Oline/FloatMenuBtn";
import MenuListContainer from "../../Components/restaurant/Order-Oline/MenuListContainer";

const OrderOnline = () => {
  return (
    <>
      <div className="w-full">
          <aside className="hidden md:block w-1/4 flex flex-col gap-3 border-r overflow-y-scroll border-gray-200 h-screen  ">
            <MenuListContainer />
            <MenuListContainer />
          
          </aside>
          <div className="w-full md:w-3/4 "></div>
      </div>
      <FloatMenuBtn />
    </>
  );
};

export default OrderOnline;