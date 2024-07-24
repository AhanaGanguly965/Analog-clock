const hourel=document.querySelector(".hour");
const minel=document.querySelector(".minute");
const secel=document.querySelector(".second");
function Clock(){
    const date= new Date();
    const hour=date.getHours();
    const min=date.getMinutes();
    const sec=date.getSeconds();
    console.log(hour,min,sec);
    const hourdeg=(hour/12)*360;
    hourel.style.transform =`rotate(${hourdeg}deg)`;
    const mindeg=(min/60)*360;
    minel.style.tranform=`rotate(${mindeg}deg)`;
    const secdeg=(sec/60)*360;
secel.style.transform =`rotate(${secdeg}deg)`;
    
}

setInterval(Clock,1000);