console.log("Start");

setTimeout(() => {
    console.log("Timeout Callback");
}, 0);

Promise.resolve().then(() => {
    console.log("Promise Resolved");
});

console.log("End");


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