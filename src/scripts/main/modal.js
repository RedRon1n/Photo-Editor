window.toggleModal = modalID => {
    document.getElementById(modalID).classList.toggle("hidden");
    document.getElementById(modalID + "-backdrop").classList.toggle("hidden");
    document.getElementById(modalID).classList.toggle("display");
    document.getElementById(modalID + "-backdrop").classList.toggle("display");
}