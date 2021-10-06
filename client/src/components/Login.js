import React, { useState } from "react";
import { TextField, Button, Grid, Typography, Paper, Avatar, Link } from '@material-ui/core'
import LockOutlinedIcon from '@material-ui/icons/LockOutlined'
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';



function Login({ setUser }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    fetch("/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ username, password }),
    }).then((r) => {
      if (r.ok) {
        r.json().then((user) => setUser(user));
      }
    });
  }

  const paperStyle={padding :20,height:'70vh',width:280, margin:"20px auto"}
  const btnstyle={margin:'8px 0'}
  const avatarStyle={backgroundColor:"#00ACC1"}

  return (
    <Grid >
        <Paper elevation={10} style={paperStyle}>
      <form onSubmit={handleSubmit}>
      <Grid align='center'>
      <Avatar style={avatarStyle}><LockOutlinedIcon style={{ backgroundColor: "#00ACC1"}}/></Avatar>
        <Typography>Login</Typography>
        {/* <label htmlFor="username">Username</label> */}
        </Grid>
        <TextField

          type="text"
          id="standard-basic"
          label="Username" variant="standard"
          autoComplete="off"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          fullWidth required
        />
        {/* <label htmlFor="password">Password</label> */}
        <TextField
          type="password"
          id="standard-basic"
          label="Password" variant="standard"
          autoComplete="current-password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          style={{ color: "#00ACC1"}}
          fullWidth required
        />
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
        <Typography > Don't have an account?
                     <Link href="#" >
                        Sign Up 
                </Link>
                </Typography>
      </form>
      </Paper>
    </Grid>
  );
}

export default Login;