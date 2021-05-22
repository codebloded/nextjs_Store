import { AppBar, Button, IconButton, Toolbar, Typography } from "@material-ui/core";
import Link from "next/link"


const Navbar = () => {
  return (
    <div>
      <AppBar position="static" >
        <Toolbar>
        
        <Link  href="/"><a style={{flexGrow:"1"}} ><Typography  variant="h6">
            News
          </Typography></a></Link>
          
          <Link href="/login"><a><Button color="default" style={{color:"white"}}>Login</Button></a></Link>
          <Link href="/signup"><a><Button color="default" style={{color:"white"}}>Sign up</Button></a></Link>
          <Link href="/create"><a><Button color="default" style={{color:"white"}}>Create</Button></a></Link>
        </Toolbar>
      </AppBar>
    </div>
  );
};
export default Navbar;
