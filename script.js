function clearDisplay() {
    document.getElementById('display').value = '';
}

function appendToDisplay(value) {
    document.getElementById('display').value += value;
}

function clearScientificDisplay() {
    document.getElementById('scientific-display').value = '';
}

function appendToScientificDisplay(value) {
    document.getElementById('scientific-display').value += value;
}

function calculateResult() {
    try {
      const expression = document.getElementById('display').value;
      const result = eval(expression);
      document.getElementById('display').value = result;
    } catch (error) {
      document.getElementById('display').value = 'Error';
    }
}

function calculateScientificResult() {
    try {
      const expression = document.getElementById('scientific-display').value;
      const result = eval(expression);
      document.getElementById('scientific-display').value = result;
    } catch (error) {
      document.getElementById('scientific-display').value = 'Error';
    }
}

function removeLastCharacter() {
    const display = document.getElementById('display');
    display.value = display.value.slice(0, -1);
}

function removeLastScientificCharacter() {
    const display = document.getElementById('scientific-display');
    display.value = display.value.slice(0, -1);
}

function toggleCalculatorMode() {
    const modeSelect = document.getElementById('calculator-mode');
    const selectedMode = modeSelect.value;
    const basicCalculator = document.querySelector('.calculator');
    const scientificCalculator = document.querySelector('.scientific-calculator');

    basicCalculator.style.display = selectedMode === 'basic' ? 'grid' : 'none';
    scientificCalculator.style.display = selectedMode === 'scientific' ? 'grid' : 'none';

    clearDisplay();
    clearScientificDisplay();
}