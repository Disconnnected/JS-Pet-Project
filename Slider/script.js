const slider = document.querySelectorAll('.slider')
let currentSlider = 0;

let control = (num) => {
    currentSlider += num;
    if (currentSlider == slider.length) {
        currentSlider = 0;
    }
    if (currentSlider == -1) {
        currentSlider = slider.length - 1
    }
    for (var i = 0; i < slider.length; i++) {
        slider[i].classList.remove('active')
    }
    slider[currentSlider].classList.add('active')

}

