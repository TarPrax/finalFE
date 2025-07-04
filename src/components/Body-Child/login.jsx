import { useState } from "react";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { addUser, removeUser } from "../../Utilis/Slices/Slice";
import { useNavigate } from "react-router-dom";
import { endpoint } from "../../endpoint"; // Adjust the import path as necessary

const Login = () => {
const navigate =useNavigate()
  const [emailId, setEmailId] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const handelLogin = async (e) => {
    e.preventDefault();
    console.log("hit");
    try {
      const res = await axios.post(`${endpoint}/login`, {
        emailId,
        password,
      },{withCredentials: true});
    

      dispatch(addUser(res.data));
      return navigate("/requests");
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div className="flex align-center justify-center">
      <div className="card card-border bg-base-400 w-96">
        <div className="card-body m-auto p-auto">
          <h2 className="card-title">Login Details</h2>
          <p></p>
          <div className="w-full max-w-sm mx-auto p-4 bg-base-200 rounded-lg shadow-md">
            <form className="form-control space-y-4">
              <label className="label">
                <span className="label-text">Email:{emailId}</span>
              </label>
              <input
                type="email"
                placeholder="Enter your email"
                className="input input-bordered w-full"
                value={emailId}
                onChange={(e) => setEmailId(e.target.value)}
                required
              />

              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type="password"
                placeholder="Enter your password"
                className="input input-bordered w-full"
                value={password}
                required
                onChange={(e) => setPassword(e.target.value)}
              />

              <button
                type="submit"
                className="btn btn-primary mt-4"
                onClick={handelLogin}
              >
                Login
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
