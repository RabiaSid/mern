const express = require("express");
const UserController = require("../../controllers/usercontroller");

const route = express.Router()


  
  route.get("/", UserController.get);
  
  route.get("/search", () => {})

  route.get("/:id", UserController.getById);
  
  route.post("/", UserController.add);
  
  route.put("/:id", UserController.edit);
  
  route.delete("/:id", UserController.det);
  
module.exports = route
