import React from "react";
import styles from "../profile.module.css";

const Profile = () => {
  
  return (
    <main className="mx-auto max-w-7xl ">
      <div className="flex items-baseline justify-between border-b border-gray-200 pb-12 pt-24 bg-[#c7dde8]">
        <h1 className="sm:text-4xl lg:text-4xl ml-7 mb-7 font-bold tracking-tight text-gray-900 ">
          Orders
        </h1>
      </div>

      <div className="parent mt-10 mx-4 h-96 grid grid-cols-[2fr_4fr]">

        <div className="left-container">
          <div className="elements flex flex-col justify-center text-center py-7 ">
            <a href="#dash" className="">Dashboard</a>
            <a href="#orders" className="">Orders</a>
            <a href="#address" className="">Address</a>
            <a href="#acc" className="">Account Details</a>
            <a href="#logout" className="">Logout</a>
          </div>
        </div>

        <div className="right-container">

        </div>


      </div>
    </main>
  );
};

export default Profile;
