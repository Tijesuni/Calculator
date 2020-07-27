class Calculator{
    constructor(previousOperandTextElement, currentOperandTextElement){
        this.previousOperandTextElement = previousOperandTextElement;
        this.currentOperandTextElement = currentOperandTextElement;
        this.clear()
    }
    clear(){
        this.previousoperand = '';
        this.currentoperand = '';
        this.operation = undefined;
    }
    delete(){

    }
    appendNumber(number){
        if(number === '.' && this.currentoperand.includes('.')) return
        this.currentoperand = this.currentoperand.toString() + number.toString()
    }
    chooseOperation(operation){
        if(this.currentoperand === '')return
        if(this.previousoperand !== ''){
            this.compute()
        }
        this.operation = operation;
        this.previousoperand = this.currentoperand;
        this.currentoperand = '';
    }
    compute(){

    }
    updateDisplay(){
        this.currentOperandTextElement.innerText = this.currentoperand;
        this.previousOperandTextElement.innerText = this.previousoperand;
    }
}
const numberButtons = document.querySelectorAll('[data-number]');
const curveButtons = document.querySelectorAll('[data-curve]');
const operationButtons = document.querySelectorAll('[data-operation]');
const equalButtons = document.querySelector('[data-equal]');
const clearButtons = document.querySelector('[data-clear]');
const deleteButtons = document.querySelector('[data-delete]');
const previousOperandTextElement = document.querySelector('[data-previous-operand]');
const currentOperandTextElement = document.querySelector('[data-current-operand]');


const calculator = new Calculator(previousOperandTextElement, currentOperandTextElement);
numberButtons. forEach(button => {
    button.addEventListener("click", ()  => {
        calculator.appendNumber(button.innerText)
        calculator.updateDisplay()
    });
});
operationButtons. forEach(button => {
    button.addEventListener("click", ()  => {
        calculator.chooseOperation(button.innerText)
        calculator.updateDisplay()
    });
});

curveButtons. forEach(button => {
    button.addEventListener("click", () => {
        calculator.appendNumber(button.innerText)
        calculator.updateDisplay()
    });
});






