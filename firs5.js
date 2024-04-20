const betNumber = document.getElementById('bet-number');
const betAmount = document.getElementById('bet-amount');
const uh = document.getElementById('result');
const betType = document.getElementById('bet-type');
const ghum = document.getElementById('spin-button');

let red = [1,3,5,7,9,12,14,16,18,21,23,25,27,30,32,34,36];
let black =  [2,4,6,8,10,11,13,15,17,19,20,22,24,26,28,29,31,33,35];

const check = () => {
    const Bet = betType.value;  
     
 const betNo = parseInt(betNumber.value,10);
 const betAmt = parseInt(betAmount.value,10);
// console.log(betAmt);
// uh.textContent = Bet;

 if(isNaN(betAmt) || betAmt <= 0) {
    uh.textContent = 'Invalid Bet Amount....';
    return; 
 }
 if (Bet === 'number' && (isNaN(betNo) || betNo < 1 || betNo > 36)) {
    uh.textContent = 'Invalid number bet. Please enter a number between 1 and 36.';
    return;
}

if ((Bet === 'row' || Bet === 'column') && (isNaN(betNo) || betNo < 1 || betNo > 3)) {
    result.textContent = 'Invalid row/column bet. Please enter a number between 1 and 3.';
    return;
}

// setTimeout(()=> {
    uh.textContent = 'Spning the wheel....';
// },1000); 

 setTimeout(()=> {
    const winingNO = Math.floor(Math.random()*37);
console.log(winingNO);

    let win = false;
    if(Bet === 'number' && betNo === winingNO) {
        win = true;
    }
    else if (Bet ==='even' && winingNO % 2 === 0 && winingNO !== 0) {
        win = true;
        console.log(winingNO);
    }
    else if (Bet ==='odd' && winingNO % 2 === 1 && winingNO !== 0) {
        win = true;
        console.log(winingNO);
    }

    let  test = (red[(Math.floor(Math.random() *red.length))]);
    // console.log('red',test);
    let blackTest = (black[(Math.floor(Math.random()*black.length))]);
    // console.log(blackTest);

     if (Bet === 'red' && test === winingNO && winingNO !== 0) {
            win = true;
            // console.log('red', test);
            // console.log('winin', winingNO);   
    }
    else if (Bet === 'black' && blackTest === winingNO && winingNO !== 0) {
        win = true;
        // console.log('black',blackTest);
        // console.log('winin', winingNO);   
}


    let payout = 0;
    if(win) {
     if(Bet ==='number') {
        payout = betAmt *36;
     }
        else if(Bet === 'even' || Bet === 'odd'){
            payout = betAmt*2;
        }
        else if(Bet === 'red' || Bet === 'black') {
            payout = betAmt*5;
        }
    }
    
    if(win) {
        uh.textContent = `you won $${payout}`;
    } else {
        uh.textContent = 'You lost!';
    }
    
 } ,3750);
}

ghum.addEventListener('click',check);
