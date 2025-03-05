import mongoose,{Schema} from "mongoose";
import bcrypt from "bcrypt"

const userSchema = new Schema(
    {
        fullname:{
            type:String,
            required:true,
            unique:true,
            lowercase:true,
            index:true,
            trim:true
        },
        email:{
            type:String,
            required:true,
            trim:true,
            lowercase:true,
            unique:true,
        },
        password:{
            type:String,
            required:[true,'Password is required'],
        },
        cart:{
            type:Array,
            default:[]
        },
        orders:{
            type:Array,
            default:[]
        },
        isAdmin:{
            type:Boolean,
        },
        contactNo:{
            type:Number,
        },
        picture:{
            type:String,
        }

    },{timestamps:true}
)

export const User = mongoose.model("User",userSchema)