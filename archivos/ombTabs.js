const buttons = document.querySelectorAll(".tabs-menu button");
const contents = document.querySelectorAll(".tab-content");
buttons.forEach((btn) => {
  btn.addEventListener("click", () => {
    buttons.forEach((b) => b.classList.remove("active"));
    contents.forEach((c) => c.classList.remove("active"));
    btn.classList.add("active");
    const target = btn.getAttribute("data-tab");
    document.getElementById(target).classList.add("active");
  });
});
