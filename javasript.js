let hr=document.querySelector(".hh")
let mn=document.querySelector(".mm")
let sc=document.querySelector(".ss")

const date=new Date()
let  hours=date.getHours();
let  Minutes=date.getMinutes();
let  Seconds=date.getSeconds();

let rohr=(30*hours)+(Minutes/2)
let romn=6*Minutes;
let rosc=6*Seconds;

const watchtime=()=>{
    const date=new Date()
    let  hours=date.getHours();
    let  Minutes=date.getMinutes();
    let  Seconds=date.getSeconds();

    let rohr=(30*hours)+(Minutes/2);
    let romn=(6*Minutes)+(Seconds/10);
    let rosc=(Seconds*6);

    hr.style.transform=`rotate(${rohr}deg)`    
    mn.style.transform=`rotate(${romn}deg)`  
    sc.style.transform=`rotate(${rosc}deg)`  
}
setInterval(watchtime,1000)