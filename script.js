const nav = document.querySelector("nav");
const sidebar = document.querySelector("#sidebar");

sidebar.addEventListener("click", () => {
  nav.classList.toggle("opacity-100");
});
