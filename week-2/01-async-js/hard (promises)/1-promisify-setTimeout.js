/*
    Write a function that returns a promise that resolves after n seconds have passed, where n is passed as an argument to the function.
*/

function wait(n) {
    return new Promise((resolve, reject) => {
        // Simulating an asynchronous operation with setTimeout
        setTimeout(() => {
          // Resolve the promise after 2 seconds
          resolve();
        }, n*1000)
    });
}
//wait(1);
module.exports = wait;
