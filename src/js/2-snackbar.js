import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";
const formEl = document.querySelector('.form');
const inputDelayEl = document.querySelector('input[name="delay"]');
const radioButtonsEL = document.querySelectorAll('input[name="state"]');
const btnEl = document.querySelector('button[type="submit"]');

let selectedOption;
let radioState;
radioButtonsEL.forEach(button => {
    button.addEventListener('change', () => {
        if (button.value === "fulfilled") {
            selectedOption = true;
        } else {
            selectedOption = false;
        }
    })
})

const makePromise = ({value, delay, shouldResolve}) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (shouldResolve) {
                resolve(value);
            } else {
                reject(value);
            }
        }, delay)
    })
}

formEl.addEventListener('submit', (event) => {
    event.preventDefault();
    const selectedRadioButtonEl = document.querySelector('input[name="state"]:checked');
    const delayPr = parseFloat(inputDelayEl.value);
    if (selectedRadioButtonEl) {
        const radioState = selectedRadioButtonEl.value.charAt(0).toUpperCase() + selectedRadioButtonEl.value.slice(1);
        makePromise({ value: delayPr, delay: delayPr, shouldResolve: selectedOption })
        .then(value => iziToast.show({
            message: `${radioState} promise in ${value}ms`,
            messageColor:'#fff',
            backgroundColor: "#59A10D",
            progressBarColor: '#B5EA7C',
            position: "topRight",
            iconUrl: './img/toast-fulfilled.svg',
        }))
        .catch(error => iziToast.show({
            message: `${radioState} promise in ${error}ms`,
            messageColor:'#fff',
            backgroundColor: "#EF4040",
            progressBarColor: '#FFBEBE',
            position: "topRight",
            iconUrl:'./img/toast-rejected.svg',
        }))
        formEl.reset();
    } 
})
