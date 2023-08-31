//destructing

const course = {
  courseName: "js in hindi",
  price: "9999",
  courseInstructor: "roshan",
};

const { courseInstructor: instructor } = course;
// console.log(courseInstructor);
console.log(instructor);
