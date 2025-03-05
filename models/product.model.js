import mongoose,{Schema} from "mongoose";

const productSchema = new Schema(
    {
        productname:{
            type:String,
        },
        image:{
            type:String,
        },
        price:{
            type:Number
        },
        discount:{
            type:Number,
            default:0,
        },
        bgcolor:{
            type:String
        },
        panelcolor:{
            type:String
        },
        textcolor:{
            type:String
        },
    },{timestamps:true}
)

export const Product = mongoose.model("Product",productSchema)