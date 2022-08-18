function getValueById(idValue){
    document.getElementById(idValue).addEventListener('click', function () {
        const calValue = document.getElementById('calculatorDisplay');
        const inputFromButton = document.getElementById(idValue).innerText;
        const userInput = calValue.value+inputFromButton;
        calValue.value = userInput;
    })
}
getValueById('9');
getValueById('8');
getValueById('7');
getValueById('6');
getValueById('5');
getValueById('4');
getValueById('3');
getValueById('2');
getValueById('1');
getValueById('0');
getValueById('+');
getValueById('-');
getValueById('*');
getValueById('/');

document.getElementById('=').addEventListener('click', function(){
    const getInput  = document.getElementById('calculatorDisplay').value;
    const showOutput = document.getElementById('showOutput');
    let result = 0;
    // const indexOfInput = getInput;
    if(getInput.indexOf('+')){
        const makeArray = getInput.split('+');
        showOutput.value = parseFloat(makeArray[0]) + parseFloat(makeArray[1]);
    }
    else if (getInput.indexOf('-')) {
        const makeArray = getInput.split('-');
        showOutput.value = parseFloat(makeArray[0]) - parseFloat(makeArray[1]);
    }
    else if (getInput.indexOf('*')) {
        const makeArray = getInput.split('*');
        showOutput.value = parseFloat(makeArray[0]) * parseFloat(makeArray[1]);
    }
    else if (getInput.indexOf('/')) {
        const makeArray = getInput.split('/');
        showOutput.value = parseFloat(makeArray[0]) / parseFloat(makeArray[1]);
    }
    else{
        showOutput.value ='';
    }
})

document.getElementById('cs').addEventListener('click', function(){
    document.getElementById('calculatorDisplay').value = '';
    document.getElementById('showOutput').value = '';

})