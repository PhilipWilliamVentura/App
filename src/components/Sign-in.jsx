import React from "react";
import { accountbackground } from "../assets";

function Signin() {
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

export default Signin;
