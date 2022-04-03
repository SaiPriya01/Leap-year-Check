var readlineSync = require("readline-sync");
var userName = readlineSync.question("Please enter your name ");
var DOB = readlineSync.question("Enter your Date Of Birth in DD-MM-YYYY format ");
var year = DOB.split("-")[2];

if ((year % 400 == 0) || ((year % 4 == 0) && (year % 100 != 0))) {
    console.log("Hey " + userName.toUpperCase() + " !! you are born in leap year " + year);
} else {
    console.log("Hey " + userName + " !! you are not born in leap year " + year);
}