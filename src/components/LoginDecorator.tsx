import React from "react";
import Bg from "../asset/bg.png";
import uplogo from "../asset/logo-up.svg";
import globe from "../asset/globe.svg";
import insta from "../asset/insta.svg";
import facebook from "../asset/facebook.svg";
import linkedIn from "../asset/linkedIn.svg";

export default function LoginDecorator() {
  return (
    <div className="login-decorator rounded-xl p-7 h-full">
      <img src={uplogo} alt="" />
      <div className="mt-40">
        <p className="text-3xl text-white font-bold ">100% uptime😎</p>
        <p className="text-2xl mt-8 w-[50%]  text-gray-300 ">
          Zero Infrastructure Management
        </p>
      </div>

      <div className="flex gap-1 mt-4">
        <div className="dot w-7 h-2 rounded-full bg-white"></div>
        <div className="dot w-2 h-2 rounded-full bg-gray-400"></div>
        <div className="dot w-2 h-2 rounded-full bg-gray-400"></div>
      </div>

      <div className="mt-20 flex justify-between">
        <div className="flex gap-1">
          <img src={globe} alt="" />
          <p className="text-sm text-gray-200 ">aesthisia.com</p>
        </div>
        <div className="flex items-center gap-2">
            <img src={linkedIn} alt="" />
            <img src={facebook} alt="" />
            <img src={insta} alt="" />


        </div>
      </div>
    </div>
  );
}
