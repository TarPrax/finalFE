import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addUser, removeUser } from "../../Utilis/Slices/Slice";

const Signup = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    emailId: "",
    age: "",
    gender: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post(
  "http://localhost:4336/signup",
  {
    firstName: formData.firstName,
    lastName: formData.lastName,
    emailId: formData.emailId,
    age: formData.age,
    password: formData.password,
  },
  {
    withCredentials: true, // This goes in the third argument
  }
);

    console.log(res.data);

      alert("Signup successful!");
      navigate("/requests");
    } catch (error) {
      console.error("Error submitting form:", error);
      alert("Submission failed.");
    }
  };

  return (
    <div className="min-h-screen bg-base-200 flex items-center justify-center">
      <form
        onSubmit={handleSubmit}
        className="card w-full max-w-md shadow-2xl bg-base-100 p-8"
      >
        <h2 className="text-2xl font-bold mb-6 text-center">Signup</h2>

        <div className="form-control mb-4">
          <label className="label">
            <span className="label-text">First Name</span>
          </label>
          <input
            type="text"
            name="firstName"
            className="input input-bordered"
            value={formData.firstName}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-control mb-4">
          <label className="label">
            <span className="label-text">Last Name</span>
          </label>
          <input
            type="text"
            name="lastName"
            className="input input-bordered"
            value={formData.lastName}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-control mb-4">
          <label className="label">
            <span className="label-text">Email ID</span>
          </label>
          <input
            type="email"
            name="emailId"
            className="input input-bordered"
            value={formData.emailId}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-control mb-4">
          <label className="label">
            <span className="label-text">Age</span>
          </label>
          <input
            type="number"
            name="age"
            className="input input-bordered"
            value={formData.age}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-control mb-4">
          <label className="label">
            <span className="label-text">Gender</span>
          </label>
          <select
            name="gender"
            className="select select-bordered"
            value={formData.gender}
            onChange={handleChange}
            required
          >
            <option value="" disabled>Select gender</option>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
            <option value="Other">Other</option>
          </select>
        </div>

        <div className="form-control mb-6">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input
            type="password"
            name="password"
            className="input input-bordered"
            value={formData.password}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-control">
          <button type="submit" className="btn btn-primary">Submit</button>
        </div>
      </form>
    </div>
  );
};

export default Signup;
