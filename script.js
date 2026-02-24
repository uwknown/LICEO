window.addEventListener("load", function() {
  const intro = document.getElementById("intro");
  const main = document.getElementById("mainContent");

  setTimeout(() => {
    intro.style.opacity = "0";

    setTimeout(() => {
      intro.style.display = "none";
      main.style.display = "block";
    }, 1000);

  }, 3000);
});