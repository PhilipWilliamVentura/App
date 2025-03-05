import React, { useState } from "react";
import { accountbackground } from "../assets";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

function Signup() {
  const [startDate, setStartDate] = useState(null);
  const [fitnessLevel, setFitnessLevel] = useState("");

  const handleFitnessLevelChange = (event) => {
    setFitnessLevel(event.target.value);
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
        <form className="flex flex-col space-y-4">
          <input
            type="email"
            placeholder="Email"
            className="p-3 rounded-lg bg-gray-800 text-white outline-none focus:ring-2 focus:ring-blue-500"
          />
          <input
            type="password"
            placeholder="Password"
            className="p-3 rounded-lg bg-gray-800 text-white outline-none focus:ring-2 focus:ring-blue-500"
          />
          <DatePicker
            selected={startDate}
            onChange={(date) => setStartDate(date)}
            className="p-3 rounded-lg bg-gray-800 text-white outline-none focus:ring-2 focus:ring-blue-500 w-full"
            placeholderText="Select Date of Birth"
          />
          <select
            id="fitness-level"
            value={fitnessLevel}
            onChange={handleFitnessLevelChange}
            className="p-3 rounded-lg bg-gray-800 text-white outline-none focus:ring-2 focus:ring-blue-500 w-full"
          >
            <option value="" disabled selected className="text-gray-800">
              Select Fitness Level
            </option>
            <option value="beginner">Beginner</option>
            <option value="intermediate">Intermediate</option>
            <option value="advanced">Advanced</option>
          </select>
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
