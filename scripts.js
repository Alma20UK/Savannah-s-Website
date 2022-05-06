/* JavaScript required to stop popup videos audio from continuing to play after the modal has been closed */

function toggleConversePopUp() {
  document.getElementById("popup-1").classList.toggle("active");
  if ($('.active').length === 0) {
    document.getElementById('myVideo').pause();
  }
}

function toggleNasPopUp() {
  document.getElementById("popup-2").classList.toggle("active");
  if ($('.active').length === 0) {
    document.getElementById('nasVideo').pause();
  }
}

function toggleKeemPopUp() {
  document.getElementById("popup-3").classList.toggle("active");
  if ($('.active').length === 0) {
    document.getElementById('keemVideo').pause();
  }
}

function toggleSlenderPopUp() {
  document.getElementById("popup-4").classList.toggle("active");
  if ($('.active').length === 0) {
    document.getElementById('slenderVideo').pause();
  }

}

function toggleScribzPopUp() {
  document.getElementById("popup-5").classList.toggle("active");
  if ($('.active').length === 0) {
    document.getElementById('scribzVideo').pause();
  }

}

function toggleSolaPopUp() {
  document.getElementById("popup-6").classList.toggle("active");
  if ($('.active').length === 0) {
    document.getElementById('solaVideo').pause();
  }

}

function toggleSoulPopUp() {
  document.getElementById("popup-7").classList.toggle("active");
  if ($('.active').length === 0) {
    document.getElementById('soulVideo').pause();
  }

}
