import mongoose,{models} from "mongoose"

const productSchema = mongoose.Schema({
    name:{
        type:String,
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
    imageUrl:{
        type:String,
        require:true
    }
})

export default  mongoose.models.product || mongoose.model('product',productSchema)