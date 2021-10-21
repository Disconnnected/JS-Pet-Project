// tạo biến getElement chung, sau ko phải gõ nhiều lần
const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);

// lấy ra các node của các element cần dùng
const tabsElement = $$('.tab-item');
const panesElement = $$('.tab-pane');
const lineElement = $('.line');


// lặp qua các tab
tabsElement.forEach((tab, index) => {

    // tạo biến pane và gán giá trị của pane với index của tab nào đó vừa được click
    const pane = panesElement[index];

    // tại sao ở trên dùng arrow function được mà ở dưới ko dùng
    // dùng được nhưng ko gọi đến this được
    tab.onclick = function () {

        // nếu trong function có class nào có trạng thái là active, thì remove nó đi
        $('.tab-item.active').classList.remove('active');
        $('.tab-pane.active').classList.remove('active');

        // thêm class active vào khi mà sự kiện bấm đến 1 element
        // ngoài method .add thì còn những method nào nữa
        this.classList.add('active');
        pane.classList.add('active');

        // lấy ra tab nào đang active
        const tabActive = $('.tab-item.active');

        //set thuộc tính left và width của line bằng với left và width của cái tabactive luôn
        lineElement.style.left = tabActive.offsetLeft + 'px';
        lineElement.style.width = tabActive.offsetWidth + 'px';
    };
})
















