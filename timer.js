// timer.js
let startTime;

function startTimer() {
    startTime = new Date().getTime();
    localStorage.setItem('startTime', startTime);
}

function getElapsedTime() {
    const currentTime = new Date().getTime();
    const startTime = localStorage.getItem('startTime');
    const elapsedTime = currentTime - startTime;
    return elapsedTime;
}

window.onload = function () {
    if (!localStorage.getItem('startTime')) {
        startTimer();
    }
};
