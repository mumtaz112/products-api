const { query } = require('express')
const productt= require('./Model')
const {connect}=require('mongoose')
require('dotenv').config()
const getallproduct=async(req, res) => {
  await connect(process.env.MONGO_URL)
  try {
    const getallprodcts=await productt.find()
    res.json({
      productt:getallprodcts
    })
  } 
  catch (err) {
    res.json({
      message:err.message
    })
    
  }
  }
  const getproductbyid=async(req, res) => {
    try {
      const {_id}=req.query
    await connect(process.env.MONGO_URL)
    const getprdctbyid=await productt.findOne({_id})
   res.json({
    productt:getprdctbyid
   })
    } catch (err) {
      res.json({
        message:err.message
      })
      
    }
  }
  const createproduct=async(req, res) => {
    const {title,price,description,category,image}=req.body
    if(!title || !price || !description || !category || !image)
    {
      res.status(403).json({
        message:'Missing Field Required'
      })
    }
    else{
      try {
      
        await connect(process.env.MONGO_URL)
        const checkexisting=await productt.exists({category:category}||{title:title})
        if(checkexisting)
        {
          res.json({
            message:"Entered Field Already Exist"
          })
        }
        else{
          await productt.create({title,price,description,category,image})
          const allproduct= await productt.find();
        }
        res.json({
          message:"DB Connected",
          productt:allproduct

        })
      
      } catch (error) {
        
      }

    }
 
  }
  const updateproduct=async(req, res) => {
    const{_id,title,price,description,category,image}=req.body
    const filter = { _id };
    const update = { title,price,description,category,image };
    try {
      await connect(process.env.MONGO_URL)
      await productt.findOneAndUpdate(filter, update, {
        new: true
      }); 
      const alproduct=await productt.find()
      re.json({
      message:"Succefully Updated",
      alproduct

      })     
    } catch (error) {
      
    }
  }
  const deleteproduct=async(req, res) => {
    try {
      const{_id}=req.body
      await connect(process.env.MONGO_URL)
      const delproduct=await productt.delete({_id:_id})
      re.json({
        message:"Product Deleted Succesfully",
        productt:delproduct
      }) 
    } catch (err) {
     re.json({
      messag:err.message
     })
      
    }
    res.send('Hello World!')
  }
  module.exports={getallproduct,getproductbyid,createproduct,updateproduct,deleteproduct}