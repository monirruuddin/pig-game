'use strict';
//select the query
const score0Ele = document.querySelector("#score--0");
const score1Ele = document.querySelector("#score--1");
const currentEle0 = document.querySelector("#current--0");
const currentEle1 = document.querySelector("#current--1");
const player0El = document.querySelector(".player--0");
const player1El = document.querySelector(".player--1");
const diceElm = document.querySelector(".dice");
const hiddenCls = document.querySelector(".hidden");
const btnNew = document.querySelector(".btn--new");
const btnRoll = document.querySelector(".btn--roll");
const btnHold = document.querySelector(".btn--hold");


// add the value 0

let score = [0,0]
score0Ele.textContent = 0;
score1Ele.textContent = 0;
let currentscore= 0;
let activePlayer= 0;
let playing = true;

let switchPlayer = function(){
    document.getElementById(`current--${activePlayer}`).textContent=0;
        currentscore= 0;
        activePlayer = activePlayer === 0 ? 1:0;
        player0El.classList.toggle("player--active");
        player1El.classList.toggle("player--active");
}


//  set the dice hidden at present
diceElm.classList.add("hidden");

if(playing){
btnRoll.addEventListener('click',function(){
    // Rolling
    let  dice =Math.trunc(Math.random() * 6)+1;
    diceElm.src = `dice-${dice}.png`;
    
    // remove class
    diceElm.classList.remove('hidden');
    
    // check !1
    if(dice != 1){
        currentscore +=dice;
        document.getElementById(`current--${activePlayer}`).textContent=currentscore;
    }else{      
        switchPlayer();   
    }
});
}else{
    playing=false;
}

if(playing){
btnHold.addEventListener('click',function(){
    score[activePlayer] += currentscore;
    document.getElementById(`score--${activePlayer}`).textContent=score[activePlayer];

    if(score[activePlayer] >=20){
        document.querySelector(`.player--${activePlayer}`).classList.add('player--winner');
        document.querySelector(`.player--${activePlayer}`).classList.remove('player--active');
        document.querySelector(`#name--${activePlayer}`).innerHTML= `Player ${activePlayer+1} Win`;
        btnRoll.className += " hidden";
        btnHold.className += " hidden";
        diceElm.className += " hidden";
    }else{
        switchPlayer();
    }

});
}else{
    playing= false;
}

btnNew.addEventListener('click',function(){
    score0Ele.textContent = 0;
    score1Ele.textContent = 0;
    currentEle0.textContent= 0;
    currentEle1.textContent= 0;
    player0El.classList.remove("player--winner");
    player1El.classList.remove("player--winner");
    player0El.classList.add("player--active");
    player1El.classList.remove("player--active");
    btnRoll.classList.remove("hidden");
    btnHold.classList.remove("hidden");
    
});