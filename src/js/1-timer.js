import flatpickr from "flatpickr";
import "flatpickr/dist/flatpickr.min.css";
import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";

let userSelectedDates;
const iziToastOptions = {
    title: 'Error',
    titleColor: '#fff',
    titleSize: '16px',
    titleLineHeight:'24px',
    message: 'Illegal operation',
    messageColor:'#fff',
    messageSize: '16px',
    messageLineHeight: '24px',
    position: 'topRight',
    backgroundColor: '#EF4040',
    iconUrl:'/img/toast-rejected.svg',
}

const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
    onClose(selectedDates) {
        const now = Date.now();
      if (selectedDates[0] <= now) {
        btnStart.disabled = true;
        iziToast.error(iziToastOptions)
      } else {
        userSelectedDates = selectedDates[0];
        btnStart.disabled = false;
      }
        console.log(selectedDates[0]);
        
  },
};
const inputPicker = document.querySelector('#datetime-picker');
const fp = flatpickr(inputPicker, options);
const btnStart = document.querySelector('button[data-start]');
btnStart.disabled = true;
const daysUser = document.querySelector('span[data-days]');
const hoursUser = document.querySelector('span[data-hours]');
const minutesUser = document.querySelector('span[data-minutes]');
const secondsUser = document.querySelector('span[data-seconds]');

btnStart.addEventListener('click', function (e) {
    const endDate = new Date(userSelectedDates).getTime();
    btnStart.disabled = true;
    inputPicker.disabled = true;
    const timer = setInterval(function () {
        const nowDate = new Date().getTime()
        const difference = endDate - nowDate;
        const objDate = convertMs(difference);
        const { days, hours, minutes, seconds } = objDate

        if (days < 10) {
            daysUser.textContent = `0${days}`;
        } else {
            daysUser.textContent = days;
        }
        if (hours < 10) {
            hoursUser.textContent = `0${hours}`;
        } else {
            hoursUser.textContent = hours;
        }
        if (minutes < 10) {
            minutesUser.textContent = `0${minutes}`;
        } else {
            minutesUser.textContent = minutes;
        }
        if (seconds < 10) {
            secondsUser.textContent = `0${seconds}`;
        } else {
            secondsUser.textContent = seconds;
        }
        
        if (difference < 0) {
            clearInterval(timer);
            daysUser.textContent = "00";
            hoursUser.textContent = "00";
            minutesUser.textContent = "00";
            secondsUser.textContent = "00";
            inputPicker.disabled = false;
        }
    }, 1000)
    
})






function convertMs(ms) {
  // Number of milliseconds per unit of time
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  // Remaining days
  const days = Math.floor(ms / day);
  // Remaining hours
  const hours = Math.floor((ms % day) / hour);
  // Remaining minutes
  const minutes = Math.floor(((ms % day) % hour) / minute);
  // Remaining seconds
  const seconds = Math.floor((((ms % day) % hour) % minute) / second);

  return { days, hours, minutes, seconds };
}
