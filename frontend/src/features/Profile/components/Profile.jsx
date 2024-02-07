import React from "react";
import styles from "../profile.module.css";

const Profile = () => {
  return (
    <main className="mx-auto max-w-7xl ">
      <div className="flex items-baseline justify-between border-b border-gray-200 pb-12 pt-24 bg-[#c7dde8]">
        <h1 className="sm:text-4xl lg:text-4xl ml-7 mb-7 font-bold tracking-tight text-gray-900 ">
          My Account
        </h1>
      </div>
    </main>
  );
};

export default Profile;
