import React from 'react'
import {AppBar, Toolbar, IconButton, Badge, MenuItem, Menu, Typography} from '@material-ui/core'
import {ShoppingCart} from '@material-ui/icons'
import useStyles from './NavbarStyles'



function Navbar({totalItems}) {
    const classes = useStyles()

    return (
        <>
            <AppBar position="fixed" className={classes.appBar} color='inherit'>
                <Toolbar>
                    <Typography variant='h6' className={classes.title} color='inherit'>
                        <img src='https://media.discordapp.net/attachments/887887430475186176/894670982525112320/image0.png' alt='dev shop' height='25px' className={classes.image}/>
                        DevShop
                    </Typography>
                        <div className={classes.grow}/>
                        <div className={classes.button}>
                            <IconButton aria-label='Show cart items' color='inherit'>
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
