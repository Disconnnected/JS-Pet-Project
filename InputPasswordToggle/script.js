let pw = document.querySelector('#pw'),
    hideBtn = document.querySelector('#hideBtn'),
    i = 0;

hideBtn.onclick = () => {
    if (i % 2 == 1) {
        hideBtn.value = 'Hide'
        pw.type = 'password'
    } else {
        hideBtn.value = 'Show'
        pw.type = 'text'
    }
    i++;
}



