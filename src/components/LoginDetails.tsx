import React, { useState } from "react";
import Petal from "../asset/petal.svg";
import PropTypes from "prop-types";
import eye from '../asset/eye.svg';

export default function LoginDetails() {
    const [isShowPassword, setisShowPassword] = useState<boolean>(false);

  return ( 
    <div className="p-3">
      <div>
        <img src={Petal} alt="" className="m-auto my-2" />
      </div>
      <p className="text-2 text-4xl  font-semibold text-center">
        Welcome <span className="text-[#08A593]">Back!</span>{" "}
      </p>
      <p className="text-center text-gray-400 text-sm py-1 my-2">
        Glad to see you, Again!
      </p>

      <div>
        <input
          type="text"
          className="p-2 w-full rounded-lg outline-none border-2 px-4 border-gray-300 mt-4"
          placeholder="Enter your email"
        />
        <div className="p-2 w-full outline-none rounded-lg border-2 px-4 border-gray-300 mt-4 flex justify-between">
          <input
            type={isShowPassword?"text":"password"}
            className="  outline-none w-full "
            placeholder="Enter your password"
          />
          <img src={eye} alt="" onClick={()=>setisShowPassword(!isShowPassword)} />
        </div>

        <p className="text-end text-sm text-gray-400 mb-2">Forget Password ?</p>

      </div>
      <button className="login-btn hover:bg-gray-800 transition-all duration-300 bg-black py-2 shadow-2xl mt-12 rounded-lg text-white font-bold w-full">
        Login
      </button>

      <p className="text-sm text-gray-500 mt-16 text-center">
        Don't have an account ?{" "}
        <span className="text-[#08A593] font-semibold cursor-pointer">
          sign up
        </span>{" "}
      </p>
    </div>
  );
}
