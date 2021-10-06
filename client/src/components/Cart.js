import React from 'react'
import {Container, Typography, Button, Grid} from '@material-ui/core'
import useStyles from './CartStyles'
import CartItem from './CartItem'
import {Link} from 'react-router-dom'


function Cart({cart, handleUpdateCartQty, handleRemoveFromCart, handleEmptyCart}) {
    // const isEmpty = !cart.line_items.length
    const classes = useStyles()

    const EmptyCart = () => (
        <Typography variant="subtitle1">Your cart is empty. 
            <Link to="/" className={classes.link}> Start Adding Items!</Link>
        </Typography>
    )

    const FilledCart = () => (
        <div>
        <Grid container spacing={3}>
            {cart.line_items.map((item)=>(
                <Grid item xs={12} sm={4} key={item.id}>
                    <CartItem item={item} onUpdateCartQty={handleUpdateCartQty} onRemoveFromCart={handleRemoveFromCart}/>
                </Grid>
                
            ))}
        </Grid>
        <div className={classes.cardDetails}>
            <Typography variant='h5' style={{ color: "#880E4F" }}>Subtotal: {cart.subtotal.formatted_with_symbol}</Typography>
            <div>
                <Button className={classes.emptyButton} size='large' type='button' variant='contained' color='secondary' onClick={handleEmptyCart}>Clear Cart</Button>
                <Button className={classes.checkoutButton} size='large' type='button' variant='contained' style={{ backgroundColor: "#00ACC1", color: '#FAFAFA' }}>Checkout</Button>
            </div>

        </div>
        </div>
    )

    if(!cart.line_items) return 'Loading cart...'

    return (
        <div className={classes.toolbar}>
            <Typography className={classes.title} variant='h5' gutterBottom >
                Your Cart
            </Typography>
            {!cart.line_items.length ? <EmptyCart/> : <FilledCart/>}
        </div>
    )
}

export default Cart
