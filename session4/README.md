1 . Three states of promise are ,
     a. pending
     b. resolve
        ex: let mypromise = new Promise((resolve , reject) =>{
            let success = true;
            if (success){
                resolve("operation is Sucessful");
            }
            });

    c.reject
        let mypromise = new Promise((resolve , reject) =>{
        let success = true;
        if (success){
            resolve("operation is Sucessful");
        }
        else{
            reject("Operation is failed");
        }
    });

2. By executing  a async function the returning value will be a promise . The function will resolve a value if it is true else it will return reject . 

3. await function 

await function is used inside the async function in order to temporary hault the execution until the promise is resolved or rejected. if  is not used an await function it returns an promise. This is harder to read .
ex :-
    async function checkData(){
    console.log("Starting the operation");

    let data = await fetch("https://jsonplaceholder.typicode.com/posts")
    let new_data = data.json();

    console.log("data for operation :",new_data)

}
checkData();
console.log("Operation is completed")
Here I have used await function , when executing the function it haults the process to load the data , once the data is loaded only "data for operation" console is logged.

4. In  a callback function a function is passed as an argument to another function to be executed, for an example 
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


In this example I have executed a accepting  function called  fetchingdata with a function called "callback" as a parameter .When 'fetchingdata' is called data is created with delay of 3 seconds with the use of setTimeout . Then the call back function  handleData2 is executed console log is displayed . 

5.   

console.log("Start");

setTimeout(() => {
    console.log("Timeout Callback");
}, 0);

Promise.resolve().then(() => {
    console.log("Promise Resolved");
});

console.log("End");

Here Synchronous code like  console.log("Start") and console.log("End") are executed first . Then the  "promise Resolved" is displayed due microstask queue . Asynchronous functions like setTimeout is displayed lastly .
Therefore the output look like this ,
            1. Start
            2. End
            3.Promise solved
            4.Timeout Callback

6. 
 function delayedGreeting(name_callback){
    setTimeout(()=>{
        let name = "Kavindu";
        name_callback(name);
    },2000)
}

function greet(name){
    console.log("Welcome !",name);

}
delayedGreeting(greet);



