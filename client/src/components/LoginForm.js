import React, { useState } from "react";
import { TextField, Button, Grid, Typography, Paper, Avatar, Link } from '@material-ui/core'
import LockOutlinedIcon from '@material-ui/icons/LockOutlined'
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';

function LoginForm({Login, error}) {
    const [details, setDetails] = useState({name:"", email:"", password:""})

    const submitHandler = e => {
        e.preventDefault();

        Login(details)

    }


  const paperStyle={padding :20,height:'70vh',width:280, margin:"80px auto"}
  const btnstyle={margin:'8px 0'}
  const avatarStyle={backgroundColor:"#00ACC1"}

    return (
        <Grid>
            <Paper elevation={10} style={paperStyle}>
        <form className="login" onSubmit={submitHandler}>
        <Grid align='center'>
        <Avatar style={avatarStyle}><LockOutlinedIcon style={{ backgroundColor: "#00ACC1"}}/></Avatar>
        
        <Typography>Login</Typography>
        </Grid>
            <div className="inner">
                {(error !== "") ? ( <div className="error">{error}</div>) : ""}
                <div className="form-group">
                    <label htmlFor="name">Username:</label>
                    <TextField variant="standard"  type="text" name="name" id="standard-basic" onChange={e => setDetails({...details, name: e.target.value})} value={details.name} fullWidth required/>
                </div>
                <div className="form-group">
                    <label htmlFor="email">Email:</label>
                    <TextField variant="standard"  type="email" name="email" id="email" onChange={e => setDetails({...details, email: e.target.value})} value={details.email} fullWidth required/>
                </div>
                <div className="form-group">
                    <label htmlFor="password">Password:</label>
                    <TextField  variant="standard"  type="password" name="password" id="password" onChange={e => setDetails({...details, password: e.target.value})} value={details.password} fullWidth required/>
                </div>
                <FormControlLabel
                    control={
                    <Checkbox
                        name="checkedB"
                        style={{ color: "#00ACC1"}}
                    />
                    }
                    label="Remember me"
                 />
                <Button type="submit" style={{ backgroundColor: "#00ACC1", color: '#FAFAFA', btnstyle  }} fullWidth>Login</Button>
            </div>
        </form>
        </Paper>
        </Grid>
    )
}

export default LoginForm