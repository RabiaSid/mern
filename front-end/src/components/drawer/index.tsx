import React from "react";
import { useState } from "react";
import { Drawer } from "antd";
import InputField from "../input-field";
import Dropdown from "../dropdown";
import PrimaryButton from "../button";
import { useNavigate } from "react-router-dom";
import { MenuItem } from "@mui/material";
import { Post } from "../../config/api-methods";

export default function AppDrawer() {
  const [open, setOpen] = useState(false);
  const [model, setModel] = useState<any>({});

  const showDrawer = () => {
    setOpen(true);
  };

  const onClose = () => {
    setOpen(false);
  };

  const Roles = [
    { value: "admin", label: "Admin" },
    { value: "institute", label: "Institute" },
    { value: "teacher", label: "Teacher" },
    { value: "student", label: "Student" },
  ];

  // signup

  const fillModel = (key: string, val: any) => {
    setModel((prevModel: any) => ({
      ...prevModel,
      [key]: val,
    }));
  };

  const navigate = useNavigate();

  let signUpUser = async () => {
    console.log("Model data:", model);
    try {
      const res = await Post("/auth/signup", model);
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
      <span onClick={showDrawer} className="px-2 fs-5 fw-bold">
        SignUp
      </span>
      <Drawer
        title="Basic Drawer"
        placement="right"
        onClose={onClose}
        open={open}
      >
        <div className="">
          <h1 className="fs-2 fw-bold">Sign Up</h1>
        </div>
        <div className="">
          <InputField
            value={model.userName || ""}
            onChange={(e: any) => fillModel("userName", e.target.value)}
            label="User Name"
          />
        </div>
        <div className="">
          <InputField
            value={model.email || ""}
            onChange={(e: any) => fillModel("email", e.target.value)}
            label="Email"
          />
        </div>
        <div className="">
          <InputField
            value={model.cnic || ""}
            onChange={(e: any) => fillModel("cnic", e.target.value)}
            label="Cnic"
          />
        </div>
        <div className="">
          <InputField
            value={model.contact || ""}
            onChange={(e: any) => fillModel("contact", e.target.value)}
            label="Contact"
          />
        </div>
        <div>
        <Dropdown
              HeaderValue="Role"
              SelectValue={model.role}
              SelectOnChange={(e: any) => fillModel("role", e.target.value)}
            >
              {Roles.map((option) => (
                <MenuItem key={option.value} value={option.value}>
                  {option.label}
                </MenuItem>
              ))}
            </Dropdown>
        </div>
        <div className="">
          <InputField
            value={model.password || ""}
            onChange={(e: any) => fillModel("password", e.target.value)}
            label="Password"
          />
        </div>
        <div className="">
          <PrimaryButton onClick={signUpUser} label="Sign Up" />
        </div>
      </Drawer>
    </>
  );
}

// const setAuthToken = (token: string) => {
//   if (token) {
//     axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
//   } else {
//     delete axios.defaults.headers.common["Authorization"];
//   }
// };
