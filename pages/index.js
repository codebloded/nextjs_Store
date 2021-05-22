import Link from "next/link"
const Home = (props) =>{
  return (
    <div>
      <h1>Hello next.js</h1>
      <h1>{props.message}</h1>
      <Link href="/product"><a>Go to Product page</a></Link>
    </div>
  )
}


export default Home;