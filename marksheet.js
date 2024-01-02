var Id = prompt("The Student Id Is");
var StudentName = prompt("The Student StudentName Is");
var StudentClass = prompt("The Student StudentClass Is");

var English = parseInt(prompt("The English Score Is"));
var Urdu = parseInt(prompt("The Urdu Score Is"));
var Maths = parseInt(prompt("The Maths Score Is"));
var Science = parseInt(prompt("The Science Score Is"));
var Computer = parseInt(prompt("The Computer Score Is"));

var GainingScore = English + Urdu + Maths + Science + Computer;
var TotalScore = 500;

var Percentage = GainingScore / TotalScore * 100

document.write(`The Student Id Is ${Id} <br>`);
document.write(`The Student StudentName Is ${StudentName} <br>`);
document.write(`The Student StudentClass Is ${StudentClass} <br>`);
document.write(`The English Score Is ${English} <br>`);
document.write(`The Urdu Score Is ${Urdu} <br>`);
document.write(`The Maths Score Is ${Maths} <br>`);
document.write(`The Science Score Is ${Science} <br>`);
document.write(`The Computer Score Is ${Computer} <br>`);
document.write(`The Total GainingScore Is ${GainingScore} <br>`);
document.write(`The TotalScore Is ${TotalScore} <br>`);
document.write(`The Total Percentage Is ${Percentage} % <br>`);
