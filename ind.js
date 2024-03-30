// console.log("first");
// setTimeout(() => {
//     console.log("second");
// }, 2000);
// console.log("third");
// console.log("fourth");

function cb(result){
    myname=result;
}
function getUsername(func){
    setInterval(() =>{
        func({Username:"lavina"});
    },2400);
}
let myname=getUsername(cb);

console.log(myname);