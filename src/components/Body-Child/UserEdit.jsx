import { useState, useEffect } from "react";
import axios from "axios";
import { useSelector } from "react-redux";
import { endpoint } from "../../endpoint"; // Adjust the import path as necessary

const UserEdit = () => {
const user = useSelector((state) => state.user);
console.log("Current user:", user?.currentUser);
const [formData, setFormData] = useState({
  firstName: "",
  lastName: "",
  age: "",
});

const handleSubmit = async (e) => {
  e.preventDefault(); 
console.log("Form submitted with data:", formData);
  try {
    const response = await axios.patch(`${endpoint}/user/${user?.currentUser?._id}`, formData, {
      withCredentials: true,
    });
    console.log("Response from server:", response.data);
    // Optionally, you can redirect or show a success message here
  } catch (error) {
    console.error("Error updating user profile:", error);
  }

}

const handleChange = (e) => {
  const { name, value } = e.target;
  setFormData((prevData) => ({
    ...prevData,
    [name]: value,
  }));
}
return (
<>
<h1 className="text-2xl font-bold mb-4 m-auto">Edit User Profile</h1>
<form className="max-w-md mx-auto bg-base-200 p-6 rounded-lg shadow-md" onSubmit={handleSubmit}> 
<label className="block mb-4">
  <span className="text-gray-700"> First Name:</span>   
<input 
type="text"
name="firstName"
value={formData.firstName}
onChange={handleChange}
required
className="input input-bordered w-full mt-1"

/>


  </label>
<label className="block mb-4">
  <span className="text-gray-700"> Last Name:</span>   
<input 
type="text"
name="lastName"
value={formData.lastName}
onChange={handleChange}
required
className="input input-bordered w-full mt-1"

/>


  </label>

<label className="block mb-4">
  <span className="text-gray-700"> Age :</span>   
<input 
type="text"
name="age"
value={formData.age }
onChange={handleChange}
required
className="input input-bordered w-full mt-1"

/>


  </label>

<button type="submit" className="btn btn-primary w-full">
        Submit
      </button>
</form>


</>
);
}
export default UserEdit;
