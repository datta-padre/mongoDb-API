import mongoose from "mongoose";

const connectDB = async()=>{
    try{
        await mongoose.connect(
            "mongodb+srv://dattapadre357_db_user:cohot123@cohotcluster.upiicw1.mongodb.net/"
        )

        console.log("MongoDB connected successfully");

    } catch (err) {
        console.error("Error connecting to MongoDB:", err);
        process.exit(1);
    }
 
}

export default connectDB;