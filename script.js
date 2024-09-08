function toggleMenu() {
    const menu = document.querySelector(".menu_links");
    const icon = document.querySelector(".hamburger_icon");
    menu.classList.toggle("open");
    icon.classList.toggle("open");
}
function showAlert() {
    alert("Message sent, Thank you!");
    window.location = "#Contact";
}