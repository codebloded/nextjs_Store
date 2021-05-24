import { Button, Paper, TextField, Typography } from "@material-ui/core";
import VpnKeyIcon from '@material-ui/icons/VpnKey';
import Link from "next/link"
function Login() {
    return (
        <div className="">
            <Paper className="form authCard ">
            <h1>Login</h1>
            <TextField className="text" id="standard-basic"  type="email" label="Email" />
            <TextField className="text" id="standard-basic"  type="password" label="Password" />
            <Button style={{marginTop:"10px"}} variant="contained" endIcon={<VpnKeyIcon/>} color="primary">Login</Button>
            <Link href="/signup"><a><Typography style={{marginTop:"10px"}} variant='subtitle2' component="h3">Don't have any account ?</Typography></a></Link>
            </Paper>
        </div>
    )
}

export default Login