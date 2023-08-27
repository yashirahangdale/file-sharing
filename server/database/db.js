import mongoose from "mongoose";


const DBConnection = async() =>{
    const DB_URL = `mongodb+srv://user:yash2428@file-sharing.yqkoewf.mongodb.net/?retryWrites=true&w=majority`;
    try{
       await mongoose.connect(DB_URL,{useNewUrlParser : true})
        console.log('Database Connectes Succesfully');
    }catch(error){
        console.log('Error while connecting to database' , error.message);
    }
}


export default DBConnection;