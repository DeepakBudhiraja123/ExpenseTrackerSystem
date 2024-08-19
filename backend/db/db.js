import mongoose from "mongoose";

export const db = async ()=>{
    try {
        mongoose.set('strictQuery', false);
        await mongoose.connect(process.env.MONGODB_URL);
        console.log("DB Connected");
    } catch (error) {
        console.log("Db Connection Error", error);
    }
}
