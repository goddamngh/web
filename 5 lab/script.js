const btn1 = document.getElementById('btn1');
const btn2 = document.getElementById('btn2');
const btn3 = document.getElementById('btn3');
const btn4 = document.getElementById('btn4');
const btn5 = document.getElementById('btn5');
const btn6 = document.getElementById('btn6');
const btn7 = document.getElementById('btn7');


function reverseNumber(n) {
    return Number(n.toString().split('').reverse().join(''));
}
btn1.addEventListener('click', function(num) {
    let input = +prompt("Введите число, которое нужно развернуть:", "123");
    
    if (input !== null) {
        let result = reverseNumber(input);
        alert(result);
    }
});

function uniqueSymbol(num) {
    let str = num.toString();
    return [...new Set(str)].join(''); 
}
btn2.addEventListener('click', function() {
    let input = prompt("Введите число, из которого нужно удалить повторяющиеся цифры:", "12321");
    if (input !== null) {
        let result = uniqueSymbol(input);
        alert(result);
    } 
});

function countDigit(num, digit) {
    let str = num.toString();
    let count = 0;
    for (let char of str) {
        if (char === digit.toString()) count++;
    }
    return count;
}
btn3.addEventListener('click', function() {
    let input = prompt("Введите число:", "12321");
    let digit = prompt("Введите цифру, которую нужно посчитать:", "2");
    if (input !== null && digit !== null) {
        let result = countDigit(input, digit);
        alert(result);
    }
});

function maxBinarySequence(num) {
    let n = Number(num);
    let bin = n.toString(2); 
    alert("Двоичный вид: " + bin);
    let matches = bin.match(/0+|1+/g);
    return Math.max(...matches.map(s => s.length));
}
btn4.addEventListener('click', function() {
    let input = prompt("Введите число:", "123");
    if (input !== null) {
        let result = maxBinarySequence(input);
        alert(result);
    }
});

function firstUniqueChar(str) {
    for (let char of str) {
        if (str.indexOf(char) === str.lastIndexOf(char)) {
            return char;
        }
    }
    return "Все повторяются";
}
btn5.addEventListener('click', function() {
    let input = prompt("Введите строку:", "hello");
    if (input !== null) {
        let result = firstUniqueChar(input);
        alert(result);
    }
});

function generateRandomStr(len) {
    const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    let result = "";
    for (let i = 0; i < len; i++) {
        let randomIndex = Math.floor(Math.random() * chars.length);
        result += chars[randomIndex];
    }
    return result;
}
btn6.addEventListener('click', function() {
    let input = prompt("Введите длину строки:", "10");
    if (input !== null) {
        let result = generateRandomStr(input);
        alert(result);
    }
});

btn7.addEventListener('click', function() {
    let input = prompt("Введите строку, из которой нужно удалить повторяющиеся символы:", "ejkrekjwegh");
    if (input !== null) {
        let result = uniqueSymbol(input);
        alert(result);
    }
});

