import mongoose from 'mongoose'
import { ENV } from './env.js'

export const connectDB = async()=>{

    try {
        const {MONGO_URL}=ENV 
        if(!MONGO_URL){
            throw new Error ('MONGO URL is not connenected')
        }
        const conn = await mongoose.connect(process.env.MONGO_URL)
        console.log('db connected :',conn.connection.host)
    } catch (error) {
        console.error('error connection to MONGODB',error)
        
    }
}