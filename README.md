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
