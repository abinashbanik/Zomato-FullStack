import express from "express";
import { RestaurantModel } from "../../database/allModels";
const Router = express.Router();
//Validation
import { ValidateRestaurantId } from "../../validation/food";
import { ValidateRestaurantCity, ValidateRestaurantSearchString } from "../../validation/restaurant";

/*
Route       /
Des         Get all restaurant details
Params      None
Access      Public
Method      GET
*/

Router.get("/", async(req,res) => {
    try{
        await ValidateRestaurantCity(req.query);
        const { city } = req.query;
        const restaurants = await RestaurantModel.find({city});
        return res.json({restaurants});
    }   catch(error) {
        return res.status(500).json({error:error.message});
    }
});
/*
Route       /
Des         Get particular restaurant details on id
Params      _id
Access      Public
Method      GET
*/
Router.get("/:_id", async(req,res) => {
    try {
        await ValidateRestaurantId(req.params);
        await ValidateRestaurantSearchString(req.body);
        const { _id } = req.params;
        const restaurant = await RestaurantModel.findOne(_id);
        if(!restaurant)
        return res.status(404).json({error: "Restaurant not found"});
        return res.json({restaurant});
    } catch (error) {
            return res.status(500).json({error:error.message});
    }
});

/*
Route       /
Des         Get particular restaurant details on search
Params      none
Body        searchstring
Access      Public
Method      GET
*/
Router.get("/search", async(req,res) =>{
    try {
        const {searchString} = req.body;
        const rstaurants = await RestaurantModel.find({
            name: {$regex: searchString, $options: "i"},
        });
    } catch (error) {
        return res.status(500).json({error:error.message});
    }
});

export default Router;