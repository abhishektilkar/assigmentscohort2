
function getCurrentTime() {
    const now = new Date();
    const hours = now.getHours().toString().padStart(2, '0');
    const minutes = now.getMinutes().toString().padStart(2, '0');
    const seconds = now.getSeconds().toString().padStart(2, '0');
  
    const currentTime = `${hours}:${minutes}:${seconds}`;
    console.log(currentTime)//return currentTime;
}

setInterval(getCurrentTime, 1000);


  