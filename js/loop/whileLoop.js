var targetNumber = Number(prompt("Enter your target number here"));


var start = 0;

// while(start <= targetNumber){
//     alert(start);
//     start = start + 2;

//     if(start === 10){
//         break;
//     }
// }

while(start < targetNumber){
    start = start + 1;

    if(start % 2 === 0){
        continue;
    }

    alert(start);
}