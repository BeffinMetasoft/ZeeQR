
import React from "react";
import { Button, Checkbox, Form, Input, Radio } from "antd";
import { useState } from "react";

function Model() {
  const [isData, setIsData] = useState({
    name: "",
    email: "",
    radio: "",
    password: "",
    confirm_password: "",
  });

  const handleRadioChange = (e) => {
    setIsData({ ...isData, radio: e.target.value });
  };

  return (
    <div className="bg-black   h-screen flex justify-center items-center flex-col">
      <div className="flex text-white items-center justify-between ">
        {isData.radio === 2 ? (
          <h2 className="text-2xl font-semibold font-['Poppins']">
            Please signing to continue
          </h2>
        ) : (
          <h2 className="text-2xl font-semibold font-['Poppins']">
            Please signup to continue, it's completely free
          </h2>
        )}
      </div>
      <hr className="border border-gray-50 w-full mb-8" />

      <div className="w-5/6 md:w-1/4 sm:w-4/6 flex justify-between">
        {/* <Checkbox className="text-white font-['Poppins']" defaultChecked>
          I'm a new user
        </Checkbox>
        <Checkbox className="text-white font-['Poppins']">
          I'm a existing user
        </Checkbox> */}
        <Radio.Group
          name="radiogroup"
          className=" flex justify-between w-full"
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
      {isData.radio === 2 ? (
        <div className="w-5/6 md:w-1/4 sm:w-4/6 mt-8">
          <Form>
            <Input
              type="email"
              name="email"
              placeholder="Official Email *"
              className="bg-transparent placeholder:text-slate-400 font-['Poppins'] text-white"
              autoComplete="off"
              required
            />
            <Input
              type="password"
              name="password"
              placeholder="Password *"
              className="bg-transparent placeholder:text-slate-400 font-['Poppins'] text-white mt-5"
              autoComplete="off"
              required
            />
            <Button
              className="w-full h-auto mt-5 bg-white text-black font-semibold font-['Poppins'] text-lg"
              htmlType="submit"
            >
              Done
            </Button>
          </Form>
          <p className="mt-4 text-white font-['Poppins']">Forgot Password?</p>
        </div>
      ) : (
        <div className="w-5/6 md:w-1/4 sm:w-4/6 mt-8">
          <Form>
            <Input
              type="text"
              name="name"
              placeholder="Name *"
              className="bg-transparent placeholder:text-slate-400 font-['Poppins'] text-white"
              autoComplete="off"
              required
            />
            <Input
              type="email"
              name="email"
              placeholder="Official Email *"
              className="bg-transparent placeholder:text-slate-400 font-['Poppins'] text-white mt-5"
              autoComplete="off"
              required
            />
            <Input
              type="password"
              name="password"
              placeholder="Password *"
              className="bg-transparent placeholder:text-slate-400 font-['Poppins'] text-white mt-5"
              autoComplete="off"
              required
            />
            <Input
              type="password"
              name="confirm_password"
              placeholder="Confirm Password *"
              className="bg-transparent placeholder:text-slate-400 font-['Poppins'] text-white mt-5"
              autoComplete="off"
              required
            />
            <Form.Item
              name="terms"
              valuePropName="checked"
              rules={[
                {
                  required: true,
                  message: "Please accept the terms & conditions",
                },
              ]}
            >
              <Checkbox className="text-white font-['Poppins'] mt-5">
                I agree to <span className="underline">terms</span> and{" "}
                <span className="underline">privacy</span> policy
              </Checkbox>
            </Form.Item>
            <Button
              className="w-full h-auto mt-2 bg-white text-black font-semibold font-['Poppins'] text-lg"
              htmlType="submit"
            >
              Done
            </Button>
          </Form>
        </div>
      )}
    </div>
  );
}

export default Model;


