console.log(a)
var a;
console.log(a)

console.log(b)
var b=9;
console.log(b)

//-------------------------------------------------------------

// task: to run the different functions synchronously--->

// function register(){
//     waitForTwoSec();
//     console.log("registration process activated");
// }
// function SendEmail(){
//     waitForTwoSec();
//     console.log("mail sent");
// }
// function login(){
//     waitForTwoSec();
//     console.log("login");
// }
// function getData(){
//     waitForTwoSec();
//     console.log("data fetch");
// }
// function Verification(){
//     waitForTwoSec();
//     console.log("data verified");
// }

// function waitForTwoSec(){
//     const ms=new Date().getTime()+2000;
//     while((new Date().getTime())<ms);
// };

// register();
// SendEmail();
// login();
// getData();
// Verification();


// task: to run the different functions Asynchronously------------------->

function register(){
    setTimeout(function(){
        console.log("registration started")
    },2000);
}
function SendEmail(){
   setTimeout(function(){
        console.log("email sent")
    },4000);
}
function login(){
    setTimeout(function(){
        console.log("you are logged in")
    },6000);
}
function getData(){
   setTimeout(function(){
        console.log("data fetched")
    },8000);
}
function Verification(){
   setTimeout(function(){
        console.log("data verified")
    },10000);
}


register();
SendEmail();
login();
getData();
Verification();

// callback hell........
