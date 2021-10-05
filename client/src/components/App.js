import './App.css';
import Products from './Products'
import Navbar from './Navbar'
import {commerce} from './commerce'
import {useState, useEffect} from 'react'




function App() {
  const [products, setProducts] = useState([])

  const fetchProducts = async () => {
    const { data } = await commerce.products.list()
    setProducts(data)
  }

  useEffect(()=>{
    fetchProducts()
  }, [])

 

  return (
    <div>
      <Navbar/>
      <Products products={products}/>
    </div>
  );
}

export default App;
