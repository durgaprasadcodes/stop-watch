let sec = 0, min = 0, hr = 0, ms = 0;
let interval = null;
let display = document.getElementById("display");

function start_timer() {
    ms++;

    if (ms === 100) {
        ms = 0;
        sec++;
    }

    if (sec === 60) {
        sec = 0;
        min++;
    }

    if (min === 60) {
        min = 0;
        hr++;
    }

    display.innerHTML = 
        `${String(hr).padStart(2, '0')}:` +
        `${String(min).padStart(2, '0')}:` +
        `${String(sec).padStart(2, '0')}:` +
        `${String(ms).padStart(2, '0')}`;
}

function start() {
    if (interval !== null) return; 
    interval = setInterval(start_timer, 10);
}

function stop_time() {
    clearInterval(interval);
    interval = null;
}

function reset_time() {
    clearInterval(interval);
    interval = null;

    sec = 0;
    min = 0;
    hr = 0;
    ms = 0;

    display.innerHTML = "00:00:00:00";
}
