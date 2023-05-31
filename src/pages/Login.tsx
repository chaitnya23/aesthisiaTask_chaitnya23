import React from "react";
import LoginDetails from "../components/LoginDetails";
import LoginDecorator from "../components/LoginDecorator";


export default function Login() {
  return (
    <div className="flex w-full md:gap-28 p-8">
      <div className="w-[50%]">
        <LoginDecorator/>
      </div>
      <div className="md:w-[30%] w-[45%]">
        <LoginDetails />
      </div>
    </div>
  );
}
