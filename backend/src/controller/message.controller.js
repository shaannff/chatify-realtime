import Message from "../models/message.model.js";
import User from "../models/users.model.js";
import cloudinary from "../lib/cloudinary.js"

export const getAllContacts = async ( req, res)=>{
    try {
        const loggedInUserId = req.user._id
        const filteredUsers = await User.find({_id : {$ne :{loggedInUserId}}}).select("-password");

        res.status(200).json(filteredUsers)
    } catch (error) {
        console.log("Error in getAllContacts :",error)
        res.status(500).json({message :" Server error"})
    }
}

export const getMessagesByUserId = async ( req, res)=>{
    try {
        const myId =req.user._id;
        const {id:userToChat}= req.params

        const message = await Message.find({
            $or:[
                {senderId:myId, reciverId :userToChat},
                {senderId:userToChat , reciverId : myId}
            ]
        })
        res.status(200).json(message)

    } catch (error) {
        console.log("Error in getMessages controller :",error);
        res.status(500).json({message : "Internal server error"});
    }

}

export const sendMessage = async( req, res)=>{
    try {
        const {text,image}=req.body 
        const {id : reciverId}= req.params ;
        const senderId = req.user._id ;

        if(!text && !image){
          return  res.status(400).json({message:"Text or image is requerid "});
        }
        if(senderId.equals(reciverId)){
            return res.status(400).json({message:"Cannot send message to yourself "});
        }
        const reciverExists = await User.exists({_id:reciverId})
        if(!reciverExists){
            return res.status(400).json({message : " Recevier not found"});
        } 

        

        let imageUrl ;
        if(image){
            const uploadResponce = await cloudinary.uploader.upload(image);
            imageUrl = uploadResponce.secure_url;

        }
        const newMessage = new Message ({
            senderId,
            reciverId,
            text,
            image:imageUrl
        })
        await newMessage.save()

        // send message in real-time user is online with socket-io 



        res.status(200).json(newMessage)
    } catch (error) {
        console.log("Error in send Message :",error)
        res.status(500).json("Internal server error",error.message)
    }
}

export const getChatpartners = async ( req, res)=>{
    try {
        const loggeduserId = req.user._id 

        const message = await Message.find({
            $or:[
                {senderId:loggeduserId },{reciverId:loggeduserId}
            ]
        });

        const chatPartnerId =[
            ...new Set(
                 message.map(msg=>{
            msg.senderId.toString()===loggeduserId.toString()
            ?msg.reciverId.toString()
             :msg.senderId.toString() 
            }
        )   
     )
    ]
  const chatPartners = await User.find({_id:{$in : chatPartnerId}}).select("-password");
  res.status(200).json(chatPartners)

    } catch (error) {
        console.log("Error in get chat messages ",error);
        res.status(500).json({message : " internal server error"});
    }
}