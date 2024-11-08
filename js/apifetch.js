let url='https://api.github.com/users/krishnaik06';
let b=fetch(url);
b.then((data)=>{
    console.log(data);
    return data.json();
}).then((data)=>{
    console.log(data);
}).catch(()=>{
    console.log("Error")
}).finally(()=>{
    console.log("finally")
})

async function fetchh(){
    let url = 'https://api.github.com/users';
    let b = await fetch(url);
    let data = await b.json();
    console.log(data);
}
fetchh()