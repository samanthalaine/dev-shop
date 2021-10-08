import './App.css';
import Products from './Products'
import Navbar from './Navbar'
import {commerce} from './commerce'
import {useState, useEffect} from 'react'
import Cart from './Cart'
import {BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Login from './Login'
import SignUp from './Signup'
import Checkout from './Checkout'




function App() {
  const [products, setProducts] = useState([])
  const [cart, setCart] = useState({})

  const [order, setOrder] = useState({});
  const [errorMessage, setErrorMessage] = useState('');


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

  const refreshCart = async () => {
    const newCart = await commerce.cart.refresh();

    setCart(newCart);
  };

  const handleCaptureCheckout = async (checkoutTokenId, newOrder) => {
    try {
      const incomingOrder = await commerce.checkout.capture(checkoutTokenId, newOrder);

      setOrder(incomingOrder);

      refreshCart();
    } catch (error) {
      setErrorMessage(error.data.error.message);
    }
  };


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
        <Route exact path="/login">
          <Login  />
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
