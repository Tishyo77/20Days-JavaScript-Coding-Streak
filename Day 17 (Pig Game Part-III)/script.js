'use strict';

let scores, activePlayer, currentScore, playing;

const score0El = document.querySelector('#score--0');
const score1El = document.querySelector('#score--1');
const current0El = document.querySelector('#current--0');
const current1El = document.querySelector('#current--1');
const diceEl = document.querySelector('.dice');
const btnNew = document.querySelector('.btn--new');
const btnRoll = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');
const player0El = document.querySelector('.player--0');
const player1El = document.querySelector('.player--1');

const initialize = function ()
{    
    scores = [0, 0];
    activePlayer = 0;
    currentScore = 0;
    playing = true;

    diceEl.classList.add('hidden');
    player0El.classList.remove('player--winner');
    player1El.classList.remove('player--winner');
    player0El.classList.add('player--active');
    player1El.classList.remove('player--active');

    score0El.textContent = 0;
    score1El.textContent = 0;
    current0El.textContent = 0;
    current1El.textContent = 0;
}

initialize();

const swapPlayer = function ()
{
    currentScore = 0;
    document.querySelector(`#current--${activePlayer}`).textContent = 0;
    activePlayer = (activePlayer-1)*(-1);
    player0El.classList.toggle('player--active');
    player1El.classList.toggle('player--active');
}

btnRoll.addEventListener('click', function()
{
    if(playing)
    {
        let dice = Math.trunc(Math.random()*6) + 1;
        diceEl.classList.remove('hidden');
        diceEl.src = `dice-${dice}.png`;
        if(dice !== 1)
        {
            currentScore += dice;
            document.querySelector(`#current--${activePlayer}`).textContent = currentScore;
        }
        else
            swapPlayer();
    }
})

btnHold.addEventListener('click', function()
{
    if(playing)
    {
        scores[activePlayer] += currentScore;
        document.querySelector(`#score--${activePlayer}`).textContent = scores[activePlayer];
        if(scores[activePlayer] >= 100)
        {
            document.querySelector(`.player--${activePlayer}`).classList.add('player--winner');
            document.querySelector(`.player--${activePlayer}`).classList.remove('player--active');
            playing = false;
            diceEl.classList.add('hidden');
            document.querySelector(`#current--${activePlayer}`).textContent = 0;
        }
        else
            swapPlayer();
    }
})

btnNew.addEventListener('click', initialize);