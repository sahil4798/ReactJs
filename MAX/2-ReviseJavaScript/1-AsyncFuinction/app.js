const age = 20;
const showAge = function () {
  console.log(age);
  console.log(this);
};

showAge();
module.exports.age = age;
exports.showAge = showAge;
