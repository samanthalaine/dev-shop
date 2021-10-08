import React from 'react'
import {AppBar, Toolbar, IconButton, Badge, MenuItem, Menu, Typography} from '@material-ui/core'
import {ShoppingCart} from '@material-ui/icons'
import useStyles from './NavbarStyles'
import { Link } from 'react-router-dom'




function Navbar({totalItems}) {
    const classes = useStyles()

    return (
        <>
            <AppBar style={{ background: "#00ACC1" }} position="fixed" className={classes.appBar} color='inherit'>
                <Toolbar>
                    <Typography component={Link} to="/"  variant='h6' className={classes.title} style={{ color: "#FAFAFA" }}>
                        <img src='https://media.discordapp.net/attachments/887887430475186176/895153870706196500/image0.png' alt='dev shop' height='25px' className={classes.image}/>
                        DevShop
                    </Typography>
                        <div className={classes.grow}/>
                        <div className={classes.button}>
                        <IconButton component={Link} to="/login" aria-label='login' style={{ color: "#FAFAFA" }}>
                              <h6>Login</h6>
                            </IconButton>
                            
                            <IconButton component={Link} to="/cart" aria-label='Show cart items' style={{ color: "#FAFAFA" }}>
                                <Badge badgeContent={totalItems} color='secondary'>
                                    <ShoppingCart/>
                                </Badge>
                            </IconButton>
                        </div>
                </Toolbar>
            </AppBar>
            
        </>
    )
}

export default Navbar
