const date = new Date();
const appointments = new Set();
appointments.add(+new Date('2021-2-6'));
appointments.add(+new Date('2021-3-23'));
 
const renderCalendar = () => {
  date.setDate(1);
 
  const monthDays = document.querySelector(".days");
 
  const lastDay = new Date(
    date.getFullYear(),
    date.getMonth() + 1,
    0
  ).getDate();
 
  const prevLastDay = new Date(
    date.getFullYear(),
    date.getMonth(),
    0
  ).getDate();
 
  const firstDayIndex = date.getDay();
 
  const lastDayIndex = new Date(
    date.getFullYear(),
    date.getMonth() + 1,
    0
  ).getDay();
 
  const nextDays = 7 - lastDayIndex - 1;
 
  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
 
  document.querySelector(".date h1").innerHTML = months[date.getMonth()];
 
  document.querySelector(".date p").innerHTML = new Date().toDateString();
 
  let days = "";
 
  for (let x = firstDayIndex; x > 0; x--) {
    let d = Date(date.getFullYear(), date.getMonth() - 1, 
      prevLastDay - x + 1);
    if (appointments.has(+d)) {
      days += `<div class="prev-date appointment">${prevLastDay - x + 1}</div>`;
    } else {
      days += `<div class="prev-date">${prevLastDay - x + 1}</div>`;
    }
  }
 
 
  for (let i = 1; i <= lastDay; i++) {
    let current_date = new Date(date.getFullYear(), date.getMonth(), i);
    
    let isToday = (i === new Date().getDate() 
      && date.getMonth() === new Date().getMonth());
    let hasAppointment = appointments.has(+current_date);
 
    if (hasAppointment && isToday) {
      days += `<div class="appointment today">${i}</div>`;
    } else if (hasAppointment) {
      days += `<div class="appointment">${i}</div>`;
    } else if (isToday) {
      days += `<div class="today">${i}</div>`;
    } else {
      days += `<div>${i}</div>`;
    }
  }
 
  for (let j = 1; j <= nextDays; j++) {
    let d = new Date(date.getFullYear(), date.getMonth() + 1, j);
    if (appointments.has(+d)) {
      days += `<div class="next-date appointment">${j}</div>`;
    } else {
      days += `<div class="next-date">${j}</div>`;
    }
    monthDays.innerHTML = days;
  }
  
};
 
 
 
document.querySelector(".prev").addEventListener("click", () => {
  date.setMonth(date.getMonth() - 1);
  renderCalendar();
});
 
document.querySelector(".next").addEventListener("click", () => {
  date.setMonth(date.getMonth() + 1);
  renderCalendar();
});
 
renderCalendar();
 