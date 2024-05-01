function currTime(){
    let d = new Date();
    let time = d.toLocateTimeString();
    console.log(time);
}

setInterval(currTime, 1000);