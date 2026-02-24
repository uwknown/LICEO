window.addEventListener("load", function () {

  const intro = document.getElementById("intro");
  const main = document.getElementById("mainContent");

  // Duración visible de la intro (3 segundos)
  const introDuration = 3000;

  // Duración del fade out (1 segundo)
  const fadeDuration = 1000;

  setTimeout(() => {

    // Empieza el fade
    intro.style.opacity = "0";

    setTimeout(() => {

      // Oculta completamente la intro
      intro.style.display = "none";

      // Muestra el contenido principal
      main.style.display = "block";

    }, fadeDuration);

  }, introDuration);

});