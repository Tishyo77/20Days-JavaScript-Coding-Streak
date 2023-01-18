'use strict';

let score = Number(document.querySelector('.score').textContent);
let highscore = Number(document.querySelector('.highscore').textContent); 
let num = Math.trunc(Math.random()*100) + 1;

document.querySelector('.check').addEventListener('click', function()
{
    let guess = Number(document.querySelector('.guess').value);
    console.log(guess);
    if(!guess)
        document.querySelector('.message').textContent = '⛔ No Number!';
    else if(guess < 1 || guess > 100)
        document.querySelector('.message').textContent = '❌ Invalid Number!';
    else if(guess === num)
    {
        document.querySelector('.message').textContent = '✅ Correct Guess!';
        document.querySelector('.number').textContent = num;
        document.querySelector('body').style.backgroundColor = '#60b347';
        document.querySelector('.number').style.width = '20rem';
        if(score > highscore)
        {
            highscore = score;
            document.querySelector('.highscore').textContent = highscore;
        }
    }
    else if(guess !== num)
    {
        if(score > 1)
        {
            if(guess < num)
                document.querySelector('.message').textContent = '📉 Too Low!';
            else
                document.querySelector('.message').textContent = '📈 Too High!';
            score--;
            document.querySelector('.score').textContent = score;
        }
        else
        {
            document.querySelector('.message').textContent = '💥 You Lose!';
            document.querySelector('.score').textContent = 0;
            document.querySelector('body').style.backgroundColor = 'red';
        }

    }
})

document.querySelector('.again').addEventListener('click', function()
{
    score = 10;
    num = Math.trunc(Math.random()*100) + 1;
    document.querySelector('.score').textContent = score;
    document.querySelector('.message').textContent = 'Start guessing...';
    document.querySelector('.number').textContent = '?';
    document.querySelector('.guess').value = '';
    document.querySelector('body').style.backgroundColor = '#222';
    document.querySelector('.number').style.width = '15rem';
})
