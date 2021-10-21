/* <h3>Type here to search</h3>
    <input type="text" name="search" id="search" placeholder="Type here to search">
    <div class="box-result">
        <div class="result">kết quả sẽ như thế này</div>
        <div class="result">kết quả sẽ như thế này</div>
        <div class="result">kết quả sẽ như thế này</div>
        <div class="result">kết quả sẽ như thế này</div>
        <div class="result">kết quả sẽ như thế này</div>
        <div class="result">kết quả sẽ như thế này</div>
    </div> */

// element declare
let inputElement = document.querySelector('#search'),
    boxResult = document.querySelector('.box-result'),
    result = document.querySelector('.result')


// database declare
let name = ['An', 'Anh', 'Bình', 'Chung', 'Dung', 'Duc', 'Hanh', 'Hieu', 'Huy', 'Hoang', 'Hong', 'Hung', 'Giang', 'Kien', 'Lien', 'Linh', 'Long', 'Manh', 'Minh', 'Nghia', 'Ngoc', 'Ngan', 'Quang']

let nameConvert;
name = name.sort();

let find = (value) => {
    boxResult.innerHTML = `<div class="result"></div>`;
    for (var i = 0; i < name.length; i++) {
        nameConvert = name[i].toLowerCase()
        if (nameConvert.includes(value)) {
            boxResult.innerHTML += `<div class="result">${name[i]}</div>`
        }
    }
}

inputElement.onkeyup = function () {
    find(inputElement.value)
}

















