const mongoose = require("mongoose");

const connectionstring = process.env.MONGODB_URI 

export const connectDB = async () => {
    try {
        await mongoose.connect(connectionstring);
        console.log("connected to MongoDB")
    } catch (error) {
      console.log(`Database error: ${error.message}`);
        
    }
}