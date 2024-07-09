// const openBtn = document.getElementById("openModal");
// const closeBtn = document.getElementById("closeModal");
// const modal = document.getElementById("modal");

// openBtn.addEventListener("click", () => {
//   modal.classList.add("open");
// });

// closeBtn.addEventListener("click", () => {
//   modal.classList.remove("open");
// });

// modal schedule

// // Get the modal
// var modal = document.getElementById("modal-schedule");

// // Get the button that opens the modal
// var btn = document.getElementById("modalOpen-schedule");

// // Get the <span> element that closes the modal
// var span = document.getElementsByClassName("close-button-schedule")[0];

// // When the user clicks the button, open the modal
// btn.onclick = function () {
//   modal.style.display = "block";
// };

// // When the user clicks on <span> (x), close the modal
// span.onclick = function () {
//   modal.style.display = "none";
// };

// // When the user clicks anywhere outside of the modal, close it
// window.onclick = function (event) {
//   if (event.target == modal) {
//     modal.style.display = "none";
//   }
// };

// // grades
// // Get the modal
// var modal = document.getElementById("modal-grades");

// // Get the button that opens the modal
// var btn = document.getElementById("modalOpen-grades");

// // Get the <span> element that closes the modal
// var span = document.getElementsByClassName("close-button-grades")[0];

// // When the user clicks the button, open the modal
// btn.onclick = function () {
//   modal.style.display = "block";
// };

// // When the user clicks on <span> (x), close the modal
// span.onclick = function () {
//   modal.style.display = "none";
// };

// // When the user clicks anywhere outside of the modal, close it
// window.onclick = function (event) {
//   if (event.target == modal) {
//     modal.style.display = "none";
//   }
// };

// Schedule modal functionality
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

// Grades modal functionality
var enrollmentModal = document.getElementById("modal-enrollment");
var enrollmentBtn = document.getElementById("modalOpen-enrollment");
var enrollmentSpan = document.getElementsByClassName("close-button")[1];

enrollmentBtn.onclick = function () {
  enrollmentModal.style.display = "block";
};

enrollmentSpan.onclick = function () {
  enrollmentModal.style.display = "none";
};

window.onclick = function (event) {
  if (event.target == enrollmentModal) {
    enrollmentModal.style.display = "none";
  }
};

// dashboard

var dashboardModal = document.getElementById("modal-dashboard");
var dashboardBtn = document.getElementById("modalOpen-dashboard");
var dashboardSpan = document.getElementsByClassName("close-button")[2];

dashboardBtn.onclick = function () {
  dashboardModal.style.display = "block";
};

dashboardSpan.onclick = function () {
  dashboardModal.style.display = "none";
};

window.onclick = function (event) {
  if (event.target == dashboardModal) {
    dashboardModal.style.display = "none";
  }
};

// student records

var studentrecordsModal = document.getElementById("modal-studentrecords");
var studentrecordsBtn = document.getElementById("modalOpen-studentrecords");
var studentrecordsSpan = document.getElementsByClassName("close-button")[3];

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
