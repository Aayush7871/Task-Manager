import mongoose from "mongoose";
mongoose.connect('mongodb+srv://aayushraj2378_db_user:Aayush9808@cluster0.mii7ok6.mongodb.net/TaskFlow?retryWrites=true&w=majority')
    .then(() => console.log('Connection success!'))
    .catch(err => console.error('MongoDB connection error:', err));