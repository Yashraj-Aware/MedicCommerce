import React from "react";

const Description = () => {
  return (
    <div className="grid grid-cols-2 gap-4 p-4 py-7">
      <div className="">
        <img
          src="https://tunatheme.com/tf/html/vicodin-preview/vicodin/img/others/9.png"
          alt=""
          className="h-full w-full object-cover object-center lg:h-full lg:w-full"
        />
      </div>
      <div className="right-container">
        <div className="text-5xl font-bold tracking-wide leading-tight">
          <h1 className="">Your faithful partners Medical Goods</h1>
        </div>

        <div className="py-4 text-lg ">
          <p className="text-zinc-500">
            An efficient way to access medicine with trusted authority
          </p>
        </div>

        <div className="text-lg pb-10 border-b-2">
          <ol>
            <li className="py-1">
              1. Better security for patient privacy and information.
            </li>
            <li className="py-1">2. More products at lower prices.</li>
            <li className="py-1">
              3. connect customers with the power of eCommerce at all.
            </li>
          </ol>
        </div>

        <div className="emergency-contact py-5 w-full grid grid-cols-2">
          <div className="border-r-2">

          <span className="specialist-name">
            <h3>Henry Charles</h3>
          </span>
          <span>Medical Specialist</span>
          </div>
          <div className="get-support px-6">
            <span className="phone-icon">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="w-6 h-6 text-emerald-700"
              >
                <path
                  strokeLineCap="round"
                  strokeLineJoin="round"
                  d="M20.25 3.75v4.5m0-4.5h-4.5m4.5 0-6 6m3 12c-8.284 0-15-6.716-15-15V4.5A2.25 2.25 0 0 1 4.5 2.25h1.372c.516 0 .966.351 1.091.852l1.106 4.423c.11.44-.054.902-.417 1.173l-1.293.97a1.062 1.062 0 0 0-.38 1.21 12.035 12.035 0 0 0 7.143 7.143c.441.162.928-.004 1.21-.38l.97-1.293a1.125 1.125 0 0 1 1.173-.417l4.423 1.106c.5.125.852.575.852 1.091V19.5a2.25 2.25 0 0 1-2.25 2.25h-2.25Z"
                />
              </svg>
            </span>
            <div className="info">
              <span>Get Support</span>
              123-456-789-0
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Description;
