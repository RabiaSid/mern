const express = require("express");


const route = express.Router();

const CourseController = require("../../controllers/CourseController");
const AuthController = require("../../controllers/authcontroller");

  
  route.get("/", AuthController.protected , CourseController.get);
  
  // route.get("/search", () => {})

  route.get("/:id", CourseController.getById);
  
  route.post("/", CourseController.add);
  
  route.put("/:id", CourseController.edit);
  
  route.delete("/:id", CourseController.det);
  
module.exports = route
