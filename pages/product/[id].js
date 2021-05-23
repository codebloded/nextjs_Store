import {useRouter} from "next/router"
import baseURL from "../../helpers/baseURL";
const Product = ({product})=>{
    const router = useRouter();
    if(router.isFallback){
        return <h5>Loading...</h5>
    }
    return(
        <div>
            <h1>{product.name}</h1>
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