const time1 = document.getElementById("time");
const greeting1= document.getElementById("greeting");
const name1= document.getElementById("name");
const day1=document.getElementById("day");



name1.addEventListener("keypress",setName);
name1.addEventListener("blur",setName);

function showtime(){
let today= new Date();
let hour =today.getHours();
let min=today.getMinutes();
let sec=today.getSeconds();
let date=today.toDateString();

const period = hour >=12? 'PM':'AM';

hour=hour%12 || 12;

time1.innerHTML=`${addZero(hour)}<span>:</span>${addZero(min)}<span>:</span>${addZero(sec)} ${period}`;

day1.innerHTML=`${date}`;
setTimeout(showtime,1000);
}
function addZero(n){
    return(parseInt(n,10)<10?'0':" ")+n;
}

function setGreeting(){
    let today=new Date();
    let hour=today.getHours();
    if(hour<12){
        document.body.style.backgroundImage='url("../image/morning.jpg")';
        greeting1.innerHTML='Good Morning';
        document.body.style.color="black";
    }
    else if(hour<18){
        document.body.style.backgroundImage='url("../image/afternoon.jpg")';
        greeting1.innerHTML='Good Afternoon';
        document.body.style.color="Navy";
    }
    else{
        document.body.style.backgroundImage='url("../image/evening.jpg")';
        greeting1.innerHTML='Good Evening';
        document.body.style.color="white";
    }
}

function getName(){
if(localStorage.getItem("myName1")===null){
    name1.innerHTML="[Name]";
}
else{
    name1.innerHTML=localStorage.getItem("myName1");
}
}

function setName(e){
    if(e.type==="keypress"){
        if(e.keyCode == 13){
        localStorage.setItem("myName1",e.target.innerHTML);
        name1.blur();
        }
    }
    else{
        localStorage.setItem("myName1",e.target.innerHTML);
    }
}

showtime();
setGreeting();
getName();