
const dayjs = require('dayjs');
    
const timeNow = dayjs().format('hh:mm:ss');
const dateNow = dayjs().format('dddd, LL');
    
// console.log(timeNow);
// console.log(dateNow);
displayDate(timeNow, dateNow);

function displayDate(time, date) {
    const container = document.getElementsByClassName('container')[0];
    
    const timePara = document.createElement('p')
    timePara.setAttribute('id', 'time-para');
    timePara.innerText = time;
    
    const datePara = document.createElement('p')
    datePara.setAttribute('id', 'date-para');
    datePara.innerText = date;
    container.appendChild(timePara);
    container.appendChild(datePara);
}

