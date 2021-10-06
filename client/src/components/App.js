import './App.css';
import Products from './Products'
import Navbar from './Navbar'
import {commerce} from './commerce'
import {useState, useEffect} from 'react'
import Cart from './Cart'
import {BrowserRouter as Router, Switch, Route } from 'react-router-dom'




function App() {
  const [products, setProducts] = useState([])
  const [cart, setCart] = useState({})

  const fetchProducts = async () => {
    const { data } = await commerce.products.list()
    setProducts(data)
  }

  const fetchCart = async () => {
    const cart = await commerce.cart.retrieve()
    setCart(cart)
  }

  const handleAddToCart = async (productId, quantity) => {
    const item = await commerce.cart.add(productId, quantity)
    setCart(item.cart)
  }

  const handleUpdateCartQty = async (productId, quantity) => {
    const {cart} = await commerce.cart.update(productId, {quantity})

    setCart(cart)
  }

  const handleRemoveFromCart = async (productId) => {
    const {cart} = await commerce.cart.remove(productId)

    setCart(cart)
  }

  const handleEmptyCart = async () => {
    const {cart} = await commerce.cart.empty()
    setCart(cart)
  }

  useEffect(()=>{
    fetchProducts()
    fetchCart()
  }, [])

 console.log(cart.line_items)

  return (

    <Router>
    <div>
      <Navbar totalItems={cart.total_items} />
      <Switch>
        <Route exact path="/">
          <Products products={products} onAddToCart={handleAddToCart}  />
        </Route>
        <Route exact path="/cart">
          <Cart 
            cart={cart}
            handleUpdateCartQty={handleUpdateCartQty}
            handleRemoveFromCart={handleRemoveFromCart}
            handleEmptyCart={handleEmptyCart}
          />
        </Route>
        {/* <Route path="/checkout" exact>
          <Checkout cart={cart} order={order} onCaptureCheckout={handleCaptureCheckout} error={errorMessage} />
        </Route> */}
      </Switch>
    </div>
  </Router>
  );
}

export default App;
