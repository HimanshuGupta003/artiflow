// import mongoose from "mongoose";

// const connectDB = async ()=> {
//     mongoose.connection.on('connected', ()=> {
//         console.log("Database connected")
//     }) // connection event
//     await mongoose.connect(`${process.env.MONGODB_URI}/ArtiFlow`)
// }

// export default connectDB

import mongoose from "mongoose";

const connectDB = async () => {
    try {
        // Connection event handlers
        mongoose.connection.on('connected', () => {
            console.log("MongoDB connected successfully");
        });

        mongoose.connection.on('error', (err) => {
            console.error("MongoDB connection error:", err);
        });

        mongoose.connection.on('disconnected', () => {
            console.warn("MongoDB disconnected");
        });

        // Connection options
        const options = {
            serverSelectionTimeoutMS: 5000, // 5 seconds timeout for server selection
            socketTimeoutMS: 45000, // 45 seconds socket timeout
            maxPoolSize: 10, // Maintain up to 10 socket connections
        };

        // Connect to MongoDB
        await mongoose.connect(`${process.env.MONGODB_URI}/ArtiFlow`, options);
        
        console.log("Successfully connected to MongoDB");
    } catch (error) {
        console.error("MongoDB connection failed:", error);
        process.exit(1); // Exit process with failure
    }
};

export default connectDB;