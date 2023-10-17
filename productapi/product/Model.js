const{Schema,model}=require('mongoose')
const productschema=new Schema(
{
title:{ 
type:String,
unique:true,
require:true
},

price:{ 
    type:Number,
    require:true
    },

description:{ 
    type:String,
    require:true
    },
    category:{ 
        type:String,
        unique:true,
        require:true
        },
        image:{ 
            type:String,
            require:true
            }
}

)
const productcategoryy=model('producatcategory',productschema)
module.exports=productcategoryy