import React from 'react';

const MenuCollection = (props) => {
    return (
        <>
            <div className="w-full h-full md:w-32 md:w-48 flex flex-col ">
                <div className="w-full h-fulloverflow-hidden rounded-lg">
                    <img src={props.image} alt="menu" className="w-full h-full rounded-lg transform transition duration-400 hover:scale-110" />
                </div>
                <div>
                    <strong className="text-gray-800">{props.menuTitle}</strong>
                    <p className="text-gray-500">{props.pages} Pages</p>
                </div>
            </div>
        </>
    );
};

export default MenuCollection;
