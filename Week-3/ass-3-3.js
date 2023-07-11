function createIncrement() {
    let count = 0;
    
    function increment() {
        count++;
        console.log(count);
    }

    // function message() {
    //     console.log(count);
    // }
    
    function log() {
        console.log(message);
    }

    return [increment, log];
}
const [increment, log] = createIncrement();

increment();
increment();
increment();
log(); 



// function createIncrement() {
//     let count = 0;
    
//     function increment() {
//         count++;
//     }

//     let message = `Count is ${count}`;
    
//     function log() {
//         console.log(message);
//     }

//     return [increment, log];
// }
// const [increment, log] = createIncrement();

// increment();
// increment();
// increment();
// log(); 

//! Question: What is logged?
// The output of the log() function in this case will be "Count is 0".

//! Question: Why?
// In the createIncrement function, there are two inner functions defined: increment and log.
// When createIncrement is called and assigned to [increment, log], it creates a closure where count is a variable local to the createIncrement function and is accessible to the inner functions. The variable message is also defined within the closure and captures the value of count at the time it was declared.
// After calling increment() three times, the count variable is incremented three times, but the message variable does not change since it was assigned the initial value of count (which is 0) when it was declared.
// When log() is called, it logs the value of message to the console, which was set to "Count is 0" when the closure was created. Therefore, "Count is 0" is logged even though count was incremented.