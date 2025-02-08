let startTime, timerInterval;
let puzzlesCompleted = localStorage.getItem('puzzlesCompleted') ? parseInt(localStorage.getItem('puzzlesCompleted')) : 0;

function startTimer() {
    const timerData = localStorage.getItem('timerData');
    if (timerData) {
        startTime = parseInt(timerData, 10);
    } else {
        startTime = Date.now();
        localStorage.setItem('timerData', startTime);
    }
    timerInterval = setInterval(updateTimer, 1000);
    updateClock();
}

function updateTimer() {
    let elapsedTime = Math.floor((Date.now() - startTime) / 1000);
    document.getElementById('time').innerText = elapsedTime;
}

function updateClock() {
    let now = new Date();
    let hours = now.getHours().toString().padStart(2, '0');
    let minutes = now.getMinutes().toString().padStart(2, '0');
    let seconds = now.getSeconds().toString().padStart(2, '0');
    document.getElementById('clock').innerText = `${hours}:${minutes}:${seconds}`;
    setTimeout(updateClock, 1000);
}

function checkAnswer(puzzleNumber, correctAnswer, nextPage) {
    let userAnswer = document.getElementById('puzzle' + puzzleNumber).value.trim().toLowerCase();
    let resultElement = document.getElementById('result' + puzzleNumber);
    
    if (userAnswer === correctAnswer) {
        if (!resultElement.innerHTML.includes("✅")) {
            resultElement.innerHTML = "✅ Correct!";
            resultElement.style.color = "lightgreen";
            puzzlesCompleted++;
            localStorage.setItem('puzzlesCompleted', puzzlesCompleted);
            setTimeout(() => {
                window.location.href = nextPage;
            }, 2000);  // Redirect after 2 seconds
        }
    } else {
        resultElement.innerHTML = "❌ Try again!";
        resultElement.style.color = "red";
    }

    if (puzzlesCompleted === 4) {
        clearInterval(timerInterval);
        let finalTime = Math.floor((Date.now() - startTime) / 1000);
        alert("🎉 Congratulations! You completed all puzzles in " + finalTime + " seconds!");
        localStorage.removeItem('timerData');
        localStorage.removeItem('puzzlesCompleted');
    }
}
