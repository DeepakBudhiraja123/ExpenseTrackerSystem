import mongoose from "mongoose";

const incomeSchema = new mongoose.Schema({
    title:{
        type: String,
        required: true,
        trim: true,
        maxLength: 50
    },
    amount: {
        type: Number,
        required: true,
        maxLength: 20,
        trim: true
    },
    type: {
        type: String,
        default: "income"
    },
    date: {
        type: Date,
        required: true
    },
    category:{
        type: String,
        required: true
    },
    description: {
        type: String, 
        required: true,
        maxLength: 60
    }
}, {
    timestamps: true
});

export const IncomeSchema = mongoose.model("Income", incomeSchema);