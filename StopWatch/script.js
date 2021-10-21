// Đồng hồ bấm giờ cần có ba nút để tương tác với người dùng:


// Start: Bấm để bắt đầu đếm giờ
// Stop: Dừng đếm giờ
// Reset: Reset đồng hồ về thời điểm ban đầu (vd: 00:00)

const secondElement = document.querySelector('#seconds');
const tensElement = document.querySelector('#tens');
const startButton = document.querySelector('#button-start');
const stopButton = document.querySelector('#button-stop');
const resetButton = document.querySelector('#button-reset');

let minutes = 0;
let seconds = 0;

// cái này học trên mạng đấy :D
let interval;

printTime = (minutes, seconds) => {
    if (minutes < 10) {
        minutes = '0' + minutes;
    }
    if (seconds < 10) {
        seconds = '0' + seconds;
    }
    // return minutes, seconds;

    tensElement.innerHTML = minutes;
    secondElement.innerHTML = seconds
}

startButton.onclick = function () {
    // không có cái này thì bấm bao nhiêu lần nó gọi bấy nhiêu lần, tức là thời gian tua nhanh bấy nhiêu lần
    clearInterval(interval)
    interval = setInterval(() => {

        seconds++;
        if (seconds > 59) {
            minutes++;
            seconds = 0;
        }
        printTime(minutes, seconds)

    }, 1000);
}

stopButton.onclick = function () {
    clearInterval(interval);
}

resetButton.onclick = function () {
    //không có cái này thì reset xong nó vẫn chạy :v
    clearInterval(interval)
    seconds = 0;
    minutes = 0;
    printTime(minutes, seconds)
}





// let secondCount = 00;
// let tenCount = 00;
// let i = 0;
// let run;
// let interval;

// let timeCounter = function (i) {

//     return tenCount, secondCount;
// }

// let printTime = function (tenCount, secondCount) {
//     let printTen = tenCount < 10 ? '0' + tenCount : tenCount;
//     let printSecond = secondCount < 10 ? '0' + secondCount : secondCount;

//     tensElement.innerHTML = printTen;
//     secondElement.innerHTML = printSecond;
// }

// let pressStart = function () {
//     timeCounter(i);
//     printTime(tenCount, secondCount);
//     i++;
// }

// let pressStop = function () {
//     clearInterval(run);
// }

// let pressReset = function () {

// }

// // pressStart();
// startButton.onclick = () => {
//     run = setInterval(pressStart, 1000);
//     startButton.disabled = true;
// }
// stopButton.onclick = () => {
//     pressStop();
//     startButton.disabled = false;
// }







