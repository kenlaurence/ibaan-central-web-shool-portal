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
var scheduleModal = document.getElementById("modal-schedule");
var scheduleBtn = document.getElementById("modalOpen-schedule");
var scheduleSpan = document.getElementsByClassName("close-button")[0];

scheduleBtn.onclick = function () {
  scheduleModal.style.display = "block";
};

scheduleSpan.onclick = function () {
  scheduleModal.style.display = "none";
};

window.onclick = function (event) {
  if (event.target == scheduleModal) {
    scheduleModal.style.display = "none";
  }
};

// Grades modal functionality
var gradesModal = document.getElementById("modal-grades");
var gradesBtn = document.getElementById("modalOpen-grades");
var gradesSpan = document.getElementsByClassName("close-button")[1];

gradesBtn.onclick = function () {
  gradesModal.style.display = "block";
};

gradesSpan.onclick = function () {
  gradesModal.style.display = "none";
};

window.onclick = function (event) {
  if (event.target == gradesModal) {
    gradesModal.style.display = "none";
  }
};

// School materials

var schoolmaterialsModal = document.getElementById("modal-schoolmaterials");
var schoolmaterialsBtn = document.getElementById("modalOpen-schoolmaterials");
var schoolmaterialsSpan = document.getElementsByClassName("close-button")[2];

schoolmaterialsBtn.onclick = function () {
  schoolmaterialsModal.style.display = "block";
};

schoolmaterialsSpan.onclick = function () {
  schoolmaterialsModal.style.display = "none";
};

window.onclick = function (event) {
  if (event.target == schoolmaterialsModal) {
    schoolmaterialsModal.style.display = "none";
  }
};

// certificate modals

var certificateModal = document.getElementById("modal-certificate");
var certificateBtn = document.getElementById("modalOpen-certificate");
var certificateSpan = document.getElementsByClassName("close-button")[3];

certificateBtn.onclick = function () {
  certificateModal.style.display = "block";
};

certificateSpan.onclick = function () {
  certificateModal.style.display = "none";
};

window.onclick = function (event) {
  if (event.target == certificateModal) {
    certificateModal.style.display = "none";
  }
};
