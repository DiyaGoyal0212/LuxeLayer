import {v2 as cloudinary} from 'cloudinary';
import productModel from '../models/productModel.js';

const addProduct = async(req,res) =>{
    try{
        const {name,description,price,category,subCategory,sizes,bestseller} = req.body;
        const image1 = req.files.image1 && req.files.image1[0];
        const image2 = req.files.image2 && req.files.image2[0];
        const image3 = req.files.image3 && req.files.image3[0];
        const image4 = req.files.image4 && req.files.image4[0];

        const images = [image1,image2,image3,image4].filter((item) => item !== undefined); 

        let imagesUrl = await Promise.all(
            images.map(async (item) =>{
                let result  = await cloudinary.uploader.upload(item.path,{resource_type : 'image'});
                return result.secure_url;
            })
        )

        const productData = {
            name,
            description,
            price: Number(price),
            category,
            subCategory,
            bestseller: bestseller === "true" ? true : false ,
            sizes: JSON.parse(sizes),//array cant be sedn deirectly
            image : imagesUrl,
            date: Date.now(),
           
        }

        const product = new productModel(productData);
        await product.save();

        res.json({success : true, message : "Product added successfully"});


    }catch(err){

        res.json({success : false, message :err.message});

    }

}

const listProducts = async(req,res) =>{
    
}

const removeProduct = async(req,res) =>{
    
}

const singleProduct = async(req,res) =>{
    
}

export {addProduct,listProducts,removeProduct,singleProduct};