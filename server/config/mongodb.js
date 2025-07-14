import mongoose from "mongoose";

const connectDB = async ()=> {
    mongoose.connection.on('connected', ()=> {
        console.log("Database connected")
    }) // connection event
    await mongoose.connect(`${process.env.MONGODB_URI}/ArtiFlow`)
}

export default connectDB