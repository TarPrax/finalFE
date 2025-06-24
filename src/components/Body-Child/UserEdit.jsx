import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import axios from "axios";

const EditUser = () => {
  const currentUser = useSelector((state) => state.user?.currentUser);

   console.log(currentUser?._id)
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    emailId: "",
    age: "",
    gender: "",
    password: "",
  });

  useEffect(() => {
    if (currentUser) {
      setFormData({
        firstName: currentUser.firstName || "",
        lastName: currentUser.lastName || "",
        emailId: currentUser.emailId || "",
        age: currentUser.age || "",
        gender: currentUser.gender || "",
        password: "********",
      });
    }
  }, [currentUser]);

  if (!currentUser) {
    return <div className="text-center p-8">Loading user data...</div>;
  }

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
      await axios.post(
        `http://localhost:4336/user/${currentUser._id}`,
        {
          firstName: formData.firstName,
          lastName: formData.lastName,
          age: formData.age,
        },
        { withCredentials: true }
      );
      alert("User updated successfully!");
    } catch (error) {
      console.error("Error updating user:", error);
      alert("Update failed.");
    }
  };

  return (
    <div className="min-h-screen bg-base-200 p-8 flex flex-col lg:flex-row gap-8">
      <form
        onSubmit={handleSubmit}
        className="card w-full lg:w-1/2 shadow-2xl bg-base-100 p-8"
      >
        <h2 className="text-2xl font-bold mb-6 text-center">Edit User</h2>

        {["firstName", "lastName", "age"].map((field) => (
          <div className="form-control mb-4" key={field}>
            <label className="label">
              <span className="label-text capitalize">{field}</span>
            </label>
            <input
              type={field === "age" ? "number" : "text"}
              name={field}
              className="input input-bordered"
              value={formData[field]}
              onChange={handleChange}
              required
            />
          </div>
        ))}

        <div className="form-control">
          <button type="submit" className="btn btn-primary">Update</button>
        </div>
      </form>

      <div className="w-full lg:w-1/2 card bg-base-100 shadow-2xl p-6">
        <h3 className="text-xl font-semibold mb-4">Live Preview</h3>
        <ul className="space-y-2 text-base-content">
          <li><strong>First Name:</strong> {formData.firstName}</li>
          <li><strong>Last Name:</strong> {formData.lastName}</li>
          <li><strong>Email:</strong> {formData.emailId}</li>
          <li><strong>Age:</strong> {formData.age}</li>
          <li><strong>Gender:</strong> {formData.gender}</li>
          <li><strong>Password:</strong> {formData.password}</li>
        </ul>
      </div>
    </div>
  );
};

export default EditUser;
