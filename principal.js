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

// dashboard modal
var dashboardModal = document.getElementById("modal-dashboard");
var dashboardBtn = document.getElementById("modalOpen-dashboard");
var dashboardSpan = document.getElementsByClassName("close-button")[1];

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
