import mongoose from "mongoose";

export const connectDB = async () => {
    try {
        await mongoose.connect('mongodb+srv://najasneju:najas@cluster0.utf8d.mongodb.net/blog-app-next')
        console.log("connected to MongoDB")
    } catch (error) {
      console.log(`Database error: ${error.message}`);
        
    }
}