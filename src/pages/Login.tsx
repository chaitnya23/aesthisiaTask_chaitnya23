import React from "react";
import LoginDetails from "../components/LoginDetails";
import LoginDecorator from "../components/LoginDecorator";


export default function Login() {
  return (
    <div className="flex w-full md:gap-28 gap-12 p-8">
      <div className="md:w-[50%] w-[40%]">
        <LoginDecorator/>
      </div>
      <div className="md:w-[30%] w-[45%]">
        <LoginDetails />
      </div>
    </div>
  );
}
