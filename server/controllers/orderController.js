import orderModel from "../models/orderModel.js";
import userModel from "../models/userModel.js";


const placeOrder = async(req,res)=>{
    try {
        const {userId,items,amount,address} = req.body;
        const orderData = {
            userId,
            items,
            address,
            amount,
            paymentMethod:'COD',
            payment:false,
            date:Date.now(),

        }

        const newOrder = new orderModel(orderData);
        await newOrder.save();

        await userModel.findByIdAndUpdate(userId,{cartData:{}})
        res.status(200).json({message:"Order Placed Successfully"})




    } catch (error) {
        console.log(error);
        res.status(500).json({message:"Something went wrong"})
        
    }

}

const placeOrderStripe = async(req,res)=>{

}

const placeOrderRazorpay = async(req,res)=>{

}
const allOrders = async(req,res)=>{

}

const userOrders = async(req,res)=>{
    try {
        const {userId} = req.body;
        const orders = await orderModel.find({userId});
        res.json({success:true,orders});



        
    } catch (error) {
        res.json({success:false,message:"Internal Server Error"})
        
    }

}

const updateStatus = async(req,res)=>{

}

export {placeOrder,placeOrderStripe,placeOrderRazorpay,allOrders,userOrders,updateStatus};