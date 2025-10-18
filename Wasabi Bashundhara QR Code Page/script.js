document.getElementById("button-1").addEventListener("click", function () {
  window.open("./assets/menu-1.pdf", "_blank");
});

document.getElementById("button-2").addEventListener("click", function () {
  window.open("./assets/menu-2.pdf", "_blank");
});

document
  .getElementById("facebook-container")
  .addEventListener("click", function () {
    window.open(
      "https://www.facebook.com/people/Wasabi-Bashundhara-RA/61581294017133/?mibextid=wwXIfr&rdid=S0qRsgM6Wi3CV3aJ&share_url=https%3A%2F%2Fwww.facebook.com%2Fshare%2F19hCtbEU8b%2F%3Fmibextid%3DwwXIfr",
      "_blank"
    );
  });

window.addEventListener("load", function () {
  const preloader = document.getElementById("loader");
  const content = document.getElementById("content");
  content.style.display = "none";

  setTimeout(() => {
    preloader.style.display = "none";
    content.style.display = "block";
  }, 2000);
});
