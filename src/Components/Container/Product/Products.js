import { FaHeart, } from "react-icons/fa";
import { CgAdd, CgMinus } from "react-icons/cg";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const Products = (props) => {


  const navigate = useNavigate();
      const handleNavigate=(item)=>{
        navigate("/product/1",{state:{data:item}})
      }

const {data}=props;

const [product,setProduct]=useState(data);



       const handleCountValue=(action,id)=>{
        console.log(id,"id");
        const copyProduct=[...product];
      
       if (action === "minus") {
        console.log("minus icon is clicked");
        if (product[id].count !=0){
            copyProduct[id].count-=1;
            setProduct(copyProduct)
        }
      }
    if (action === "plus"){
    console.log("Plus icon is clicked")
    copyProduct[id].count+=1
    setProduct(copyProduct)

   }
  else if (action === "isliked") {
    copyProduct[id].isLiked = !copyProduct[id].isLiked;
    setProduct(copyProduct);

   
}


       }
       const [total,setTotal]=useState();


     const totalPrice=()=>{
       let sum =0;

       product.map((item,id)=>{
        return sum=sum + item?.price*item.count


       })
      
      return sum;
     }
    
 

  return (
    <div>
    <div style ={{display:"flex" , gap :"20px"}}>
    {
        product?.map((item,id)=>{
            return  <div onClick={()=>handleNavigate(item)}
            style={{
              border: "1px solid black",
              width: "200px",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              backgroundColor: item?.backgroundColor,
            }}
          >
            <img src={item?.image} alt="/" width={200} height={200} />
            <p>{item.price}</p>
            <p>{item?.name}</p>
      
            <p>
              <FaHeart  onClick={()=>handleCountValue("isliked",id)}
              style={{color:item?.isLiked === true ? "red" : "black" }}/>
            </p>
            <div style={{ display: "flex", alignItems: "center" }}>
             <button  onClick={()=>handleCountValue("minus",id)}>-</button>
              {item?.count}
              <button onClick={()=>handleCountValue("plus",id)}>+</button>
            </div>
          </div>

        })
        

    }
   
    </div>
    <table>
    <tr>
    <th>Name</th>
    <th>Price</th>
    <th>Quantity</th>
    <th>Total</th>

    </tr>
    {product?.map ((item,id)=>{
      return(
        <tr>
        <td>{item?.name}</td>
        <td>{item?.price}</td>
        <td>{item?.count}</td>
        <td>{item?.price * item?.count}</td>
        </tr>
      )

    })}
    
    <p >Total {totalPrice()}</p>
   
 
   </table>
    </div>
  );
};

export default Products;
