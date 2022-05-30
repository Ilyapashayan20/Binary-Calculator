const inputValue = document.getElementById('numbers')
const resultDom = document.getElementById('resultDOM')

let result = []
let total = 0
let binary = 2

function calc(){
    if(inputValue.value.length < 1 ){
       console.log('err');
       inputValue.classList.add('validation-active')
    }
    else{
        const number = parseFloat(inputValue.value) 
        const splitNumbers = Array.from(String(number), Number);
        let reverseNumbers = splitNumbers.reverse()
        reverseNumbers.forEach(function(num,i){
        let a = num * Math.pow(binary, i)
        result.push(a)
        })
        result.forEach(function(num){
            total += num
        })
        console.log(total)
        console.log(result)
        resultDom.innerHTML = total
        result = []
        total = 0  
        inputValue.classList.remove('validation-active')
        inputValue.value = ''
    }
}

function zero(num){
    inputValue.value += num
}
function one(num){
    inputValue.value += num
}

