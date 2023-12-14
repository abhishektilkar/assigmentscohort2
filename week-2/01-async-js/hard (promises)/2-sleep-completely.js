/*
 * Write a function that halts the JS thread (make it busy wait) for a given number of milliseconds.
 * During this time the thread should not be able to do anything else.
 * the function should return a promise just like before
 */

async function sleep(milliseconds) {
    return new Promise((resolve) => {
      const startTime = Date.now();
  
      // Busy-wait loop to delay execution
      while (Date.now() - startTime < milliseconds) {
        // Do nothing, wait until the time has elapsed
      }
  
      resolve(); // Resolve the promise after the specified time
    });
}
  
module.exports = sleep;
