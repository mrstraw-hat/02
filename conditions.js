

                     // IF CONDITION \\

// const calc = (a,b) => {
//     if(a < b){ console.log("IF PART")
//         return a+b
//     } //else {
//     //     console.log("ELSE PART")
//     //     return a * b
//     // }

// };
// console.log(calc(10,50));





// node conditions.js

// time = 10

// <12 - Good morning
// 12 > 16 < - good after noon
// 16 20 good evening
// 20 < 24 < -good night


// const wish = (time) => {
//     if (time < 12) {
//         return "Good morning"
//     }else if (time > 12 && time < 16){
//         return "Good afternoon"
//     }else if (time > 16 && time < 20) {
//         return "Good evening"
//     }else if (time > 20 && time < 24 ){
//         return "Good night"
//     }
// };

// console.log(wish(18))


                                            // CONDITIONAL OPERATORS \\ OR TURNERY OPERATORS 

//  let x = 6;           

// // if (x >10) {
// //     console.log(x + 10);
// // }else {
// //    console.log(x);
// // }                                

//  // NOW LET ME SHOW THE SHORT HAND FORM OF THE IF FUNCTION AND THE ELSE FUNCTIONS
//  // THE "?" IN THE CODE MEANS IF AND THE ":"" MEANS ELSE

// x > 10 ? console.log(x + 10): console.log(x); // this is the short hand

                                // SWITCH STATMENT \\

let today = new Date().getDay();
console.log(today);
// 0 - sunday
// 1 - monday
// 2 - tuesday
// etcc...
let day = "";
switch(today){
    case 0:
        day = "Sunday";
        break;
    case 1:
        day = "monday";
        break;
    case 2:
        day = "tuesday";
        break;
    case 3:
        day = "wenesday";
        break;
    case 4:
        day = "thursday";
        break;
    default: 
    day = "I Dont know"
}
console.log(day)




