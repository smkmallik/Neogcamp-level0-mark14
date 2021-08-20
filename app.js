var initialPriceInput = document.querySelector('#inital-price-input');
var quantityInput = document.querySelector('#quantity-input');
var currentPriceInput = document.querySelector('#current-price-input');
var calculateButton = document.querySelector('#calculate-button');
var outputDiv = document.querySelector('#output-container');


function calculateProfitAndLoss(initial, quantity, current) {
    if(current > initial) {
        console.log('Profit!');
        var profit = (current - initial) * quantity;
        var profitPercentage = (profit/initial) * 100;
        console.log('The profit is ' + profit + 'and profit percentage is' + profitPercentage.toFixed(2)); 
        showOutput(`The profit is ${profit} and profit percentage is ${profitPercentage.toFixed(2)}`);
        showColor('green');
    } else if(initial > current) {
        console.log('Loss!');
        var loss = (initial - current) * quantity;
        var lossPercentage = (loss / initial) * 100;
        console.log('The loss is ' + loss + 'and loss percentage is' + lossPercentage.toFixed(2));
        showOutput(`The loss is ${loss} and loss percentage is ${lossPercentage.toFixed(2)}`);
        showColor('red');
    } else if(initial === current) {
        console.log('No pain No gain and No gain No pain');
        showOutput(`No pain no gain and no gain no pain`);
        showColor('blue');
    } 
    if((current && initial && quantity) === 0) {
        showOutput('Please fill out all the fields!');
        showColor('orange');
    }
}

function showOutput(message){
    outputDiv.innerHTML = message;
}

function showColor(bgColor){
    outputDiv.style.color = bgColor;
}

function submitHandler() {
    var initial = Number(initialPriceInput.value); 
    console.log(initial);
    var quantity = Number(quantityInput.value);
    console.log(quantity);
    var current = Number(currentPriceInput.value);
    console.log(current);


    calculateProfitAndLoss(initial, quantity, current);
}

calculateButton.addEventListener('click', submitHandler);