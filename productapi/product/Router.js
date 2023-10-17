const app = require('express')

const router = app.Router();

const { getallproduct, getproductbyid, createproduct, updateproduct, deleteproduct }=require('./Controller')


router.get('/getallproduct',getallproduct)
router.get('/getproductbyid',getproductbyid)
router.post('/createproduct',createproduct)
router.put('/updateproduct',updateproduct)
router.delete('/deleteproduct',deleteproduct)

  module.exports=router