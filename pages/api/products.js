import _initDB from "../../helpers/initDB";
import Product from "../../models/Product";

//Initialize the database connection
_initDB();


export default (req,res) =>{
  Product.find().then(products=>{
    res.status(200).json(products)
  })
}