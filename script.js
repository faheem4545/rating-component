const ratingBtn = document.querySelectorAll(".btn");
const showRate = document.getElementById("res");
window.addEventListener("load", () => {
  const value = localStorage.getItem("value");
  console.log(value);
  showRate.innerHTML = value;
});

// ratingBtn.forEach((btn) => {
//   btn.addEventListener("click", (e) => {
//     const currentValue = e.currentTarget;
//     ratingBtn.forEach((btn) => {
//       btn.classList.remove("active");
//     });
//     btn.classList.add("active");
//   });
//   const submitBtn = document.getElementById("submit");
//   submitBtn.addEventListener("click", (e) => {
//     location.href = "thankyou.html";
//   });
// });

ratingBtn.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    const currentValue = e.currentTarget.innerText;

    localStorage.setItem("value", currentValue);

    ratingBtn.forEach((btn) => {
      btn.classList.remove("active");
    });
    btn.classList.add("active");
    const submitBtn = document.getElementById("submit");
    submitBtn.addEventListener("click", (e) => {
      location.href = "thankyou.html";
    });
  });
});
