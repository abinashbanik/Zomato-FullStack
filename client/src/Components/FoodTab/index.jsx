import React from 'react';
import { RiShoppingBag3Line } from "react-icons/ri";
import { IoFastFoodOutline,IoNutritionOutline } from "react-icons/io5";
import { BiDrink } from "react-icons/bi";

const MobileTab = () => {
    return (
        <>
            <div className="lg:hidden bg-white shadow-lg p-3 fixed bottom-0 z-10 w-full flex items-center justify-between md:justify-evenly text-gray-600 border">
                <div className="flex flex-col items-center text-sm">
                    <RiShoppingBag3Line />
                    <h5 className="lext-lg">Delivery</h5>
                </div>
                <div className="flex flex-col items-center text-sm">
                    <IoFastFoodOutline />
                    <h5 className="lext-lg">Dining Out</h5>
                </div>
                <div className="flex flex-col items-center text-sm">
                    <BiDrink />
                    <h5 className="lext-lg">Night Life</h5>
                </div>
                <div className="flex flex-col items-center text-sm">
                    <IoNutritionOutline />
                    <h5 className="lext-lg">Nutrition</h5>
                </div>
            </div>
        </>
    );
};

const LargeTab =() => {
    return (
        <>
            <div className="hidden lg:flex container px-20 gap-14 mx-auto">
                <div className="flex items-center gap-3">
                    <div className="w-16 h-16 bg-gray-100 p-4 rounded-full">
                        <img 
                            src="https://b.zmtcdn.com/data/o2_assets/246bbd71fbba420d5996452be3024d351616150055.png"
                            alt="delivery"
                            className="w-full h-full "
                        />
                    </div>
                    <h3 className="text-xl text-gray-700 font-semibold">Delivery</h3>
                </div>
                <div className="flex items-center gap-3">
                    <div className="w-16 h-16 bg-gray-100 p-4 rounded-full">
                        <img 
                            src="https://b.zmtcdn.com/data/o2_assets/78d25215ff4c1299578ed36eefd5f39d1616149985.png"
                            alt="Nightlife"
                            className="w-full h-full "
                        />
                    </div>
                    <h3 className="text-xl text-gray-700 font-semibold">Nightlife</h3>
                </div>
                <div className="flex items-center gap-3">
                    <div className="w-16 h-16 bg-gray-100 p-4 rounded-full">
                        <img 
                            src="https://b.zmtcdn.com/data/o2_assets/01040767e4943c398e38e3592bb1ba8a1616150142.png"
                            alt="Dining Out"
                            className="w-full h-full "
                        />
                    </div>
                    <h3 className="text-xl text-gray-700 font-semibold">Dining Out</h3>
                </div>
                <div className="flex items-center gap-3">
                    <div className="w-16 h-16 bg-gray-100 p-4 rounded-full">
                        <img 
                            src="https://b.zmtcdn.com/data/o2_assets/54cad8274d3c3ec7129e0808a13b27c31616582882.png"
                            alt="Nutrition"
                            className="w-full h-full "
                        />
                    </div>
                    <h3 className="text-xl text-gray-700 font-semibold">Nutrition</h3>
                </div>
            </div>
        </>
    );
};

const FoodTab = () => {
    return (
        <>
            <div>
                <MobileTab />
                <LargeTab />
            </div>
        </>
    );
};

export default FoodTab;
