// var userChoice = "";

// do{
//     var targetNumber = Number(prompt("Please enter your target number", ""));
//     var start = 0;
//     while(start <= targetNumber){
//         document.write(start + "<br/>");
//         start = start + 2;
//     }

//     do{
//         userChoice = prompt("Do you want to continue please say Yes or No").toUpperCase();
//         if(userChoice != "YES" && userChoice != "NO"){
//             alert("Invalid Choice. Please say either yes or no")
//         }
//     } while(userChoice != "YES" && userChoice != "NO")
// } while (userChoice == "YES");

        // SECOND DO WHILE LOOP EXAMPLE

var start = 0;
var userInput = Number(prompt("Please enter your target number"));
do{
    document.write(start + "<br/>")
    // start = start + 1;
    start++;
} while(start < userInput);