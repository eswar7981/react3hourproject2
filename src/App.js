import AddItem from './Components/Items/AddItem';
import ItemList from './Components/Items/ItemList';
import Header from './Components/header/Header';
import logo from './logo.svg';
import Portal from './Components/Portal/Portal';
import CartProvider from './Components/Store/CartProvider';
import { useState } from 'react';

function App() {

  const [cartButPres,setCartButPres]=useState(false)
 
  const openCart=()=>{
    console.log("hii")
    setCartButPres(true)
  }

  const closeCart=()=>{
    setCartButPres(false)
  }

  return (
    <>
    <CartProvider>
   <Header openCart1={openCart} />
   {cartButPres && <Portal closeCart={closeCart} />}
   <AddItem></AddItem>
   <ItemList></ItemList>
   </CartProvider>
    </>
  );
}

export default App;
