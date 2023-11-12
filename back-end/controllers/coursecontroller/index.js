const { SendResponse } = require("../../helper/index");
const CourseModel = require("../../model/coursemodel/index");

const courses = [
  {
    id: 1,
    name: "Graphic Designing",
    shortName: "Graphic Design",
    fee: 1500,
  },
  {
    id: 2,
    name: "MERN Stack Development",
    shortName: "MERN Stack",
    fee: 2500,
  },
  {
    id: 3,
    name: "Python Programming",
    shortName: "Python",
    fee: 1200,
  },
  {
    id: 4,
    name: "Web Development",
    shortName: "Web Dev",
    fee: 2000,
  },
  {
    id: 5,
    name: "Java Programming",
    shortName: "Java",
    fee: 1800,
  },
  {
    id: 6,
    name: "Data Science",
    shortName: "Data Science",
    fee: 3000,
  },
  {
    id: 7,
    name: "iOS App Development",
    shortName: "iOS Dev",
    fee: 2800,
  },
  {
    id: 8,
    name: "Android App Development",
    shortName: "Android Dev",
    fee: 2700,
  },
  {
    id: 9,
    name: "Cloud Computing",
    shortName: "Cloud Computing",
    fee: 2200,
  },
  {
    id: 10,
    name: "Network Security",
    shortName: "Net Security",
    fee: 2600,
  },
  {
    id: 11,
    name: "Full Stack Web Development",
    shortName: "Full Stack Dev",
    fee: 2300,
  },
];

const CourseController = {
  
  add: async (req, res) => {
    try {
      let { name, shortName, fee } = req.body;
      let obj = { name, shortName, fee };

      let errArr = [];

      if (!obj.name) {
        errArr.push("Required Name");
      }
      if (!obj.shortName) {
        errArr.push("Required Short Name");
      }

      if (errArr.length > 0) {
        res.status(400).send(SendResponse(false, "Validation Error !", errArr));

        // res.send({
        //   isSuccessfull: false,
        //   message: "Validation Error !",
        //   data: errArr,
        // });
      } 
      else {
        // (obj.id = courses.length + 1), courses.push(obj);
        let Course = new CourseModel(obj);
        let result = await Course.save();
        res
          .status(200)
          .send(SendResponse(true, "Data Added Successfully", result));
        // res.send({
        //   isSuccessfull: true,
        //   message: "",
        //   data: obj,
        // });
      }
    } catch (e) {
      res.status(500).send(SendResponse(false, "Internal server Error", e));
    }
  },
  edit: async (req, res) => {
    try {
      const id = req.params.id;
      const updatedCourse = req.body;
      let result = await CourseModel.findByIdAndUpdate(id, updatedCourse);
      res
        .status(200)
        .send(SendResponse(true, "Data Updated Successfully", result));
    } catch (e) {
      res.status(500).send(SendResponse(false, "Internal server Error", e));
    }
    // const id = req.params.id;
    // const updatedCourse = req.body;

    // const courseIndex = courses.findIndex((course) => course.id == id);

    // if (courseIndex !== -1) {
    //   if (updatedCourse.name) {
    //     courses[courseIndex].name = updatedCourse.name;
    //   }
    //   if (updatedCourse.shortName) {
    //     courses[courseIndex].shortName = updatedCourse.shortName;
    //   }
    //   if (updatedCourse.fee) {
    //     courses[courseIndex].fee = updatedCourse.fee;
    //   }

    // res.send({
    //   isSuccessfull: true,
    //   message: "Course updated successfully",
    //   data: courses[courseIndex],
    // });
    // } else {
    //   res.send({
    //     isSuccessfull: false,
    //     message: "Course not found",
    //     data: null,
    //   });
    // }
  },
  // get: (req, res) => {
  //   res.send(courses);
  // },
  get: async (req, res) => {
    try {
      // let id = req.params.id;
      let { pageNo, pageSize } = req.query;
      console.log(pageNo, pageSize);
      let skipCount = (pageNo - 1) * pageSize;
      let result = await CourseModel.find().limit(pageSize).skip(skipCount);
      // res.send({
      //   isSuccessfull: true,
      //   message: "Course updated successfully",
      //   data: result,
      // });
      // console.log(
      //   res.send({
      //     isSuccessfull: true,
      //     message: "Course updated successfully",
      //     data: result,
      //   })
      // );
      res.status(200).send(SendResponse(true, "", result));
    } catch (e) {
      res.status(500).send(SendResponse(false, "Internal server Error", e));
    }
  },

  getById: async (req, res) => {
    try {
      let id = req.params.id;
      let result = await CourseModel.findById(id);
      res.send(SendResponse(true, "", result));
      // let id = req.params.id;

      // let obj = courses.find((x) => x.id == id);

      // if (obj) {
      //   res.send({
      //     isSuccessfull: true,
      //     data: obj,
      //     message: "",
      //   });
      // } else {
      //   res.send({
      //     isSuccessfull: true,
      //     data: null,
      //     message: "NO DATA Found",
      //   });
      // }
    } catch (e) {
      res.status(500).send(SendResponse(false, "Internal server Error", e));
    }
  },
  det: (req, res) => {
    try {
      let id = req.params.id;
      CourseModel.findByIdAndDelete(id)
        .then(() => {
          res.status(200).send(SendResponse(true, "Data Deleted Successfully"));
        })
        .catch((err) => {
          res
            .status(400)
            .send(SendResponse(false, "Internal server Error", err));
        });
    } catch (error) {
      res.status(500).send(SendResponse(false, "Internal server Error", error));
    }
    //   const id = req.params.id;
    //   const courseIndex = courses.findIndex((course) => course.id == id);

    //   if (courseIndex !== -1) {
    //     const deletedCourse = courses.splice(courseIndex, 1);

    //     res.send({
    //       isSuccessfull: true,
    //       message: "Course deleted successfully",
    //       data: deletedCourse[0],
    //     });
    //   } else {
    //     res.send({
    //       isSuccessfull: false,
    //       message: "Course not found",
    //       data: null,
    //     });
    //   }
    // },
  },
};

module.exports = CourseController;
