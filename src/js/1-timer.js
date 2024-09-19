import flatpickr from "flatpickr";
import "flatpickr/dist/flatpickr.min.css";
import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";

const dateTimePicker = document.getElementById('datetime-picker');
const startBtn = document.querySelector('button[data-start]');
const daysElem = document.querySelector('[data-days]');
const hoursElem = document.querySelector('[data-hours]');
const minutesElem = document.querySelector('[data-minutes]');
const secondsElem = document.querySelector('[data-seconds]');

let userSelectedDate = null;
let timerInterval = null;

const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    const selectedDate = selectedDates[0];
    if (selectedDate <= new Date()) {
      iziToast.error({
        title: 'Error',
        message: 'Please choose a date in the future',
      });
      startBtn.disabled = true;
    } else {
      userSelectedDate = selectedDate;
      startBtn.disabled = false;
    }
  },
};

flatpickr(dateTimePicker, options);

startBtn.addEventListener('click', () => {
  if (userSelectedDate) {
    startTimer(userSelectedDate);
    startBtn.disabled = true;
    dateTimePicker.disabled = true;
  }
});

function startTimer(endDate) {
  timerInterval = setInterval(() => {
    const currentTime = new Date();
    const timeDiff = endDate - currentTime;

    if (timeDiff <= 0) {
      clearInterval(timerInterval);
      updateTimerUI(0, 0, 0, 0);
      iziToast.success({
        title: 'Success',
        message: 'The countdown has ended!',
      });
      dateTimePicker.disabled = false;
      return;
    }

    const time = convertMs(timeDiff);
    updateTimerUI(time.days, time.hours, time.minutes, time.seconds);
  }, 1000);
}

function updateTimerUI(days, hours, minutes, seconds) {
  daysElem.textContent = addLeadingZero(days);
  hoursElem.textContent = addLeadingZero(hours);
  minutesElem.textContent = addLeadingZero(minutes);
  secondsElem.textContent = addLeadingZero(seconds);
}

function addLeadingZero(value) {
  return String(value).padStart(2, '0');
}

function convertMs(ms) {
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  const days = Math.floor(ms / day);
  const hours = Math.floor((ms % day) / hour);
  const minutes = Math.floor(((ms % day) % hour) / minute);
  const seconds = Math.floor((((ms % day) % hour) % minute) / second);

  return { days, hours, minutes, seconds };
}