let modalOpen = false; // Default to closed

function openModal() {
  setModal(true);
}

function closeModal() {
  setModal(false);
}

function toggleModal() {
  setModal(!modalOpen);
}

function setModal(value) {
  modalOpen = value;
  document.getElementById("popup-1").classList.toggle("active", value);
}

function pauseMedia() {
  document.querySelector('video').pause()
}

function playMedia() {}



function toggleConversePopUp(){
    document.getElementById("popup-1").classList.toggle("active");
}

function toggleNasPopUp(){
    document.getElementById("popup-2").classList.toggle("active");
}

function toggleKeemPopUp(){
    document.getElementById("popup-3").classList.toggle("active");
}

function toggleSlenderPopUp(){
  document.getElementById("popup-4").classList.toggle("active");
}




/* Modal pop up from 'Web Dev Simplified' which I couldn't get to work. https://www.youtube.com/watch?v=MBaw_6cPmAw&t=77s

const openModalButtons = document.querySelectorAll('[data-modal-target]')
const closeModalButtons = document.querySelectorAll('[data-close-button]')

openModalButtons.forEach(button => {
    button.addEventListener('click', () => {
        const modal = document.querySelector(button.dataset.modalTarget)
        openModalButtons(modal)
    })
})

closeModalButtons.forEach(button => {
    button.addEventListener('click', () => {
        const modal = document.closest('.modal')
        closeModalButtons(modal)
    })
})

function openModal(modal) {
    if (modal == null) return
    modal.classList.add('active')
}

function closeModal(modal) {
    if (modal == null) return
    modal.classList.remove('active')
}
*/