class Calculator {
    constructor() {

        //Public properties
        this.displayVal = 0;
        this.operator = [];
        this.decimalState = false;

        //Private properties
        let inputVal, runningTotal = 0;
        let runVal = 0;
        let firstVal, secondVal = 0;


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
        let updateVal = function(input) {
            let inputVal = Number(input)
            if (isNaN(inputVal) == true){
                firstVal = Number
                runVal = 0
            }
            else {
                if (runVal == 0 && input !== 0){
                    runVal = input
                    console.log(runVal)
                }
                else {
                    runVal += input
                }
            }
        }

        let updateDisplay = function(input) {
            let disp= document.querySelector('.display');
            disp.innerHTML = runVal
        }

        //Getter and setter method
        Object.defineProperty(this, 'inputVal', {
            get: function () {
                return inputVal;
            },
            // set: function (value) {
            //     duration = value;
            // }
        })

        //Initiate the object
        this.init = function() {
            //event handler
            let calculate = function(ele) {
                updateVal(ele)
                updateDisplay()
            }

            //event listener
            let main = function(){
                let calc = document.getElementById('calculator');
                let buttons = calc.querySelectorAll('button');
                for (let i = 0; i < buttons.length; i++){
                    buttons[i].addEventListener("click", () => calculate(buttons[i].value))
                };
            }
            main();
        }
    }
}

calc = new Calculator

window.onload = calc.init();










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