let firstNumber = '';
let secondNumber = '';
let simbol='';
let check = '';
let button;
const screen = document.querySelector('#screen')
const display = document.createElement('h3');
display.classList.add('display');
screen.appendChild(display);
const add = function(a, b) {
    return a + b;
   
} 
const sub =  function(a, b) {
    return a - b;
 } 
 const mutiply = function(a, b) {
    return a* b;
 } 
 const divide  = function(a, b) {
    if (a != 0) {
        return a / b;   
    }
  

 } 
 const addNumber = function(number){
    if (typeof firstNumber == 'string') {
        firstNumber += number;
        display.textContent = firstNumber;
    }else{
        secondNumber += number;
        display.textContent = secondNumber;
    }  
}
 const checkOperation = function(check){
    if(simbol === ''){
        simbol=check;
        firstNumber *= 1;
    }else if(!(simbol === '') && secondNumber === '' ){
        display.textContent = 'SYNTAX ERROR'
        clr();
    }else if(!(simbol === '') && !(secondNumber === '')){
        
        secondNumber *= 1;
        firstNumber = operator(simbol,firstNumber,secondNumber);
        display.textContent = firstNumber;
        secondNumber = '';
        simbol='';
        simbol=check;
    }
 }  
  const operator = function(operation, firstN, secondN){
      
      switch (operation) {
            case '+':
               firstN = add(firstN,secondN)
               return firstN;
               
            case '-':
                firstN = sub(firstN,secondN)
                return firstN;
            case '*' :
                firstN = mutiply(firstN,secondN)
                return firstN;
            case '/':
                firstN = divide(firstN,secondN)
                return firstN;   
            default:
                break;
      }
  }
  const clr = function(){
    firstNumber='';
    secondNumber='';
    simbol='';
  }

  const  one = document.querySelector("#one");
  one.addEventListener('click',()=>{
        button = '1';
        addNumber(button);  
  })
  
  const two = document.querySelector("#two");
  two.addEventListener('click',()=>{
        button = '2';
        addNumber(button);  
  }) 

  const three = document.querySelector("#three");
  three.addEventListener('click',()=>{
        button = '3';
        addNumber(button);   
  }) 

  const four = document.querySelector("#four");
  four.addEventListener('click',()=>{
        button = '4';
        addNumber(button);   
  }) 

  const five = document.querySelector("#five");
  five.addEventListener('click',()=>{
        button = '5';
        addNumber(button);   
  }) 

  const six = document.querySelector("#six");
  six.addEventListener('click',()=>{
        button = '6';
        addNumber(button); 
  }) 

  const seven = document.querySelector("#seven");
  seven.addEventListener('click',()=>{
        button = '7';
        addNumber(button);  
  }) 

  const  eight = document.querySelector("#eight");
  eight.addEventListener('click',()=>{
        button = '8';
        addNumber(button);  
  }) 

  const nine = document.querySelector("#nine");
  nine.addEventListener('click',()=>{
        button = '9';
        addNumber(button); 
  }) 

  const cero = document.querySelector("#cero");
  cero.addEventListener('click',()=>{
        button = '0';
        addNumber(button);  
  }) 

  const multiply = document.querySelector("#multiply");
  multiply.addEventListener('click',()=>{
        check = '*';
        checkOperation(check);
  }) 

  const minus = document.querySelector("#minus");
  minus.addEventListener('click',()=>{
        check = '-';
        checkOperation(check);
  }) 

  const plus = document.querySelector("#plus");
  plus.addEventListener('click',()=>{
        check = "+";
        checkOperation(check);
  }) 

  const divi = document.querySelector("#divi");
  divi.addEventListener('click',()=>{
        check = "/";
        checkOperation(check);
  }) 

  const clear = document.querySelector("#clear");
  clear.addEventListener('click',()=>{
      clr();
      display.textContent = '';
  }) 

  const back = document.querySelector("#back");
  back.addEventListener('click',()=>{
      
      if (typeof firstNumber == 'string') {
        firstNumber = firstNumber.substring(0,firstNumber.length-1)
        display.textContent = firstNumber;
    }else{
        secondNumber = secondNumber.substring(0,secondNumber.length-1)
      alert(secondNumber);
    }
  }) 

  const point = document.querySelector("#point");
  point.addEventListener('click',()=>{
      let x;
    if (typeof firstNumber == 'string') {
        x = firstNumber.search('\\.')  
        if (x <= 0) {
            firstNumber += ".";
            display.textContent = firstNumber; 
        }
        
    }else{
        x = secondNumber.search('\\.')
        if (x == -1) {
            secondNumber += ".";
            display.textContent = secondNumber; 
        }
    }  
  }) 

  const result = document.querySelector("#result");
  result.addEventListener('click',()=>{
      if (secondNumber == '' && simbol == '') {
           display.textContent = firstNumber;

      }else if(secondNumber == '' && !(simbol == '')){ 
            display.textContent = 'SYNTAX ERROR'
            clr();
      }
      else{
        secondNumber *= 1;        
        firstNumber = operator(simbol,firstNumber,secondNumber);
        display.textContent = firstNumber;
        secondNumber = '';
        simbol='';
    }
    
    
  }) 