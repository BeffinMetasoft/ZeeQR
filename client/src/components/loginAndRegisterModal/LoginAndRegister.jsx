import React from "react";
import {  Radio } from "antd";
import { useState } from "react";
import Login1 from "../login/Login1";
import Signup1 from "../signup/Signup1";

function LoginAndRegister() {
  const [isData, setIsData] = useState();

  const handleRadioChange = (e) => {
    setIsData( e.target.value );
  };



  return (
    <div className="bg-black  min-h-[500px]">
      <div className="">
        <div className="flex flex-col    text-white items-center justify-between ">
          {isData === 2 ? (
            <h2 className="text-2xl font-semibold font-['Poppins']">
              Please signing to continue
            </h2>
          ) : (
            <h2 className="text-2xl  font-semibold font-['Poppins']">
              Please signup to continue, it's completely free
            </h2>
          )}
          <hr className="border mt-3 border-gray-50 w-full mb-8" />
        </div>
        <div className="flex justify-center">
          <div className=" flex  justify-between"  >
            
            <Radio.Group
              name="radiogroup"
              className="flex justify-between w-full"
              defaultValue={1}
            >
              <Radio
                className="text-white font-['Poppins']"
                value={1}
                onChange={handleRadioChange}
              >
                I'm a new user
              </Radio>
              <Radio
                className="text-white font-['Poppins']"
                value={2}
                onChange={handleRadioChange}
              >
                I'm a existing user
              </Radio>
            </Radio.Group>
          </div>
        </div>
      </div>
      <div className="flex flex-col justify-center items-center ">


        {isData === 2 ? (
          <Login1/>
          
        ) : (
          <Signup1 setIsData={setIsData} />
          
        )}
      </div>
    </div>
  );
}

export default LoginAndRegister