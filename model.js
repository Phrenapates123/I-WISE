function openModal() {
    document.getElementById("borrowModal").style.display = "block";
}

function closeModal() {
    document.getElementById("borrowModal").style.display = "none";
}

window.onclick = function(event) {
    const modal = document.getElementById("borrowModal");
    if (event.target === modal) {
        modal.style.display = "none";
    }
};
