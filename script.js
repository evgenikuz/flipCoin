let flipTails = document.querySelector('.game__tails');
let flipHeads = document.querySelector('.game__heads');
let flipsAmount = document.querySelector('.result__flips');
let headsAmount = document.querySelector('.result__heads');
let tailsAmount = document.querySelector('.result__tails');

let flips = 0;
let heads = 0;
let tails = 0

let flipCoin = () => {
    flips++;
    flipsAmount.textContent = flips;
    let side = Math.floor(Math.random()*2);
    if (side === 0) {
        flipTails.classList.add('d-none');
        flipHeads.classList.remove('d-none');
        heads++;
        headsAmount.textContent = heads;
    } else if (side === 1) {
        flipHeads.classList.add('d-none');
        flipTails.classList.remove('d-none');
        tails++;
        tailsAmount.textContent = tails;
    }
}

flipHeads.addEventListener('click', flipCoin)
flipTails.addEventListener('click', flipCoin)