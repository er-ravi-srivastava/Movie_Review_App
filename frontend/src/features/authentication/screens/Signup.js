import React, { useState } from "react";
import CustomTextfield from "../../../core/components/CustomTextfield";
import PrimaryButton from "../../../core/components/PrimaryButton";
import { signupFormModel } from "../models/SignupFormModel";
import axios from "axios";
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Signup = () => {
  const [signUpFormData, setSignUpFormData] = useState(signupFormModel);
  const [loading, setLoading] = useState(false);

  async function handleSignup() {
    if (!signUpFormData.username || signUpFormData.username.trim() === "") {
      // console.log("test");
    } else if (
      !signUpFormData.password ||
      signUpFormData.password.trim() === ""
    ) {
      // console.log("password");
    } else if (
      !signUpFormData.confirmPassword ||
      signUpFormData.confirmPassword.trim() === ""
    ) {
      // console.log("confirmPassword");
    } else if (signUpFormData.password !== signUpFormData.confirmPassword) {
      // console.log("password !== confirmPassword");
    } else {
      try {
        const response = await axios.post("https://movie-review-api.vercel.app/register", {
          username: signUpFormData.username,
          password: signUpFormData.password,
        });
        console.log(response.data);
        
        toast.success("User created successfully!");
      } catch (error) {
        if (error.response) {
          if (error.response.status === 409) {
            toast.error("Username is already taken. Please choose another one.");
          } else if (error.response.status === 404) {
            toast.error("Details not found. Please check your information.");
          } else if (error.response.status === 401) {
            toast.error("Unauthorized. Please check your credentials.");
          } else {
            console.log(error.response.data.message);
          }
        } else {
          console.log(error.message);
        }
      }
    }
    setLoading(false); 
  }

  return (
    <>
      <ToastContainer />
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
            buttonText={loading ? "please wait" : "Submit"}
            onClick={() => {
              if (!loading) {
                setLoading(true);
                handleSignup();
              }
            }}
          />
        </form>
      </div>
    </>
  );
};

export default Signup;
