// Password Generator
function generatePassword() {
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()_+';
    let password = '';
    const length = 12;

    for (let i = 0; i < length; i++) {
        password += characters.charAt(Math.floor(Math.random() * characters.length));
    }

    document.getElementById('passwordDisplay').innerText = password;
}

// Task Tracker
function addTask() {
    const taskInput = document.getElementById('taskInput');
    const taskText = taskInput.value.trim();

    if (taskText === '') return;

    const li = document.createElement('li');
    li.textContent = taskText;
    li.onclick = () => {
        li.style.textDecoration = 'line-through';
        li.style.opacity = '0.5';
    };

    document.getElementById('taskList').appendChild(li);
    taskInput.value = '';
}


// Unit Converter
function convertUnits() {
    const value = parseFloat(document.getElementById('unitInput').value);
    const unitType = document.getElementById('unitType').value;
    let result = '';

    if (isNaN(value)) {
        result = 'Please enter a valid number.';
    } else {
        if (unitType === 'inToCm') {
            result = `${value} inches = ${(value * 2.54).toFixed(2)} cm`;
        } else if (unitType === 'cmToIn') {
            result = `${value} cm = ${(value / 2.54).toFixed(2)} inches`;
        }
    }

    document.getElementById('conversionResult').innerText = result;
}
