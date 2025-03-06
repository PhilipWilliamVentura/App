import React, { useState } from "react";
import { accountbackground } from "../assets";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

function Signup() {
  const [startDate, setStartDate] = useState(null);

  const [formValues, setFormValues] = useState({
    email: "",
    username: "",
    password: "",
    dob: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formValues);
  };

  return (
    <div
      className="flex items-center justify-center h-screen bg-cover bg-center"
      style={{
        backgroundImage: `url(${accountbackground})`,
      }}
    >
      <div className="bg-transparent border-2 border-white/20 backdrop-blur-xl bg-grey/50 p-8 rounded-2xl shadow-lg w-96">
        <h2 className="text-white text-2xl font-semibold text-center mb-6">
          Create an Account
        </h2>
        <form onSubmit={handleSubmit} className="flex flex-col space-y-4">
          <input
            type="email"
            placeholder="Email"
            className="p-3 rounded-lg bg-gray-800 text-white outline-none focus:ring-2 focus:ring-blue-500"
            name="email"
            value={formValues.email}
            onChange={handleInputChange}
          />
          <input
            type="text"
            placeholder="Username"
            className="p-3 rounded-lg bg-gray-800 text-white outline-none focus:ring-2 focus:ring-blue-500"
            name="username"
            value={formValues.username}
            onChange={handleInputChange}
          />
          <input
            type="password"
            placeholder="Password"
            className="p-3 rounded-lg bg-gray-800 text-white outline-none focus:ring-2 focus:ring-blue-500"
            name="password"
            value={formValues.password}
            onChange={handleInputChange}
          />
          <DatePicker
            selected={startDate}
            onChange={(date) => setStartDate(date)}
            className="p-3 rounded-lg bg-gray-800 text-white outline-none focus:ring-2 focus:ring-blue-500 w-full"
            placeholderText="Select Date of Birth"
            name="dob"
          />
          <label className="flex items-center text-white">
            <input type="checkbox" className="mr-2" />
            Remember me
          </label>
          <button
            type="submit"
            className="bg-blue-600 hover:bg-blue-700 text-white font-semibold p-3 rounded-lg transition"
          >
            Create Account
          </button>
        </form>
      </div>
    </div>
  );
}

export default Signup;
