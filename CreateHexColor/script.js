// Yêu cầu bài toán là khi click vào button thì tạo ra các mã màu hex ngẫu nhiên, thay đổi màu nền trang web bằng mã màu này và in ra màn hình

var hexArray = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0', 'A', 'B', 'C', 'D', 'E', 'F']
let hexCode = '';
let hexCodeGenerator = '';
let button = document.querySelector('.btn')
let hex_code = document.querySelector('.hex-code')
let background = document.querySelector('body')

let hexCodeFunction = () => {
    for (var i = 0; i < 6; i++) {
        hexCode += hexCodeGenerator = hexArray[Math.floor(Math.random() * 16)]
    }
    return hexCode;
}

button.onclick = function () {
    hexCode = '';
    hexCodeFunction()
    background.style.backgroundColor = '#' + hexCode;
    hex_code.innerHTML = '#' + hexCode
}






















