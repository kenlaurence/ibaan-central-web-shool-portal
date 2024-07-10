var announcementModal = document.getElementById("modal-announcement");
var announcementBtn = document.getElementById("modalOpen-announcement");
var announcementSpan = document.getElementsByClassName("close-button")[0];

announcementBtn.onclick = function () {
  announcementModal.style.display = "block";
};

announcementSpan.onclick = function () {
  announcementModal.style.display = "none";
};

window.onclick = function (event) {
  if (event.target == announcementModal) {
    announcementModal.style.display = "none";
  }
};

// student records

var studentrecordsModal = document.getElementById("modal-studentrecords");
var studentrecordsBtn = document.getElementById("modalOpen-studentrecords");
var studentrecordsSpan = document.getElementsByClassName("close-button")[1];

studentrecordsBtn.onclick = function () {
  studentrecordsModal.style.display = "block";
};

studentrecordsSpan.onclick = function () {
  studentrecordsModal.style.display = "none";
};

window.onclick = function (event) {
  if (event.target == studentrecordsModal) {
    studentrecordsModal.style.display = "none";
  }
};

// calendar
var calendarModal = document.getElementById("modal-calendar");
var calendarBtn = document.getElementById("modalOpen-calendar");
var calendarSpan = document.getElementsByClassName("close-button")[2];

calendarBtn.onclick = function () {
  calendarModal.style.display = "block";
};

calendarSpan.onclick = function () {
  calendarModal.style.display = "none";
};

window.onclick = function (event) {
  if (event.target == calendarModal) {
    calendarModal.style.display = "none";
  }
};
