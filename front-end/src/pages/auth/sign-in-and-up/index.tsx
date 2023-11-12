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


  let LoginUser = () => {
    console.log(model);

    Post("auth/signup", model)
    .then((res: any) => {
      // res: JSON.stringify(res.data),
      console.log("Successfully Add New --Post", res.data);
      setModel(res.data);
      
    })
    .catch((err) => {
      console.log(err.message);
    });
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
              value={model.name ?? ""}
              onChange={(e) => setModel({ ...model, name: e.target.value })}
              label="Email"
            />
          </div>
          <div className="py-3">
            <InputField
              value={model.password || ""}
              onChange={(e) => setModel({ ...model, password: e.target.value })}
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
