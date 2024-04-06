import React, { useState } from "react";
import CustomTextfield from "../../../core/components/CustomTextfield";
import PrimaryButton from "../../../core/components/PrimaryButton";
import { signupFormModel } from "../models/SignupFormModel";

const Signup = () => {
  const [signUpFormData, setSignUpFormData] = useState(signupFormModel);

  return (
    <div className="w-full h-full flex flex-col gap-10 justify-center items-center">
      <h1 className="text-5xl text-black font-bold">Signup.</h1>
      <form
        className="w-[25%] flex flex-col items-center gap-4"
        onSubmit={(e) => e.preventDefault()}
      >
        <CustomTextfield
          placeholder="Full name"
          onChange={(e) => {
            setSignUpFormData((prev) => ({
              ...prev,
              firstName: e.target.value,
            }));
          }}
        />
        <CustomTextfield
          placeholder="Email"
          onChange={(e) => {
            setSignUpFormData((prev) => ({ ...prev, email: e.target.value }));
          }}
        />
        <CustomTextfield
          placeholder="Password"
          type="password"
          onChange={(e) => {
            setSignUpFormData((prev) => ({
              ...prev,
              password: e.target.value,
            }));
          }}
        />
        <CustomTextfield
          placeholder="Confirm Password"
          type="password"
          onChange={(e) => {
            setSignUpFormData((prev) => ({
              ...prev,
              confirmPassword: e.target.value,
            }));
          }}
        />
        <PrimaryButton
          buttonText="Signup"
          onClick={() => {
            console.log(signUpFormData);
          }}
        />
      </form>
    </div>
  );
};

export default Signup;
