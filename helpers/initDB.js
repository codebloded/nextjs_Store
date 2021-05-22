import mongoose from "mongoose"

const _initDB = ()=>{
    if(mongoose.connections[0].readyState){
        console.log("Already Connected")
        return
    }

    mongoose.connect("mongodb+srv://icodeRohan:HU2YZvB7TvjI9O8a@cluster0.ecsha.mongodb.net/<dbname>?authSource=admin&replicaSet=atlas-3lqgza-shard-0&w=majority&readPreference=primary&appname=MongoDB%20Compass&retryWrites=true&ssl=true",{
        useNewUrlParser:true,
        useUnifiedTopology:true,
    })
    mongoose.connection.on('connect' , ()=>{
        console.log("Conneted to MongoDB");
    })
    mongoose.connection.on('error', (error)=>{
        console.log("Some error Occured", error)
    })
}

export default _initDB;