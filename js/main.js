class Calculator {
    constructor() {

        //Public properties
        this.runVal = 0;
        this.displayVal = 0;
        this.operator = [];

        //Private properties
        let runningTotal, inputValue = 0;
        let numButtons = [0, 1, 2, 3, 4, 5, 6, 7, 8 ,9,]
        let operators = ['plus', 'minus', 'divide', 'multiply', 'equal']
        let inputElements  = document.querySelectorAll('.input')
        // let inputValues = getInputValues(inputElements)

        //Public methods
        this.add = function() {
            this.displayVal += this.runVal;
            this.runVal = 0;
            this.operator += '+'
        }
        this.subtract = function() {
            this.displayVal -= this.runVal;
            this.runVal = 0;
            this.operator.push('-');
        }
        this.multiply = function() {
            this.displayVal *= this.runVal;
            this.runVal = 0;
            this.operator.push('*');

        }
        this.divide = function() {
            this.displayVal /= this.runVal;
            this.runVal = 0;
            this.operator.push('/');
        }
        this.calcTotal = function() {
            
        }
    

        //Private Methods
        let updateDisplay = function() {
            let dispVal = document.querySelector('.display');
            dispVal.innerHTML = this.val;
        }


        //Initiate the object
        this.init = function() {
            //event handler
            let calculate = function() {
                console.log('button pressed')
            }

            //event listener
            (function(){
                let calc = document.getElementById('#calculator');
                let buttons = calc.querySelectorAll('input');
                for (let i = 0; i < buttons.length; i++){
                    buttons[i].addEventListener("click", calculate());
                };
            });

        }
    }
}

calc = new Calculator

window.onload = calc.init;










// let calculator = {
//     // ... your code ...

//     // Public Methods
//     read() {
//         this.val1 = +prompt('First Value?', 0);
//         this.val2 = +prompt('Second Value?', 0);
//     },

//     sum() {
//         return this.val1 + this.val2;
//     },

//     mul() {
//         return this.val1 * this.val2;
//     },

//   };
  
//   calculator.read();
//   alert( calculator.sum() );
//   alert( calculator.mul() );