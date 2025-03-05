import mongoose,{Schema} from "mongoose";

const ownerSchema = new Schema(
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
        picture:{
            type:String,
        },
        products:{
            type:Array,
            default:[],
        },
        gstin:{
            type:String
        }

    },{timestamps:true}
)


export const Owner = mongoose.model("Owner",ownerSchema)