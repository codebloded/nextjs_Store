import { Button, Paper, Snackbar, TextField } from "@material-ui/core"
import { useState } from "react"
import baseUrl from "../helpers/baseURL";
function Create() {
    const[name , setName] = useState("")
    const [price, setPrice] = useState(0)
    const [media, setMediaUrl] = useState("")
    const [description, setDescription] = useState("")
  
      
    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log( media)
       const imageUrl = await uploadImage();
        const res = await fetch(`${baseUrl}/api/products`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                name,
                price,
                description,
                imageUrl,
            })
        })
        const res2 = await res.json()
        if(res2.error) {
            alert("Please add all feilds")
        }else{
            console.log(res2)
        }
    }
    const uploadImage = async ()=>{
        const data = new FormData();
        data.append("file",media);
        data.append("upload_preset","storenext")
        data.append("cloud_name","nextstore")
        const res = await fetch("https://api.cloudinary.com/v1_1/nextstore/image/upload",{
            method:"POST",
            body:data
        })
        const res2 = await res.json();
        console.log(res2)
        return res2.url
    }

    return (
        <div>
            <h1>Add Product</h1>
            <Paper className="authCard">

            <form className="form" onSubmit={(e) => handleSubmit(e)}>
                <TextField className="text" id="standard-basic" onChange={(e) => setName(e.target.value)} label="Product name" />
                <TextField className="text" id="standard-basic" type="number" onChange={(e) => setPrice(e.target.value)} label="Price" />
                <TextField id="standard-basic" type="file" className="text" accept="image/*" onChange={(e) => setMediaUrl(e.target.files[0])} label="Image" />
                <TextField id="standard-basic" className="text" onChange={(e) => setDescription(e.target.value)} label="Description" />
                <Button variant="contained" color="primary" type="submit">Add Product</Button>
            </form>
            </Paper>
        </div>

    )
}

export default Create