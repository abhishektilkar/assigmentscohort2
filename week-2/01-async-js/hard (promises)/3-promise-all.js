/*
 * Write 3 different functions that return promises that resolve after t1, t2, and t3 seconds respectively.
 * Write a function that uses the 3 functions to wait for all 3 promises to resolve using Promise.all,
 * Return a promise.all which return the time in milliseconds it takes to complete the entire operation.
 */

function wait1(t) {
return new Promise((resolve) => {
setTimeout(() => {
  resolve();
}, t);
});
}

function wait2(t) {
return new Promise((resolve) => {
setTimeout(() => {
  resolve();
}, t);
});
}

function wait3(t) {
return new Promise((resolve) => {
setTimeout(() => {
  resolve();
}, t);
});
}

function calculateTime(t1, t2, t3) {
const startTime = Date.now();
//console.log(startTime);

// Waiting for all promises to resolve using Promise.all
return Promise.all([wait1(t1*1000), wait2(t2*1000), wait3(t3*1000)]).then(() => {
const endTime = Date.now();
//console.log(endTime-startTime);
return (endTime - startTime); // Return the time taken in milliseconds
});
}

// async function ValidityState1(){
// await calculateTime(1,2,3);
// }

// ValidityState1();




module.exports = calculateTime;
