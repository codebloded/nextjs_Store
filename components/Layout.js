import Navbar from "./Navbar"


const layout = ({children})=>{
    return(
        <>
        <Navbar/>
        {children}
        </>
    )

}
export default layout;