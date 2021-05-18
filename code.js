const oper = document.querySelectorAll('.operators div');

const num = document.querySelectorAll('.numbers div');
const clear = document.getElementById('clear');
let input = document.getElementById('screen');
let buttons = document.querySelectorAll('button');
let resultVal = '';


for (item of buttons) {
    item.addEventListener('click', function (e) {
        let buttonText = e.target.innerText;
        console.log('Button text is ', buttonText);

        // if(input.value >= 65 && input.value <= 122){
        //     input.value = '';
        // }

        if (buttonText == 'x') {
            buttonText = '*';
            resultVal += buttonText;
            input.value = resultVal;
        }
        //    else if (buttonText == '&divide;') {
        //         buttonText = '/';
        //         resultVal += buttonText;
        //         input.value = resultVal;
        //     }

        else if (buttonText == 'AC') {
            resultVal = "";
            input.value = resultVal;
        }

        else if (buttonText == '=') {
            input.value = eval(resultVal);
            resultVal = '';
        }

        else {
            resultVal += buttonText;
            input.value = resultVal;
        }
    });


}