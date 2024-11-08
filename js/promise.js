// let promise= new Promise((resolve,reject) =>{
//     resolve({user:"AJ", pass:"123456"});
//     });
// promise.then((data) => {
//     console.log(data);
//     return data;
// }).then((res)=>{
//     console.log(res.user);
// }).catch(()=>{
//     console.log("error");
// }).finally(()=>{
//     console.log("finally")
// })

// function getroll(num,delay){
//     return new Promise((resolve,reject)=>{
//             setTimeout(()=>{
//             console.log("roll number" +num);
//             resolve();
//         },delay)
//     })
//     }

//   getroll(1,1000).then(()=>{
//     getroll(2,2000).then(()=>{
//         getroll(3,3000);
//     });
//   });
    
    // async function pirntRollnumber(){
    //     await getroll(1,1000);
    //     await getroll(2,2000);
    //     await getroll(3,3000);
    // }
    // pirntRollnumber();

    // rollnumber(12131,1000).then(()=>{
    //     rollnumber(12132,2000).then(()=>{
    //         rollnumber(12133,3000).then(()=>{
    //             console.log("all rolls are done")
    //         })
    //     })
    // }).catch(()=>{
    //     console.log("hii")
    // })/




     function orderfood(item,time,delay){
         return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            console.log("order food is" +item +time);
            resolve();
            reject();
        },delay)
    })
}
    // orderfood("biryani","2pm",1000).then(()=>{
    //     orderfood("paneer","3pm",2000).then(()=>{
    //         orderfood("chilli","4pm",3000).then(()=>{
    //             console.log("food is delivered")
    //         })
    //     })
    //     }).catch(()=>{
    //         console.log("error")
    //     }).finally(()=>{
    //         console.log("finally")
    //     })

    async function food(){
        await orderfood("biryani","2pm",1000);
        await orderfood("paneer","3pm",2000);
        await orderfood("chilli","4pm",3000);
    }
    food();