import _initDB from "../../helpers/initDB";
import Product from "../../models/Product";

//Initialize the database connection
_initDB();


export default async (req,res) =>{
  switch(req.method){
    case "GET":
      await getAllProducts(req, res)
      break;
    case "POST":
      await saveProduct(req, res)
  }
}

const getAllProducts = async (req, res)=>{
  await Product.find().then(products=>{
    res.status(200).json(products)
  })
}
const saveProduct = async (req , res)=>{
  const {name , price , description, imageUrl} = req.body;
  if(!name || !price  || !description || !imageUrl)
    return res.status(422).json({error:"Please add all the Fields"})
  
  const product = await new Product({
    name,
    price,
    description,
    imageUrl,
  }).save()
  res.status(201).json(product)
}