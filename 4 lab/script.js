const btn = document.getElementById('btn');

btn.addEventListener('click', function() {
    
    // 1
    let name = "john";
    let admin = name;
    alert("'" + admin + "'");

    // 2
    let a = +prompt("enter the 1 number", 1);
    let b = +prompt("enter the 2 number", 2);
    alert("the sum is " + (a + b));

    // 3
    for (let i = 2; i < 11; i++) {
        alert(i);
    }

    // 4
    // for (let i = 0; i < 3; i++) {
    //     alert( `number ${i}!` );
    // }
    let i = 0;
    while (i < 3) {
        alert( `number ${i}!` );
        i++;
    }


    // 5
    let num;
    while (true) {
        num = prompt("enter a number greater than 100", "");
        if (num === null) {
            break; 
        }
        if (num > 100) {
            break;
        }
    }

    // 6
    let n = +prompt("enter a number for showing prime numbers up to", "");

    for (let i = 2; i <= n; i++) {
        let isPrime = true;
        for (let j = 2; j < i; j++) {
            if (i % j === 0) {
            isPrime = false;
            break;
            }
        }
        if (isPrime) {
            alert(i)
        }
    }
});