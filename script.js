// script.js
let xp = 0;
let earnings = 0;
let macdActive = false;
let rsiActive = false;

function handleTap() {
    xp += 1;
    document.getElementById('xp').innerText = `XP: ${xp}`;

    // Показ опыта рядом с тапом (анимация)
    const xpElement = document.createElement('div');
    xpElement.innerText = '+1 XP';
    xpElement.classList.add('xp-animation');
    document.body.appendChild(xpElement);
    setTimeout(() => {
        xpElement.remove();
    }, 1000);
}

function updateEarnings() {
    macdActive = document.getElementById('macd').checked;
    rsiActive = document.getElementById('rsi').checked;

    clearInterval(earningsInterval);

    if (macdActive || rsiActive) {
        earningsInterval = setInterval(() => {
            earnings += (macdActive ? 10 : 0) + (rsiActive ? 4 : 0);
            document.getElementById('earnings').innerText = `Earnings: $${earnings}`;
        }, 3600000); // 1 час
    }
}

function showAlert() {
    alert('Вы ещё не готовы к этому разговору');
}

let earningsInterval;

// Инициализация первой страницы
document.getElementById('main').classList.add('active');
