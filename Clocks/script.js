// Sử dụng Javascript để làm một cái đồng hồ kỹ thuật số là một dự án nhỏ tương đối dễ dàng để thực hành với các biến và các vòng lặp if đơn giản.

clockElement = document.querySelector('.clock');

hours = 0;
minutes = 0;
seconds = 0;

let showTime = () => {
    setInterval(() => {
        const date = new Date();
        seconds = date.getSeconds();
        minutes = date.getMinutes();
        hours = date.getHours();

        if (seconds < 10) {
            seconds = '0' + seconds;
        }
        if (minutes < 10) {
            minutes = '0' + minutes;
        }

        clockElement.innerHTML = `Time now is
                                    ${hours} : ${minutes} : ${seconds}`
    }, 1000);
}

showTime();












