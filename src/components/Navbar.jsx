import { useSelector } from "react-redux";
import store from "../Utilis/Store";
import axios from "axios";
import { removeUser } from "../Utilis/Slices/Slice";
import { useNavigate } from "react-router-dom";








const Navbar = () => {

const navigate = useNavigate();
const logout = () => {
  

console.log("logout function called");
const logoutUser = async () => {
const userLog = axios.post("http://localhost:4336/logout", {}, { withCredentials: true });
console.log("User logged out successfully");
if (userLog) {
  store.dispatch(removeUser());
  console.log("User logged out successfully");
  
return navigate("/login");
}
console.log("logout");
}
    logoutUser();

}



const user = useSelector((store)=>store.user)
console.log(user?.currentUser?.firstName);

  return (
    
    <>
      <div className="navbar bg-base-100 shadow-sm ">
        <div className="flex-1">
          <a className="btn btn-ghost text-xl m-5">DevTinder🤖</a>
        </div>
         {user?.currentUser?.firstName && (<button className="btn btn-ghost btn-sm m-2" onClick={logout}>Logout</button>)}
        <div className="w-10 rounded-full m-5">
          <img
            alt="Tailwind CSS Navbar component"
            src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
          />
          {user && user.currentUser && <p>{user.currentUser.firstName}</p>}
         
          
        </div>


        
      </div>
    </>
  );
};

export default Navbar;
