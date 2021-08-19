function makeRandom() {
    const rand = Math.round(Math.random() * 10000);
    return rand;
}
function generate(pin) {
    const pinBox = document.getElementById('generated_pin');
    pinBox.value = pin;
}
// function getElement(id){
//    return (id);
// }
function updateUserInput(val) {
    const userInputField = document.getElementById('userInputField');
    const userInputText = userInputField.value;
    if (val == '<') {
        userInputField.value = userInputText.slice(0, (userInputText.length - 1));
    }
    else if (val == 'C') {
        userInputField.value = '';
    }
    else {
        userInputField.value = userInputText + val;
    }
}


document.getElementById('generate_btn').addEventListener('click', function (e) {
    const randNum = makeRandom();
    generate(randNum);
});

const numBtn = document.getElementsByClassName('numBtn');
for (const btn of numBtn) {
    btn.addEventListener('click', function () {
        updateUserInput(btn.innerText);
    });
}
function show(id) {
    document.getElementById(id).style.display = 'block';
}
function hide(id) {
    document.getElementById(id).style.display = 'none';
}
function count(isMatch) {
    const counter = document.getElementById('count');

    if (isMatch) {
        counter.innerText = 3;
    }
    else {
        const countText = counter.innerText;
        const countVal = parseInt(countText);

        if (countVal != 0) {
            const newCountVal = countVal - 1;
            counter.innerText = newCountVal;
            if (newCountVal == 0) {
                document.getElementById('pinCheck').setAttribute('disabled', true);
            }
        }
    }



}
function check() {
    const userInputField = document.getElementById('userInputField');
    const userInput = parseInt(userInputField.value);
    const pinBox = document.getElementById('generated_pin');
    const pinValue = parseInt(pinBox.value);
    if (userInput == pinValue) {
        show('match');
        hide('noMatch');
        count(true);
    }
    else {
        show('noMatch');
        hide('match');
        count(false);
    }
}
document.getElementById('pinCheck').addEventListener('click', function () {
    check();
});
document.getElementById('userInputField').addEventListener('change', function () {
    check();
});

