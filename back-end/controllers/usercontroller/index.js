const users = [
    {
      id: 1,
      name: "Rabia",
      course: "Graphic Design",
      fee: 1500,
    },
    {
      id: 2,
      name: "Laiba",
      course: "MERN Stack",
      fee: 2500,
    },
    {
      id: 3,
      name: "Taha",
      course: "Python",
      fee: 1200,
    },
    {
      id: 4,
      name: "Ali",
      course: "Web Dev",
      fee: 2000,
    },
    {
      id: 5,
      name: "Bina",
      course: "Java",
      fee: 1800,
    },
    {
      id: 6,
      name: "Samra",
      course: "Data Science",
      fee: 3000,
    },
    {
      id: 7,
      name: "Rafia",
      course: "iOS Dev",
      fee: 2800,
    },
    {
      id: 8,
      name: "Balaj",
      course: "Android Dev",
      fee: 2700,
    },
    {
      id: 9,
      name: "Saim",
      course: "Cloud Computing",
      fee: 2200,
    },
    {
      id: 10,
      name: "shezzy",
      course: "Net Security",
      fee: 2600,
    },
    {
      id: 11,
      name: "Bisma",
      course: "Full Stack Dev",
      fee: 2300,
    },
  ];

const UserController = {
    add: (req, res) => {
        let { name, course } = req.body;
        let obj = { name, course };
      
        errArr = [];
      
        if (!obj.name) {
          errArr.push("Required Name");
        }
      
        if (!obj.course) {
          errArr.push("Required Short Name");
        }
        if (errArr.length > 0) {
          res.send({
            isSuccessfull: false,
            message: "Validation Error !",
            data: errArr,
          });
        } else {
          (obj.id = users.length + 1), users.push(obj);
      
          res.send({
            isSuccessfull: true,
            message: "",
            data: obj,
          });
        }
      },
    edit:(req, res) => {
        const id = req.params.id;
        const updatedUser = req.body;
      
        const UserIndex = users.findIndex((User) => User.id == id);
      
        if (UserIndex !== -1) {
          if (updatedUser.name) {
            users[UserIndex].name = updatedUser.name;
          }
          if (updatedUser.course) {
            users[UserIndex].course = updatedUser.course;
          }
          if (updatedUser.fee) {
            users[UserIndex].fee = updatedUser.fee;
          }
      
          res.send({
            isSuccessfull: true,
            message: "User updated successfully",
            data: users[UserIndex],
          });
        } else {
          res.send({
            isSuccessfull: false,
            message: "User not found",
            data: null,
          });
        }
      },
    get: (req, res) => {
        res.send(users);
      },
    getById: (req, res) => {
        let id = req.params.id;
      
        let obj = users.find((x) => x.id == id);
      
        if (obj) {
          res.send({
            isSuccessfull: true,
            data: obj,
            message: "",
          });
        } else {
          res.send({
            isSuccessfull: true,
            data: null,
            message: "NO DATA Found",
          });
        }
      },
    det: (req, res) => {
        const id = req.params.id;
        const UserIndex = users.findIndex((User) => User.id == id);
      
        if (UserIndex !== -1) {
          const deletedUser = users.splice(UserIndex, 1);
      
          res.send({
            isSuccessfull: true,
            message: "User deleted successfully",
            data: deletedUser[0],
          });
        } else {
          res.send({
            isSuccessfull: false,
            message: "User not found",
            data: null,
          });
        }
      },
   
}

module.exports = UserController