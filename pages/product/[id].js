import { Button, Modal, TextField, Typography } from "@material-ui/core";
import {useRouter} from "next/router"
import { useState } from "react";
import baseURL from "../../helpers/baseURL";
const Product = ({product})=>{
    const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
    const router = useRouter();
    if(router.isFallback){
        return <h5>Loading...</h5>
    }
    //Network Requests
    const deleteProduct = async ()=>{
        const res = await fetch(`${baseURL}/api/product/${product._id}`,{
            method:"DELETE"
        })
        router.push("/")
        await res.json();
}
    return(
        <div className="main-product">
            <img src={product.imageUrl} className="imgx" />
            <Typography  gutterBottom variant="h6" component="h1">
                {product.description}
            </Typography>

            <div style={{display:"flex"}}>
                <TextField placeholder="Quantity" style={{marginRight:"10px"}} type="number"/>
                <Button variant="contained" color="primary">ADD</Button>
            </div>

            <Typography variant="h6" component="h1">
                Price ${product.price}
           </Typography>

           <Button onClick={()=>deleteProduct()} variant="contained" color="secondary" >Delete</Button>
           <Modal
            open={open}
            onClose={handleClose}
            aria-labelledby="simple-modal-title"
            aria-describedby="simple-modal-description"
      >
      </Modal>

        </div>

    )
}


export async function getStaticProps({params:{id}}){
    const res = await fetch(`${baseURL}/api/product/${id}`)
    const  data = await res.json();
    return{
        props:{
            product:data
        }
    }
}

export function getStaticPaths(){
    return{
        paths:[
            {params: {id:"60a94f4b600ce4c202828031"}}
        ],
        fallback:true
    }
}



export default Product;