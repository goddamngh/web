// 1.1 Простой счётчик counter(n)
let simpleInterval = null;

function runSimpleCounter() {

    const outputDiv = document.getElementById('simpleCounterOutput');
    if (simpleInterval) clearInterval(simpleInterval);
    
    let n = parseInt(document.getElementById('counterInput').value);
    if (isNaN(n)) n = 5;
    
    outputDiv.innerHTML = `Счёт: ${n}`;
    
    let current = n;
    simpleInterval = setInterval(() => {
        if (current <= 0) {
            clearInterval(simpleInterval);
            simpleInterval = null;
            outputDiv.innerHTML += `<span style="color: #ff88e7">Стоп. Финальное значение: ${current}</span>`;
        } else {
            current--;
            outputDiv.innerHTML = `Счёт: ${current}<br>`;
        }
    }, 1000);
}

// 1.2 createCounter(n) - простой счётчик с кнопками
let activeCounter = null;

function createCounter(n) {
    let current = n;       
    let timer = null;      
    
    return {
        start: function() {
            
            if (timer !== null) return;
            
            timer = setInterval(() => {
                if (current > 0) {
                    current--;
                    showValue(current);
                }

                if (current === 0) {
                    clearInterval(timer);
                    timer = null;
                    setButtons(true, false, false);
                }
            }, 1000);
            
            setButtons(false, true, true);
        },
        
        pause: function() {
            if (timer !== null) {
                clearInterval(timer);
                timer = null;
                setButtons(true, true, true);
            }
        },
        
        stop: function() {
            if (timer !== null) {
                clearInterval(timer);
                timer = null;
            }
            current = n; 
            showValue(current);
            setButtons(true, false, false);
        }
    };
}


function showValue(val) {
    document.getElementById('advancedCounterOutput').innerHTML = `Текущее значение: ${val}`;
}

function setButtons(start, pause, stop) {
    document.getElementById('startCounterBtn').disabled = !start;
    document.getElementById('pauseCounterBtn').disabled = !pause;
    document.getElementById('stopCounterBtn').disabled = !stop;
}

function initCounter() {
    let n = parseInt(document.getElementById('createCounterInput').value);
    if (isNaN(n)) n = 10;
    
    if (activeCounter) activeCounter.stop();
    activeCounter = createCounter(n);
    showValue(n);
    setButtons(true, false, false);
}

function startCounter() { if (activeCounter) activeCounter.start(); }
function pauseCounter() { if (activeCounter) activeCounter.pause(); }
function stopCounter() { if (activeCounter) activeCounter.stop(); }






// 2.1 delay(N)
function delay(N) {
    return new Promise(resolve => {
        setTimeout(resolve, N * 1000);
    });
}

function runDelayPromise() {
    const outputDiv = document.getElementById('promiseOutput');
    outputDiv.innerHTML = 'delay(3) запущен... ждём 3 секунды...';
    delay(3).then(() => {
        outputDiv.innerHTML = 'delay(3) завершился! 3 секунды прошли.';
    });
}





// 2.2 Счётчик через delay()
async function runCounterWithDelay() {
    const outputDiv = document.getElementById('promiseOutput');
    let n = 5;
    outputDiv.innerHTML = `Счётчик через delay: ${n}<br>`;
    
    for (let i = n; i >= 0; i--) {
        outputDiv.innerHTML = `Счётчик через delay: ${i}<br>`;
        if (i > 0) await delay(1);
    }
    outputDiv.innerHTML += ' Счётчик завершён!';
}






// 2.3 Первый репозиторий пользователя GitHub
async function getFirstRepo() {
    const outputDiv = document.getElementById('promiseOutput');
    const username = prompt('Введите имя пользователя GitHub:', 'goddamngh');
    if (!username) return;
    
    outputDiv.innerHTML = `Загрузка данных для @${username}...`;
    
    try {
        // первый запрос: получаем инфу о пользователе
        const userResponse = await fetch(`https://api.github.com/users/${username}`);
        if (!userResponse.ok) {
            throw new Error(`Пользователь ${username} не найден (${userResponse.status})`);
        }
        
        // второй запрос: получаем список репозиториев
        const reposResponse = await fetch(`https://api.github.com/users/${username}/repos`);
        if (!reposResponse.ok) {
            throw new Error(`Не удалось получить репозитории (${reposResponse.status})`);
        }
        
        const repos = await reposResponse.json();
        
        if (repos.length === 0) {
            outputDiv.innerHTML = `У пользователя @${username} нет репозиториев.`;
        } else {
            outputDiv.innerHTML = ` Первый репозиторий @${username}: <strong>${repos[0].name}</strong><br>
            Звёзд: ${repos[0].stargazers_count} | Форков: ${repos[0].forks_count}<br>
            ${repos[0].html_url}`;
        }
    } catch (error) {
        outputDiv.innerHTML = `Ошибка: ${error.message}`;
    }
}





// 3 async/await

class HttpError extends Error {
    constructor(response) {
        super(`${response.status} for ${response.url}`);
        this.name = 'HttpError';
        this.response = response;
    }
}

async function loadJson(url) {
    const response = await fetch(url);
    if (response.status == 200) {
        return response.json();
    } else {
        throw new HttpError(response);
    }
}

// Переписал через async/await и цикл вместо рекурсии
async function getGithubUser() {
    const outputDiv = document.getElementById('asyncOutput');
    
    while (true) {
        let name = prompt("Введите логин GitHub:", "goddamngh");
        if (!name) {
            outputDiv.innerHTML = "Операция отменена пользователем.";
            return null;
        }
        
        try {
            const user = await loadJson(`https://api.github.com/users/${name}`);
            alert(`Полное имя: ${user.name || 'нет данных'}.`);
            outputDiv.innerHTML = `Найден пользователь: ${user.name || user.login}<br>
            ${user.email || 'email не указан'}<br>
            ${user.location || 'локация не указана'}<br>
            ${user.html_url}`;
            return user;
        } catch (err) {
            if (err instanceof HttpError && err.response.status == 404) {
                alert("Такого пользователя не существует, пожалуйста, повторите ввод.");
                outputDiv.innerHTML = "Пользователь не найден. Попробуйте снова.";
            } else {
                throw err;
            }
        }
    }
}

async function runAsyncGithubUser() {
    const outputDiv = document.getElementById('asyncOutput');
    outputDiv.innerHTML = "Ожидание ввода...";
    try {
        await getGithubUser();
    } catch (err) {
        console.error(err);
        outputDiv.innerHTML = `Произошла ошибка: ${err.message}`;
    }
}