const ratingBtn = document.querySelectorAll(".btn");

ratingBtn.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    const currentValue = e.currentTarget;
    ratingBtn.forEach((btn) => {
      btn.classList.remove("active");
    });
    btn.classList.add("active");
  });
  const submitBtn = document.getElementById("submit");
  submitBtn.addEventListener("click", (e) => {
    location.href = "thankyou.html";
  });
});
