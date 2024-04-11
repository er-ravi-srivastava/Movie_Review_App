import React, { useState } from "react";
import CustomTextfield from "../../../core/components/CustomTextfield";
import PrimaryButton from "../../../core/components/PrimaryButton";
import { signupFormModel } from "../models/SignupFormModel";
import axios from "axios";

const Signup = () => {
  const [signUpFormData, setSignUpFormData] = useState(signupFormModel);

  const [loading, setLoading] = useState(false);

  return (
    <div className="w-full h-full flex flex-col gap-10 justify-center items-center">
      <h1 className="text-3xl text-black font-back">Signup.</h1>
      <form
        className="w-[25%] flex flex-col items-center gap-4"
        onSubmit={(e) => e.preventDefault()}
      >
        <CustomTextfield
          placeholder="Username"
          onChange={(e) => {
            setSignUpFormData((prev) => ({
              ...prev,
              username: e.target.value,
            }));
          }}
        />
        {/* <CustomTextfield
          placeholder="Email"
          onChange={(e) => {
            setSignUpFormData((prev) => ({ ...prev, email: e.target.value }));
          }}
        /> */}
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
          buttonText={loading?"please wait" : "Register"}
          onClick={() => {
            if (!loading) {
              handleSignup();
            }
          }}
        />
      </form>
    </div>
  );

  async function handleSignup() {
    setLoading(true); // for data loading
    if (!signUpFormData.username || signUpFormData.username.trim() === "") {
      console.log("test");
    } else if (
      !signUpFormData.password ||
      signUpFormData.password.trim() === ""
    ) {
      console.log("password");
    } else if (
      !signUpFormData.confirmPassword ||
      signUpFormData.confirmPassword.trim() === ""
    ) {
      console.log("confirmPassword");
    } else if (signUpFormData.password !== signUpFormData.confirmPassword) {
      console.log("password !== confirmPassword");
    } else {
      try {
        const response = await axios.post("http://localhost:3008/register", {
          username: signUpFormData.username,
          password: signUpFormData.password,
        });
        console.log(response.data);
      } catch (error) {
        console.log(error.response.data.message);
      }
    }
    setLoading(false);
  }
};

export default Signup;
