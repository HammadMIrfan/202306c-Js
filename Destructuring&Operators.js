// const arrayData = ["Ali","bilal","Chishti","Daniyal","eman"]
// const [a , b, c , d , e] = arrayData

// document.write(`${a} <br>`)
// document.write(`${b} <br>`)
// document.write(`${c} <br>`)
// document.write(`${d} <br>`)
// document.write(`${e} <br>`)

// const Logics = (value1, value2) => {
//   const Addition = value1 + value2;
//   const Substraction = value1 - value2;
//   const Multiplication = value1 * value2;
//   const Division = value1 / value2;

//   return [Addition, Substraction, Multiplication, Division];
// };

// const [a1, b1, c1, d1] = Logics(240, 78);
// document.write(`${a1} <br>`);
// document.write(`${b1} <br>`);
// document.write(`${c1} <br>`);
// document.write(`${d1} <br>`);

// const ObjectData = {
//   Name1: "Ali",
//   Name2: "Saad",
//   Name3: "Ahmed",
//   Name4: "Waqas",
//   Name5: "Sarim",
// };
// DestructureData(ObjectData);

// function DestructureData  ({Name1, Name2, Name3, Name4, Name5})  {
//   const message = `The name 1 is ${Name1} <br>
//     The name 2 is ${Name2} <br>
//     The name 3 is ${Name3} <br>
//     The name 4 is ${Name4} <br>
//     The name 5 is ${Name5} <br> `;

//     document.write(message)
// };

// const ObjectData = {
//   Name1: "Ali",
//   Name2: "Saad",
//   Name3: "Ahmed",
//   Name4: "Waqas",
//   Name5: "Sarim",
// };

// const DestructureData = ({ Name1, Name2, Name3, Name4, Name5 }) => {
//   const message = `The name 1 is ${Name1} <br> 
//       The name 2 is ${Name2} <br> 
//       The name 3 is ${Name3} <br> 
//       The name 4 is ${Name4} <br> 
//       The name 5 is ${Name5} <br> `;

//   document.write(message);
// };

// DestructureData(ObjectData);



//spread operator

// const arrayData = ["Ali","bilal","Chishti","Daniyal","eman"]
// const [a2 , b2 , ...c2] = arrayData

// document.write(`${a2} <br>`)
// document.write(`${b2} <br>`)
// document.write(`${c2} <br>`)

// ternary operator

// const username = prompt("Enter Your Name");

// username == "hammad" ? document.write("welcome") : document.write("getlost");