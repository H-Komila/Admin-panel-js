const sidebar = document.querySelector(".sidebar");
const bars = document.querySelector(".bars");

bars.addEventListener("click", () => {
    sidebar.classList.toggle("active");
    bars.classList.toggle("open");
});


