// 1.1
function task1() {
    let str = document.getElementById('arr1').value;
    let arr = str.split(',').map(Number);
    let min = arr[0];
    let max = arr[0];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] < min) min = arr[i];
        if (arr[i] > max) max = arr[i];
    }
    let rez = max - min;
    document.getElementById('res1').value = rez;
}

// 1.2
function task2() {
    let str = document.getElementById('arr2').value;
    let arr = str.split(',').map(Number);
    let uniq = [];
    for (let i = 0; i < arr.length; i++) {
        if (uniq.indexOf(arr[i]) === -1) {
            uniq.push(arr[i]);
        }
    }
    document.getElementById('res2').value = uniq.join(',');
}

// 1.3
function task3() {
    let data = [
        {id: 1, isDone: true},
        {id: 2, isDone: false},
        {id: 3, isDone: true}
    ];
    let result = [];
    for (let i = 0; i < data.length; i++) {
        if (data[i].isDone === true) {
            result.push(data[i]);
        }
    }
    let out = '';
    for (let i = 0; i < result.length; i++) {
        out += 'id:' + result[i].id + ' ';
    }
    document.getElementById('res3').value = out;
}

// 2.1
function task4() {
    let str = document.getElementById('arr3').value;
    let arr = str.split(',').map(Number);
    let porog = Number(document.getElementById('threshold').value);
    let rez = [];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > porog) {
            rez.push(arr[i]);
        }
    }
    document.getElementById('res4').value = rez.join(',');
}

// 2.2
function task5() {
    let arr = JSON.parse(document.getElementById('arr4').value);
    document.getElementById('res5').value = arr.flat(Infinity).join(',');
}

// 3.1
function task6() {
    let str = document.getElementById('arr5').value;
    let arr = str.split(',').map(Number);
    let count = 0;
    for (let i = 0; i < arr.length; i++) {
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[i] + arr[j] === 0) {
                count++;
            }
        }
    }
    document.getElementById('res6').value = count;
}

// 3.2
function task7() {
    let str = document.getElementById('arr5').value;
    let arr = str.split(',').map(Number);
    let count = 0;
    for (let i = 0; i < arr.length; i++) {
        for (let j = i + 1; j < arr.length; j++) {
            for (let k = j + 1; k < arr.length; k++) {
                if (arr[i] + arr[j] + arr[k] === 0) {
                    count++;
                }
            }
        }
    }
    document.getElementById('res7').value = count;
}