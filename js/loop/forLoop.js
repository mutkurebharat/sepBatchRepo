var userInput = Number(prompt("Please Enter your Target Number"));

// for(var start = 0 ; start <= userInput ; start = start + 2) {
//     document.write(start + "<br/>")
// }

// Variable initialization is optional


// var start = 0 
// for(; start <= userInput ; start = start + 2) {
//     document.write(start + "<br/>")
// }


// Condition is optional

// var start = 0 
// for(;; start = start + 2) {
//     if(start > userInput){
//         break;
//     }
//     document.write(start + "<br/>")
    
// }

// Moved the increment at the last

var start = 0 
for(;;) {
    if(start > userInput){
        break;
    }
    document.write(start + "<br/>")
    start = start + 2
    
}