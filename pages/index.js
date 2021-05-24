import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Link from "next/link"
import Typography from '@material-ui/core/Typography';
import baseURL from "../helpers/baseURL"

const Home = ({products}) =>{

  const productList = products.map(product=>{
    return(
      <Card className="card_i" key={product._id}>
       <CardActionArea>
         <CardMedia
         style={{height:"190px"}}
           image={product.imageUrl}
           title={product.name}
         />
         <CardContent>
           <Typography gutterBottom variant="h5" component="h2">
             {product.name}
           </Typography>
         <Typography variant="body2" color="textSecondary" component="p">
             Price ${product.price}
           </Typography>
         </CardContent>
       </CardActionArea>
       <CardActions>
        <Link href="/product/[pid]" as={`/product/${product._id}`}><a><Button  size="small" color="primary">
            View Product
         </Button></a></Link> 
       </CardActions>
     </Card>
     
    )
  })
  return (
    <div className="card_main">
     {productList}
    </div>
  )
}

//Network request for fetching the data from the Server
export async function getStaticProps(){
  const res = await fetch(`${baseURL}/api/products`)
  const data = await res.json();
  return{
    props:{
      products:data
    }
  }
}

export default Home;