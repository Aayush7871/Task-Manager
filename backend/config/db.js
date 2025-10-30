import mongoose from "mongoose";

export const connectDB = async () => {
    try {
        await mongoose.connect('mongodb+srv://aayushraj2378_db_user:Aayush9808@cluster0.mii7ok6.mongodb.net/TaskFlow?retryWrites=true&w=majority');
        console.log("Connected to MongoDB");
    } catch (error) {
        console.error("MongoDB connection error:", error);
        process.exit(1);
    }
}