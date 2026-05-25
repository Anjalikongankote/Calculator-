const display = document.querySelector('#dd');

const button = document.querySelectorAll('button');

button.forEach((item) => {

    item.onclick = () => {

        if (item.id == 'clear') {

            display.innerText = '';

        }

        else if (item.id == 'back-space') {

            let string = display.innerText.toString();

            display.innerText = string.substr(0, string.length - 1);

        }

        else if (display.innerText != '' && item.id == 'equal') {

            display.innerText = eval(display.innerText);

        }

        else if (item.id != 'equal') {

            display.innerText += item.id;

        }
    }
});