// Grades modal functionality
var gradesModal = document.getElementById("modal-grades");
var gradesBtn = document.getElementById("modalOpen-grades");
var gradesSpan = document.getElementsByClassName("close-button")[0];

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
var schoolmaterialsSpan = document.getElementsByClassName("close-button")[1];

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

// turnover

var turnoverModal = document.getElementById("modal-turnover");
var turnoverBtn = document.getElementById("modalOpen-turnover");
var turnoverSpan = document.getElementsByClassName("close-button")[2];

turnoverBtn.onclick = function () {
  turnoverModal.style.display = "block";
};

turnoverSpan.onclick = function () {
  turnoverModal.style.display = "none";
};

window.onclick = function (event) {
  if (event.target == turnoverModal) {
    turnoverModal.style.display = "none";
  }
};
