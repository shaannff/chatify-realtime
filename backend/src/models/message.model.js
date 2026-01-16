import mongoose, { Schema } from "mongoose";
import User from "./users.model.js";

const messageSchema = new Schema({
    senderId : {
        type:mongoose.Schema.ObjectId,
        ref:"User",
        required : true
    },
    reciverId : {
        type : mongoose.Schema.ObjectId,
        ref:"User",
        required : true
    },
    text:{
        type:String
    },
    image:{
        type:String
    }

},{timestamps:true})

const Message = mongoose.model("Message",messageSchema)
export default Message