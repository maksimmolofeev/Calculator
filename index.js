const resultCalc = document.querySelector('.answer__string');
const iconsCalc = document.querySelector('.buttons');
const answerRes = document.querySelector('.answer__finish');



let a = '';
let b = '';
let sign = '';


const arrayNum = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0'];
const arraySign = ['/', '*', '-', '+', '='];

iconsCalc.addEventListener('click', (event)=> {
    const { target } = event;

    if (target !== iconsCalc) {
        const { textContent } = target;

        if (textContent === '=') {

            const result = eval(resultCalc.textContent);
            answerRes.innerHTML = result
        } else {
            resultCalc.innerHTML += textContent;
            console.log(resultCalc);
        }
        
    }
    
})

