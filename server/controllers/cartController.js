  
 import userModel from '../models/userModel.js'; 
//add productsto user cart
const addToCart = async (req, res) => {
    try {
        const { userId, itemId, size } = req.body;

        // Validate inputs
        if (!userId || !itemId || !size) {
            return res.status(400).json({ message: "Missing required fields" });
        }

        const userData = await userModel.findById(userId);
        if (!userData) {
            return res.status(404).json({ message: "User not found" });
        }

        let cartData = userData.cartData || {};

        // Update cartData with the new item and size
        if (cartData[itemId]) {
            if (cartData[itemId][size]) {
                cartData[itemId][size] += 1; // Increment quantity
            } else {
                cartData[itemId][size] = 1; // Add size
            }
        } else {
            cartData[itemId] = { [size]: 1 }; // Add new item with size
        }

        // Update the user's cart data in the database
        await userModel.findByIdAndUpdate(userId, { cartData });

        res.status(200).json({ message: "Item added to cart successfully" });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Internal server error" });
    }
};

const updateCart = async (req,res)=>{
    try {
        const {userId,itemId,size,quantity} = req.body;
        const userData = await userModel.findById(userId);
        let cartData = await userData.cartData;
        cartData[itemId][size] = quantity;

        
        await userModel.findByIdAndUpdate(userId,{cartData});
        res.status(200).json({message:"Cart updated successfully"});


        
    } catch (error) {
        res.status(500).json({message:"Internal server error"});
        
    }
    
}
const getCart = async (req,res)=>{

    try {
        const {userId} = req.body;
        const userData = await userModel.findById(userId);
        const cartData = await userData.cartData;
        res.status(200).json({cartData});
    } catch (error) {
        res.status(500).json({message:"Internal server error"});
        
    }
    
}

export {addToCart,updateCart,getCart};