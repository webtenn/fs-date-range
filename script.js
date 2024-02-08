function getPastDateInDays(n) {
    let date = new Date(); // get the current date
    date.setDate(date.getDate() - n); // subtract 'n' days
    return date;
}

function getPastDate(n) {
    let date = new Date();
    let year = date.getFullYear();
    let month = date.getMonth();
  
    if (month < n) {
        let diff = n - month;
        let yearDiff = Math.floor(diff / 12) + 1;
        year -= yearDiff;
        month = 12 - (diff % 12);
    } else {
        month -= n;
    }
  
    date.setFullYear(year);
    date.setMonth(month);
    return date;
}

const dateToday = new Date().toISOString().substr(0, 10);
const pastWeek = getPastDateInDays(7).toISOString().substr(0, 10);
const pastMonth = getPastDate(1).toISOString().substr(0, 10);
const pastYear = getPastDate(12).toISOString().substr(0, 10);

let frominput = document.querySelector("[wt-input='fromdate']");
let toinput = document.querySelector("[wt-input='todate']");

document.querySelector("[wt-btn='pastweek']").addEventListener('click', function() {
  frominput.value = pastWeek.toString();
  toinput.value = dateToday.toString();
  frominput.dispatchEvent(new Event('input', { bubbles: true }));
  toinput.dispatchEvent(new Event('input', { bubbles: true }));
});

document.querySelector("[wt-btn='pastmonth']").addEventListener('click', function() {
  frominput.value = pastMonth.toString();
  toinput.value = dateToday.toString();
  frominput.dispatchEvent(new Event('input', { bubbles: true }));
  toinput.dispatchEvent(new Event('input', { bubbles: true }));
});

document.querySelector("[wt-btn='pastyear']").addEventListener('click', function() {
  frominput.value = pastYear.toString();
  toinput.value = dateToday.toString();
  frominput.dispatchEvent(new Event('input', { bubbles: true }));
  toinput.dispatchEvent(new Event('input', { bubbles: true }));
});