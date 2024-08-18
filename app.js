let gameseq=[];
let userseq=[];

let btns=["orange","blue","green","red"];

let started =false;
let level=0;
let h2 =document.querySelector("h2");

document.addEventListener("keypress",function(){
    if(started==false){
    started=true;
    setTimeout(levelup,700);
    }
});

function btnFlash(btn){
    btn.classList.add("flash");
    setTimeout(function(){
        btn.classList.remove("flash");
    },255);
}

function userFlash(btn){
    btn.classList.add("userflash");
    setTimeout(function(){
        btn.classList.remove("userflash");
    },255);
}


function levelup(){
    userseq=[];
    level++;
    h2.innerText=`level ${level}`;

    let randIdx=Math.floor(Math.random()*4);
    let randColor=btns[randIdx];
    let randBtn=document.querySelector(`.${randColor}`);
    gameseq.push(randColor);
    btnFlash(randBtn);
}

function btnPress(){
    let btn=this;
    userFlash(btn);
    userColour=btn.getAttribute("id");
    userseq.push(userColour);
    checkAns(userseq.length-1);
}

function checkAns(idx){
    if(userseq[idx]===gameseq[idx]){
        if(userseq.length==gameseq.length){
            setTimeout(levelup,1000);
        }
    }
    else{
        h2.innerHTML=`Game Over! your score was <b>${level}</b> <br>press any key to start`;
        document.querySelector("body").style.backgroundColor="red";
        setTimeout(function(){
            document.querySelector("body").style.backgroundColor="white";
        }, 150);
        reset();
    }
}

let allBtns=document.querySelectorAll(".btn");
for(btn of allBtns){
    btn.addEventListener("click",btnPress);
}

function reset(){
    started=false;
    userseq=[];
    gameseq=[];
    level=0;
}