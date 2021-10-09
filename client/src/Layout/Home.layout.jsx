import React from "react";

//components
import Navbar from "../Components/Navbar";

const HomeLayout = (props) => {
    return (
    <>  
        <Navbar />
        <div className="conatiner mx-auto px-4 lg:px-20 ">{props.Children}</div>
    </>
    );
};

export default HomeLayout;