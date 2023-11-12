require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors")
const courseRoute = require("./route/courseroute");
const authRoute = require("./route/authroute");
// require("dotenv").config();

const App = express();
App.use(express.json());
App.use(cors())
App.use("/course", courseRoute);
App.use("/auth", authRoute);
// App.use("/user", userRoute);

mongoose
  .connect(process.env.MONGO_URL)
  .then(() => {
    App.listen(process.env.PORT, () => {
      console.log(
        `Database Connected and server is listening http://localhost:${process.env.PORT}`
      );
    });
  })
  .catch((err) => {
    console.log("err", err);
  });

//400 {bad request} = catch
//401 {privacy error user is unauthorize} = catch
//200{ok} = try 
//500 {server error (no internet)} = catch
//rabiasid984
//ABC123XYZ
//coludnary
//node mirror
// npm i moongoos
//npm i bycryptjs
//npm i jsonwebtoken
