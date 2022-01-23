setInterval(()=>{
    date = new Date();
    htime = date.getHours();
    mtime = date.getMinutes();
    stime = date.getSeconds();
    hRotation = 30 * htime + mtime / 2;
    mRotation = 6 * mtime;
    sRotation = 6 * stime;

    hour.style.transform = `rotate(${hRotation}deg)`;
    minute.style.transform = `rotate(${mRotation}deg)`;
    second.style.transform = `rotate(${sRotation}deg)`;
},1000);