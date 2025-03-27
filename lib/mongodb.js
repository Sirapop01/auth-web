import  mongoose  from "mongoose";
import dotenv from 'dotenv';
dotenv.config();

export const connectMongoDB = async () =>{
    try{
        await mongoose.connect(process.env.MONGODB_URI);
        console.log("Connect to MongoDB");
    }catch(error){
        console.log('Error connecting to MongoDB: ', error);
    }
}