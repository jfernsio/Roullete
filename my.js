const  betTypeSelect = document.getElementById('bet-type');
const  betNumber = parseInt(document.getElementById('bet-number').value);
const betAmount = parseInt(document.getElementById('bet-amount').value);
const spinButton = document.getElementById('spin-button');
const reultDiv = document.getElementById('result');
const resetBtn =  document.getElementById('reset');





console.log(parseInt(Math.random() * 5));


const spin = () => {
    const bet = betTypeSelect.value;
    // const betNo = betNumber;
    // const betAmt = parseInt(betAmount.value, 10);


    console.log(betAmount);
    console.log(bet);
    console.log(betNumber);


    if (isNaN(betAmount) || betAmount <=0) {
        reultDiv.textContent = 'Invalid bet please try again!';

    }

    if(bet === 'number' && (isNaN(betNumber) || betNumber <1 || betNumber > 36)) {
        reultDiv.textContent = 'invalid number bet plase place a bet betwwen 1 and 36';
    }

    reultDiv.textContent = 'Spinning the roulette wheel.....';

    const winNo = parseInt(Math.random()* 5);
    let win = false;
    if (bet === 'even' && winNo === 2) {
       win = true;
    }
    let payput = 0;
    if(win) {
        payput = betAmount*36;
    }
    
    if(win) {
        reultDiv.textContent += `Congrats ypu won $${payput}!`; 
    }
    else {
        reultDiv.textContent += `You lost rghe bet`;
    }
}

const reset = () => {

    // document.getElementById('bet-amount').value = "Enter bet number/row/co";
    // document.getElementById('bet-number').value = " ";
  
}

spinButton.addEventListener('click',spin);
resetBtn.addEventListener('click',reset);
