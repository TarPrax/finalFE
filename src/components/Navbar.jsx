import { useSelector } from "react-redux";
import store from "../Utilis/Store";
import axios from "axios";
import { removeUser } from "../Utilis/Slices/Slice";
import { useNavigate } from "react-router-dom";
import { useState, useRef, useEffect } from "react";
import { endpoint } from "../endpoint";
const Navbar = () => {
  const navigate = useNavigate();
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);

  const logout = () => {
    const logoutUser = async () => {
      try {
        const userLog = await axios.post(`${endpoint}/logout`, {}, { withCredentials: true });
        if (userLog) {
          store.dispatch(removeUser());
          console.log("User logged out successfully");
          return navigate("/login");
        }
      } catch (error) {
        console.log("Logout error:", error);
      }
    };
    logoutUser();
  };

  const user = useSelector((store) => store.user);
  
  

  // Close dropdown if clicked outside

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setDropdownOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <>
      <div className="navbar bg-base-100 shadow-sm">
        <div className="flex-1">
          <a className="btn btn-ghost text-xl m-5">Asset-Tracking🤖</a>
        </div>
<button className="btn btn-ghost btn-sm m-2" onClick={() => navigate("/signup")}>Signup</button>
        {user?.currentUser?.firstName ? (
          <button className="btn btn-ghost btn-sm m-2" onClick={logout}>Logout</button>
        ) : (
          <button className="btn btn-ghost btn-sm m-2" onClick={() => navigate("/login")}>Login</button>
        )}

        {/* Profile Dropdown */}
        <div className="relative w-10 m-5" ref={dropdownRef}>
          <p>{user?.currentUser?.firstName}</p>
          <img
            alt="User"
            src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
            className="w-10 h-10 rounded-full cursor-pointer border"
            onClick={() => setDropdownOpen(!dropdownOpen)}
          />
          {dropdownOpen && (
            <div className="absolute right-0 mt-2 w-44 bg-gray-800 text-white border border-gray-700 rounded-md shadow-lg z-50">
              <button
                onClick={() => {
                  setDropdownOpen(false);
                  navigate("/feed");
                }}
                className="block w-full px-4 py-2 text-left hover:bg-gray-700 hover:text-blue-400"
              >
                Connections
              </button>
              <button
                onClick={() => {
                  setDropdownOpen(false);
                  navigate("/requests");
                }}
                className="block w-full px-4 py-2 text-left hover:bg-gray-700 hover:text-blue-400"
              >
                Feed
              </button>

<button
                onClick={() => {
                  setDropdownOpen(false);
                  navigate("/review");
                }}
                className="block w-full px-4 py-2 text-left hover:bg-gray-700 hover:text-blue-400"
              >
                Review
              </button>

              <button
                onClick={() => {
                  setDropdownOpen(false);
                  navigate("/user/edit");
                }}
                className="block w-full px-4 py-2 text-left hover:bg-gray-700 hover:text-blue-400"
              >
                Change Profile
              </button>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default Navbar;