import React from "react";

const Profile = () => {
  return (
    <div>
      <main className="mx-auto max-w-7xl mb-3">
        <div className="flex items-baseline justify-between border-b border-gray-200 pb-12 pt-24 bg-[#c7dde8]">
          <h1 className="sm:text-4xl lg:text-4xl ml-7 mb-7 font-bold tracking-tight text-gray-900 ">
            My Account
          </h1>
        </div>
      </main>

      <div className="container mt-4 pt-2  ">
        <div className="message flex justify-center p-4 bg-slate-100 mt-7 my-4 mx-14 ">
          <p>
            The following addresses will be used on the checkout page by
            default.
          </p>
        </div>

        <div className="info-form flex justify-center mx-10">
          <div className="form-element flex flex-col mx-5">
            <label className="py-2">First Name</label>
            <input type="text" name="First Name" id="" placeholder="e.g: John"/>
          </div>

          <div className="form-element flex flex-col mx-5">
            <label className="py-2">Last Name</label>
            <input type="text" name="Last Name" id="" placeholder="e.g: Doe"/>
          </div>

          <div className="form-element flex flex-col mx-5">
            <label className="py-2">Display Email</label>
            <input type="email" name="Display Email" id="" placeholder="s.g: example@gmail.com"/>
          </div>

          
        </div>
      </div>
    </div>
  );
};

export default Profile;
