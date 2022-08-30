/*back to the top btn */
let btn = document.querySelector(".back-to-top");

window.onscroll = () => {
  window.scrollY >= 150
    ? (btn.style.cssText = "display:block !important")
    : (btn.style.cssText = "display:none");
};
btn.onclick = () => {
  window.scrollTo({
    top: 0,
    left: 0,
    behavior: "smooth",
  });
};

/* toggle-menu */
let toggle_menu = document.querySelector(".toggle-menu");
toggle_menu.onclick = () => {
  let menu = document.querySelector("header nav ul");
  menu.classList.toggle("display");
};
