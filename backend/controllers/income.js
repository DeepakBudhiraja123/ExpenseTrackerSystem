import {IncomeSchema} from "../models/incomeModel.js"

export const addIncome = async (req, res) => {
    const {title, amount, category, description, date} = req.body;

    const income = IncomeSchema({
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
        await income.save();

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

export const getIncome = async (req, res) =>{
    try {
        const incomes = await IncomeSchema.find().sort({createdAt: -1});
        res.status(200).json(incomes);
    } catch (error) {
        res.status(400).json({
            message: "server error"
        })
    }
}
export const deleteIncome = async (req, res) =>{
    const {id} = req.params;
    
    IncomeSchema.findByIdAndDelete(id).then(()=>{
        res.status(200).json({
            message: "Income Deleted"
        })
    }).catch((err)=>{
        res.status(500).json({
            message: err
        })
    });
}