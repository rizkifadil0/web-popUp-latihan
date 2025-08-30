document.addEventListener("DOMContentLoaded", () => {
  const btn = document.getElementById("btn");
  const popUp = document.getElementById("popUp");
  const silang = document.getElementById("silang");

  btn.addEventListener("click", function () {
    popUp.classList.add("active");
  });

  silang.addEventListener("click", function () {
    popUp.classList.remove("active");
  });

  document.body.addEventListener("click", (e) => {
    if (!popUp.contains(e.target) && e.target !== btn) {
      popUp.classList.remove("active");
    }
  });
});
