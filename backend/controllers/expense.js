import {ExpenseSchema} from "../models/expenseModel.js"

export const addExpense = async (req, res) => {
    const {title, amount, category, description, date} = req.body;

    const expense = ExpenseSchema({
        title, amount, category, description, date
    });

    try {
        if(!title || !category || !description || !date || !amount){
            return res.status(400).json({
                message: "Please Provide full details"
            })
        }
        if(amount <= 0 || !amount === "number"){
            return res.status(400).json({
                message: "Amount must be a positive number"
            })
        }
        await expense.save();

        res.status(200).json({
            message: "Data updated successfully"
        })
    } catch (error) {
        res.status(404).json({
            success: false,
            message: error
        })
    }
}

export const getExpense = async (req, res) =>{
    try {
        const expense = await ExpenseSchema.find().sort({createdAt: -1});
        res.status(200).json(expense);
    } catch (error) {
        res.status(400).json({
            message: "server error"
        })
    }
}
export const deleteExpense = async (req, res) =>{
    const {id} = req.params;
    ExpenseSchema.findByIdAndDelete(id).then(()=>{
        res.status(200).json({
            message: "Expense Deleted"
        })
    }).catch((err)=>{
        res.status(500).json({
            message: err
        })
    });
}