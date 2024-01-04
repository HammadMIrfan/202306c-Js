alert("Welcome To Online Voting Application")
const Input_Name = prompt("Enter Your Name")
const Input_Age = prompt("Enter Your Age")
const Input_Cnic = prompt("Enter Your CNIC")
const Input_VoteFor = prompt("Enter Your VoterName ( 1.IMRAN KHAN ) ( 2.NAWAZ SHAREEF ) ( 3.ALTAF HUSSAIN ) ( 4.BILAWAL BHUTTO ) ( 5.HAFIZ NAEEM )")
const Input_VoteMark = prompt("Enter Your VoterMark")


document.write(`THE VOTER NAME IS ${Input_Name} <br>`)
document.write(`THE VOTER AGE IS ${Input_Age} <br>`)
document.write(`THE VOTER CNIC IS ${Input_Cnic} <br>`)


switch (Input_VoteFor) {
  case "1":
    document.write("IMRAN KHAN");
    break;

  case "2":
    document.write("YOUR VOTER PERSON IS NAWAZ SHAREEF");
    break;

  case "3":
    document.write("YOUR VOTER PERSON IS ALTAF HUSSAIN");
    break;

  case "4":
    document.write("YOUR VOTER PERSON IS BILAWAL BHUTTO");
    break;

  case "5":
    document.write("YOUR VOTER PERSON IS HAFIZ NAEEM");
    break;

  default:
    document.write("VOTER Not Found");
    break;
}


document.write(`THE VOTER PERSON IS ${Input_VoteFor} <br>`)
document.write(`THE VOTER MARK IS ${Input_VoteMark} <br>`)

