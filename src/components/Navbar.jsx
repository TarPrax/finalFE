import { useSelector } from "react-redux";
import store from "../Utilis/Store";
const Navbar = () => {
const user = useSelector((store)=>store.user)
console.log(user?.currentUser?.firstName);

  return (
    <>
      <div className="navbar bg-base-100 shadow-sm ">
        <div className="flex-1">
          <a className="btn btn-ghost text-xl m-5">DevTinder🤖</a>
        </div>
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
