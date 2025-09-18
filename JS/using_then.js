function register(){
    // waitForTwoSec();
     return new Promise((resolve)=>{
        console.log("registration process activated");
        resolve();
    })
    
}
function SendEmail(){
    // waitForTwoSec();
         return new Promise((resolve)=>{
        console.log("email sent");
        resolve();
    })
}
function login(){
    // waitForTwoSec();
    return new Promise((resolve)=>{
        console.log("logged in");
        resolve();
    })
}
function getData(){
    // waitForTwoSec();
        return new Promise((resolve)=>{
        console.log("data fetched");
        resolve();
    })}
function Verification(){
    // waitForTwoSec();
         return new Promise((resolve)=>{
        console.log("verified");
        resolve();
    })}

function waitForTwoSec(){
    const ms=new Date().getTime()+2000;
    while((new Date().getTime())<ms);
};


register()
.then(SendEmail)
.then(login)
.then(getData)
.then(Verification);

// then is directly connected to the resolve 
// chaining is required when the functions return something 