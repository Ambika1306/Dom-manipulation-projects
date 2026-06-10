let timeElement=document.getElementById("time");
let dateElement=document.getElementById("date");
let is24Hour=false;
let toggleBtn=document.getElementById("toggle-btn");
function updateTime() {
    const date = new Date();
    
    let hours=date.getHours();
    let minutes=date.getMinutes();
    let seconds=date.getSeconds();

    minutes=String(minutes).padStart(2,'0');
    seconds=String(seconds).padStart(2,'0');

    let ampm="";
    if(!is24Hour){
        ampm=hours>=12?"PM":"AM";
        hours=hours%12;
        if(hours===0){
            hours=12;
        }
    }
    timeElement.innerText=hours+":"+minutes+":"+seconds+ampm;
    let day=String(date.getDate()).padStart(2,"0");
    let month=String(date.getMonth()+1).padStart(2,"0");
    let year=date.getFullYear();
    dateElement.innerText=`${day}/${month}/${year}`;
}
toggleBtn.addEventListener("click",function(){
    is24Hour=!is24Hour;
    if(is24Hour){
        toggleBtn.innerText="Switch to 12-hour format";
    }else{
        toggleBtn.innerText="Switch to 24-hour format"
    }
    updateTime();
})
setInterval(updateTime,1000)
updateTime();



