// Scroll effect on navbar
window.addEventListener("scroll", function () {
  const header = document.getElementById("header");
  if (window.scrollY > 60) {
    header.classList.add("scrolled");
  } else {
    header.classList.remove("scrolled");
  }
});

// Dummy form submit
document.querySelector("form").addEventListener("submit", function (e) {
  e.preventDefault();
  alert("Pesan berhasil dikirim (simulasi)");
});
