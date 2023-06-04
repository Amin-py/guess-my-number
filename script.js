// random secret number from 1 - 20
let secret = Math.trunc(Math.random() * 20 + 1);

// variables
let score = 20;
let highscore = 0;

// check function
const check = () => {
    // user guess input
    let guess = Number(document.querySelector('.guess').value);
    console.log(guess);
    // player win
    if (guess === secret) {
        score += 10;
        document.querySelector('.number').textContent = secret;
        document.querySelector('.message').textContent = "✅ Well Played!";
        document.querySelector('body').style.backgroundColor = '#18bd32';
        document.querySelector('.number').style.width = '30rem';
        document.querySelector('.score').textContent = score;
        document.querySelector('.guess').disabled = true;
        document.querySelector('.check').disabled = true;

        // player lose
    } else if (guess !== secret && guess > 0 && guess < 21) {
        document.querySelector('.message').textContent = guess > secret ? "‼️ Too High!" : "‼️ Too Low";
        score -= 5;
        document.querySelector('.score').textContent = score;
        if (score === 0) {
            document.querySelector('.score').textContent = score;
            document.querySelector('.message').textContent = "🚫 You Lost!\nTry Again.";
            document.querySelector('body').style.backgroundColor = '#931c00';
            document.querySelector('.number').textContent = '😢';
            document.querySelector('.guess').disabled = true;
            document.querySelector('.check').disabled = true;
            document.querySelector('.continue').disabled = true;

        } // invalid number
    } else {
        document.querySelector('.message').textContent = "❌ Invalid Number!";
    }
};

// continue function
const continuebtn = () => {
    if (highscore < score) {
        highscore = score;
        document.querySelector('.highscore').textContent = highscore;
    };
    secret = Math.trunc(Math.random() * 20 + 1);
    document.querySelector('.number').textContent = '?';
    document.querySelector('.guess').disabled = false;
    document.querySelector('.check').disabled = false;
    document.querySelector('.guess').value = 0;
    document.querySelector('body').style.backgroundColor = '#222';
    document.querySelector('.number').style.width = '15rem';
    document.querySelector('.message').textContent = "Start guessing...";
};


// check event
document.querySelector('.check').addEventListener('click', check);

// continue event
document.querySelector('.continue').addEventListener('click',
    continuebtn);

// again function
const again = () => {
    if (highscore < score) {
        highscore = score;
        document.querySelector('.highscore').textContent = highscore;
    };
    score = 20;
    secret = Math.trunc(Math.random() * 20 + 1);
    document.querySelector('.number').textContent = '?';
    document.querySelector('.message').textContent = "Start guessing...";
    document.querySelector('body').style.backgroundColor = '#222';
    document.querySelector('.number').style.width = '15rem';
    document.querySelector('.guess').disabled = false;
    document.querySelector('.check').disabled = false;
    document.querySelector('.continue').disabled = false;
    document.querySelector('.guess').value = 0;
    document.querySelector('.score').textContent = 20;
}

// again event
document.querySelector('.again').addEventListener('click', again);
