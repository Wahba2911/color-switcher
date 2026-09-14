var allBtns = document.querySelectorAll(".color-btn");

allBtns.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    document.body.classList.remove("bg-danger", "bg-primary", "bg-dark");

    document.body.classList.add(e.target.id);
  });
});
