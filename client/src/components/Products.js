import React from 'react'
import {Grid} from '@material-ui/core'
import Product from './Product'
import useStyles from './ProductStyles'

// const products = [
//     {id: 1, name: 'Keyboard', description: 'Mechanical keyboard', price:"$50", image: 'https://images.unsplash.com/photo-1613332752222-129f41f9e5db?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTh8fG1lY2hhbmljYWwlMjBrZXlib2FyZHxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60'},
//     {id: 2, name: 'Mouse', description: 'Bluetooth mouse', price: "$15", image: 'https://images.unsplash.com/photo-1605773527852-c546a8584ea3?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8bW91c2V8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60'}
// ]

function Products({products}) {
    const classes = useStyles()

    return (
        <main className ={classes.content}>
            <div className ={classes.toolbar}/>
            <Grid container justify="center" spacing ={4}>
                {products.map ((product)=> (
                    <Grid item key={product.id} xs={12} sm={6} md={4} lg={3}>
                        <Product product={product}/>
                    </Grid>
                ))}
            </Grid>
        </main>
    )
}

export default Products
