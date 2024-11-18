
let start = false;
let symonchoose = [];
let userchoose = [];
document.addEventListener("keypress", function(){
    if(start == false){
        start = true;
        console.log("game started");
        levelup();
    }
});
let h4 = document.querySelector('.cfs-h4');
let level = 0;
let button = ['green', 'red', 'yellow', 'blue'];
function levelup(){
    level++;
    userchoose = [];
    h4.innerText = `level: ${level}`;
    let random = Math.floor(Math.random() * 4);
    let randomcolor = button[random];
    let blinkclass = document.querySelector(`.${randomcolor}`);
    symonchoose.push(randomcolor);
    console.log(symonchoose);
    blinkbtn(blinkclass);
}

function blinkbtn(btn){
    btn.classList.add("blink");
    setTimeout(function(){
        btn.classList.remove("blink");
    }, 300);
}


let btns = document.querySelectorAll('.btn');
for(btn of btns){
    btn.addEventListener("click", btnpress);
}
    
function btnpress(){
    let btn = this;
    userblink(btn);
    let userpress = btn.getAttribute('id');
    userchoose.push(userpress);
    console.log(userchoose);
    anscheck(userchoose.length-1);
}

function userblink(btn){
    btn.classList.add("blink");
    setTimeout(function(){
        btn.classList.remove("blink");
    }, 300);
}

function anscheck(index){
    if(userchoose[index] === symonchoose[index]){
        if(userchoose.length==symonchoose.length){
            setTimeout(levelup, 1000);
        }
    }
    else{
        h4.innerText = `Game over! \npress any key to try again\n score = ${level}`;
        reset();
        let body = document.querySelector('.Bod');
        body.classList.add("body");
        setTimeout(function(){ 
            body.classList.remove("body");
        },100);
    }
}

function reset (){
    userchoose = [];
    symonchoose = [];
    level = 0;
    start = false; 
}

