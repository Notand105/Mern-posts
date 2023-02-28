import mongoose from "mongoose";
import {MongoUri} from '../config.js'

const connectDb = async() =>{
  try{
    const db = await mongoose.connect(MongoUri)
    console.log('connected to', db.connection.name )
  }
  catch(error){
    console.log(error)
  }

}


export default connectDb