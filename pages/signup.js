import { Button, Divider, Paper, TextField, Typography } from "@material-ui/core";
import VpnKeyIcon from '@material-ui/icons/VpnKey';
import Link from "next/link"
function SignUp() {
    return (
        <div className="">
            <Paper className="form authCard ">
            <h1>SignUp</h1>
            <TextField className="text" id="standard-basic"  type="email" label="Name" />
            <TextField className="text" id="standard-basic"  type="email" label="Email" />
            <TextField className="text" id="standard-basic"  type="password" label="Password" />
            <Button style={{marginTop:"10px"}} variant="contained" endIcon={<VpnKeyIcon/>} color="primary">SignUp</Button>
            <Link href="/signup"><a><Typography style={{marginTop:"10px"}} variant='subtitle2' component="h3">Already have an account ?</Typography></a></Link>
            </Paper>
        </div>
    )
}

export default SignUp