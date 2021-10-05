import React from 'react'
import {Container, Typography, Button, Grid} from '@material-ui/core'
import useStyles from './CartStyles'


function Cart({cart}) {
    // const isEmpty = !cart.line_items.length
    const classes = useStyles()

    const EmptyCart = () => (
        <Typography variant="subtitle1">Your cart is empty! Start Adding Items.</Typography>
    )

    const FilledCart = () => (
        <>
        <Grid container spacing={3}>
            {cart.line_items.map((item)=>(
                <Grid item xs={12} sm={4} key={item.id}>
                    <div>{item.name}</div>
                </Grid>
                
            ))}
        </Grid>
        <div className={classes.cardDetails}>
            <Typography variant='h5'>Subtotal: {cart.subtotal.formatted_with_symbol}</Typography>
            <div>
                <Button className={classes.emptyButton} size='large' type='button' variant='contained' color='secondary'>Clear Cart</Button>
                <Button className={classes.checkoutButton} size='large' type='button' variant='contained' color='primary'>Checkout</Button>
            </div>

        </div>
        </>
    )

    if(!cart.line_items) return 'Loading cart...'

    return (
        <div className={classes.toolbar}>
            <Typography className={classes.title} variant='h4'>
                Your Cart
            </Typography>
            {!cart.line_items.length ? <EmptyCart/> : <FilledCart/>}
        </div>
    )
}

export default Cart
