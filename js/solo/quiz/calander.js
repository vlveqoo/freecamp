let today = new Date();

document.getElementById("yearid").textContent = today.getFullYear();
document.getElementById("monthid").textContent = today.getMonth() + 1;

let todayYear = today.getFullYear();
let todayMonth = today.getMonth();
let firstDayOfMonth = new Date(todayYear, todayMonth, 1);
let nalzanum = firstDayOfMonth.getDay();
let lastDayOfMonth = new Date(todayYear, todayMonth, 0);
let lastDayNum = lastDayOfMonth.getDate();

let nalzacan1 = document.querySelectorAll(".week1 th");
for (i = 0; i + nalzanum < 7; i++) {
  nalzacan1[nalzanum + i].textContent = 1 + i;
}

let nalzacan2 = document.querySelectorAll(".week2 th");
for (i = 0; i < 7; i++) {
  nalzacan2[i].textContent = Number(nalzacan1[6].textContent) + i + 1;
}

let nalzacan3 = document.querySelectorAll(".week3 th");
for (i = 0; i < 7; i++) {
  nalzacan3[i].textContent = Number(nalzacan2[6].textContent) + i + 1;
}

let nalzacan4 = document.querySelectorAll(".week4 th");
for (i = 0; i < 7; i++) {
  nalzacan4[i].textContent = Number(nalzacan3[6].textContent) + i + 1;
}

let nalzacan5 = document.querySelectorAll(".week5 th");
if (nalzacan4[6].textContent != lastDayNum) {
  for (i = 0; i < 7; i++) {
    nalzacan5[i].textContent = Number(nalzacan4[6].textContent) + i + 1;
    if (
      nalzacan5[i].textContent == lastDayNum ||
      nalzacan5[i].textContent >= lastDayNum
    ) {
      break;
    }
  }
}

let nalzacan6 = document.querySelectorAll(".week6 th");
if (nalzacan5[6].textContent != lastDayNum && nalzacan5[6].textContent != "") {
  for (i = 0; i < 7; i++) {
    nalzacan6[i].textContent = Number(nalzacan5[6].textContent) + i + 1;
    if (
      nalzacan6[i].textContent == lastDayNum ||
      nalzacan6[i].textContent >= lastDayNum
    ) {
      break;
    }
  }
}

const todayFix = function () {
  for (i = 0; i < 7; i++) {
    nalzacan1[i].textContent = "";
    nalzacan2[i].textContent = "";
    nalzacan3[i].textContent = "";
    nalzacan4[i].textContent = "";
    nalzacan5[i].textContent = "";
    nalzacan6[i].textContent = "";
  }

  today = new Date(document.querySelector("#dateInput").value);

  document.getElementById("yearid").textContent = today.getFullYear();
  document.getElementById("monthid").textContent = today.getMonth() + 1;
  console.log(today);

  let todayYear = today.getFullYear();
  let todayMonth = today.getMonth();
  let firstDayOfMonth = new Date(todayYear, todayMonth, 1);
  let nalzanum = firstDayOfMonth.getDay();
  let lastDayOfMonth = new Date(todayYear, todayMonth + 1, 0);
  let lastDayNum = lastDayOfMonth.getDate();
  console.log(firstDayOfMonth);
  console.log(lastDayOfMonth);

  nalzacan1 = document.querySelectorAll(".week1 th");
  for (i = 0; i + nalzanum < 7; i++) {
    nalzacan1[nalzanum + i].textContent = 1 + i;
  }

  nalzacan2 = document.querySelectorAll(".week2 th");
  for (i = 0; i < 7; i++) {
    nalzacan2[i].textContent = Number(nalzacan1[6].textContent) + i + 1;
  }

  nalzacan3 = document.querySelectorAll(".week3 th");
  for (i = 0; i < 7; i++) {
    nalzacan3[i].textContent = Number(nalzacan2[6].textContent) + i + 1;
  }

  nalzacan4 = document.querySelectorAll(".week4 th");
  for (i = 0; i < 7; i++) {
    nalzacan4[i].textContent = Number(nalzacan3[6].textContent) + i + 1;
  }

  nalzacan5 = document.querySelectorAll(".week5 th");
  if (nalzacan4[6].textContent != lastDayNum) {
    for (i = 0; i < 7; i++) {
      nalzacan5[i].textContent = Number(nalzacan4[6].textContent) + i + 1;
      if (
        nalzacan5[i].textContent == lastDayNum ||
        nalzacan5[i].textContent >= lastDayNum
      ) {
        break;
      }
    }
  }

  nalzacan6 = document.querySelectorAll(".week6 th");
  if (nalzacan5[6].textContent != lastDayNum) {
    for (i = 0; i < 7; i++) {
      nalzacan6[i].textContent = Number(nalzacan5[6].textContent) + i + 1;
      if (
        nalzacan6[i].textContent == lastDayNum ||
        nalzacan6[i].textContent >= lastDayNum
      ) {
        break;
      }
    }
  }
};
