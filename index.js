"format es6";

const obj = {
  attr: 'value',
  func: () => 777
};

if (!obj.notAFunc.ex()) {
  console.log("property `notAFunc` does not exist");
}
