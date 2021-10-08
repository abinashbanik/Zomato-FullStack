import mongoose from "mongoose";

export default async () => {
    return mongoose.connect(process.env.MONGO_URL,{
        useNewUrlParser: true,
        // useUnitedTopology: true,
        // useCreateIndex: true,
        // useFindAndModify: true,
        // // If facing any error remove all these above settings
    });
};