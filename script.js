
import { add } from "./math.js";

let value = false;
console.log("Value :",value);
console.log("Type is : ", typeof value)

let unique = Symbol("id")
console.log("unique :",unique)
console.log("Type of",unique)

function greet(name){
    return name
}


console.log("Function", greet("kavindu"))

let mypromise = new Promise((resolve , reject) =>{
    let success = true;
    if (success){
        resolve("operation is Sucessful");
    }
    else{
        reject("Operation is failed");
    }
});
mypromise.then((message)=>{
    console.log(message);
})
.catch((error)=>{
    console.log(error);
})
.finally(()=>{
    console.log("Promise is completed")
});


// async function  initializeApp(){
//     try{

//     }
// }

function fetchData(callback){
        setTimeout(()=>{
            let data = { name:"kavindu",age:22};
            callback(data);
        },3000)
}
function handleData(data){
    console.log("Data is received :",data)
}
console.log(add(100,50))

if(sessionStorage.getItem("name")=== null){
    console.log("Name is Not set!");
    sessionStorage.setItem("name","Kavindu");
}else{
    console.log("Name is :",sessionStorage.getItem("name"))
}

// async function fetchdata(){
//     try{
//         let response = await fetch('https://jsonplaceholder.typicode.com/todos/1');
//         let data = await response.json();
//         console.log("Response data :",data);

//     } catch (error){
//         console.log("Error fetching data :",error)
//     }
// }
// fetchdata();

async function initailzeApp(){
    try{
        const response = await fetch('https://jsonplaceholder.typicode.com/users/1')
        let data = await response.json();

        //check if the user object has a id
        if(data?.id){
            console.log("Response data :",data.id);  
            let userresponse = await fetch(`https://jsonplaceholder.typicode.com/posts?userId=${data.id}`);
            let user = await userresponse.json();
            console.log("posts :",user);
        }
    }
    catch(error){
        console.log("Error fetching data :",error)
    }
}
initailzeApp();

//Define a function that accepts a callback
function fetchingdata(callback){
    setTimeout(() =>{
        let data = { name: "Kavindu DAS" , age:22};
        callback(data);
    },3000) // simulate a network request with delay of 3 seconds
}

//Define a callback function
function handleData2(data){
    console.log("Data received :",data)
}

//call the function with callback
fetchingdata(handleData2);
