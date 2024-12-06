// function aa(){
//     console.log("first");
// }
// setTimeout(aa,2000);

// (function()
// {
//     console.log("second");
// })();



// function rollnumber(num,delay,nextroll){
//     setTimeout(()=>{
//         console.log("roll number",num);
//         if(nextroll) nextroll();
//     },delay)
// }

// rollnumber(1222,1000, () =>{
//     rollnumber(1223,2000,() =>{
//         rollnumber(1224,3000, () =>{
//             rollnumber(1225,4000, () =>{

//             })
//         })
//     })
// });


// const promise = new Promise(function(resolve, reject) {
//     console.log("My first promise");
//     resolve("resolved");
//     reject("rejected");
// });

// promise.then(() => {
//     console.log("my first then");
// }).catch(() => {
//     console.log("my first catch");
// });

let i=1;
while(i<20)
{
    console.log("hii rikky")
    i++;
}

