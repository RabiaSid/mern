import React from 'react'
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Button from "../../../components/button/index";
import InputField from "../../../components/input-field/index";
import AppDrawer from "../../../components/drawer";
import { Post } from '../../../config/api-methods';

export default function SignIn() {
  const navigate = useNavigate();
  const [model, setModel] = useState<any>({});

  
  const fillModel = (key: string, val: any) => {
    setModel((prevModel: any) => ({
      ...prevModel,
      [key]: val,
    }));
  };


  let LoginUser = async () => {
    try {
      const res = await Post("/auth/login", model);
      const { user } = res.data;
      console.log(res.data)
      navigate("/appProduct");
      // // Store the token securely (you may want to use more secure storage methods)
      // localStorage.setItem("authToken", token);

      // // Set the token in the headers for subsequent requests
      // setAuthToken(token);

      // Navigate to the appropriate dashboard based on the user role
      // handleNavigation(user.role.toLowerCase());
    } catch (error) {
      console.error("Login failed:", error);
    }
  };




  return (
    <>
      <div
        className="row m-0 p-0 d-flex justify-content-center align-items-center"
        style={{
          background: `#ffffff`,
          height: "100vh",
        }}
      >
        <div
          className="w-50 p-5 rounded-lg"
          style={{
            background: `rgba(255, 220, 178, 0.2)`,
          }}
        >
          <div className="py-3">
            <h1 className="fs-2 fw-bold">Login</h1>
          </div>

          <div className="py-3">
            <InputField
              value={model.email ?? ""}
              onChange={(e: any) => fillModel("email", e.target.value)}
              label="Email"
            />
          </div>
          <div className="py-3">
            <InputField
              value={model.password || ""}
              onChange={(e: any) => fillModel("password", e.target.value)}
              label="Password"
            />
          </div>

          <div className="py-3">
            <Button onClick={LoginUser}  label="Sign in" />
          </div>
          <div className="py-3">
            <p className="text-dark">
              no account?
              <AppDrawer />
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
