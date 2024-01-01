import { useNavigate } from "react-router-dom";
import "./NavBar.css"


const NavBar = () => {
    const navData = ["Home", "Product", "About us", "Contact us", "Blogs"];
         const navigate=useNavigate();
    const handleNavMenu = (value) => {
        console.log(value);
      switch (value.target.innerHTML) {
        case "Home":
            navigate("/")
          console.log("home is clicked");
          break;
          case "Product":
            navigate("/product is Clicked")
            break;
        case "About us":
            navigate("/about-us")
          console.log("About us is clicked");
          break;
        case "Contact us":
            navigate("/Contact Us")
          console.log("contact us is clicked");
          break;
          case "Blogs":
            navigate("/blogs")
          console.log("blogs is clicked");
          break;
        default:
          break;
      }
    };
  
    return (
      <div className="container">
        {navData?.map((item, id) => {
          return <p onClick={(value) => handleNavMenu(value)}>{item}</p>;
        })}
      </div>
    );
  };
  export default NavBar;