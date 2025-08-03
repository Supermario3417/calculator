function clr() {
    document.getElementById("result").value="";
}

function display(inputValue) {
    document.getElementById("result").value+=inputValue;
}

function equate() {
    var x = document.getElementById("result").value;
    var y = eval(x);
    document.getElementById("result").value = y;
}

document.addEventListener('keydown', (event) => {
    if (event.key === '1') {
        display('1');
    }
    if (event.key === '2') {
        display('2');
    }
    if (event.key === '3') {
        display('3');
    }
    if (event.key === '4') {
        display('4');
    }
    if (event.key === '5') {
        display('5');
    }
    if (event.key === '6') {
        display('6');
    }
    if (event.key === '7') {
        display('7');
    }
    if (event.key === '8') {
        display('8');
    }
    if (event.key === '9') {
        display('9');
    }
    if (event.key === '0') {
        display('0');
    }
    if (event.key === '.') {
        display('.');
    }
    if (event.key === '+') {
        display('+');
    }
    if (event.key === '-') {
        display('-');
    }
    if (event.key === '*') {
        display('*');
    }
    if (event.key === '/') {
        display('/');
    }
    if (event.key === '=' || event.key === 'Enter') {
        equate();
    }
    if (event.key === 'Backspace' || event.key === 'Delete') {
        clr();
    }
});