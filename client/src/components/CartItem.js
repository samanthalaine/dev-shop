import React from "react";
import {
  Typography,
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  ButtonGroup
} from "@material-ui/core";

import useStyles from "./styles"
import CartItemStyles from "./CartItemStyles";

function CartItem({ item, onUpdateCartQty, onRemoveFromCart }) {
  const classes = useStyles();

  return (
    <Card className="cart-item">
      <CardMedia image={item.image.url} alt={item.name} className={classes.media} />
      <CardContent className={classes.cardContent}>
        <Typography variant="h5">{item.name}</Typography>
        <Typography variant="h6" style={{ color: "#212121" }}>{item.line_total.formatted_with_symbol}</Typography>
      </CardContent>
      <CardActions className={classes.cardActions}>
        <div className={classes.buttons}>
        <ButtonGroup aria-label="outlined primary button group">
        <Typography style={{ color: "#00ACC1" }}>{item.quantity}</Typography>
          <Button type="button" size="small" onClick={()=> onUpdateCartQty(item.id, item.quantity - 1)}>-</Button>
          
          <Button type="button" size="small" onClick={()=> onUpdateCartQty(item.id, item.quantity + 1)}>+</Button>
          </ButtonGroup>
          
        </div>
        <Button variant="contained" type="button" color="secondary" onClick={()=>onRemoveFromCart(item.id)}>Remove</Button>
      </CardActions>
    </Card>
  );
}

export default CartItem;
