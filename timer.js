// timer.js
let startTime;

window.onload = function () {
    startTime = new Date().getTime();
    localStorage.setItem('startTime', startTime);
};

function getElapsedTime() {
    const currentTime = new Date().getTime();
    const elapsedTime = currentTime - startTime;
    return elapsedTime;
}
