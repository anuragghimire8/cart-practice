import React, { useState } from 'react'
import { Route,Routes, useNavigate, useSearchParams } from 'react-router-dom';
import Home from './Components/Container/Footer/Home';
import ProductDetailsPage from './Components/Container/Product/ProductDetailsPage';
import Products from './Components/Container/Product/Products';
import NavBar from './Components/NavBar';
import "./App.css"
import PageNotFound from './Components/Container/PageNotFound';


const App = () => {
           
  const originalProductList = [
    {
      name: "Cooker",
      price: 2500,
      image: "https://m.media-amazon.com/images/I/51XzoKlhEBL.jpg",
      backgroundColor: "orange",
      isLiked: true,
      count: 0,
    },
    {
      name: "Ball",
      price: 1200,
      image:
        "https://www.pngall.com/wp-content/uploads/5/Sports-Ball-Transparent.png",
      backgroundColor: "grey",
      isLiked: false,
      count: 0,
    },
    {
      name: "Keybord",
      price:200,
      image:
        "https://www.pngkey.com/png/full/429-4290320_redragon-k579-mechanical-gaming-keyboard-wired-rgb-iball.png",
      backgroundColor: "pink",
      isLiked: true,
      count: 1,
    },
    {
      name: "HeadPhone",
      price: 200,
      image:
        "https://cdn.shopify.com/s/files/1/0573/2309/4216/products/LosAngeles_SandGold_001.png?v=1650876856",
      backgroundColor: "orange",
      isLiked: false,
      count: 0,
    },
  ];
  const [role,setRole]=useState("USER")
  
    const navigate=useNavigate();



  const handleRole=(role)=>{
    localStorage.setItem('role',role);
    setRole(role)
   if (role==="ADMIN"){
    
   
    navigate('/')
   }
   if (role==="USER"){
  
    navigate('/product')
   }

  } 
  let localData=localStorage.getItem("role")
  console.log(role)
  return (
    <div className='App'>
    <NavBar/>
   
    <button onClick={()=>handleRole("USER")}>User</button>
    <button onClick={()=>handleRole("ADMIN")}>Admin</button>
    {localData}
    <Routes>
    {localData === "USER" ? (
      <Route>
        <Route path="/product" element={<Products data={originalProductList} />} />
        <Route path="product/1" element={<ProductDetailsPage />} />
      </Route>
    ) : (
      <>
        <Route path="/" element={<Home />} />
      </>
    )}

   
    <Route path="*" element={<PageNotFound />} />
  </Routes>
</div>
);
};

export default App
