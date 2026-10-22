/* Chargement non-bloquant des polices Google Fonts.
   La feuille de style est servie avec media="print" (donc non bloquante pour le
   premier rendu) puis basculée en "all" dès que possible. Ce fichier est externe
   (et non inline) afin de respecter une Content-Security-Policy stricte. */
(function () {
  function activate() {
    var link = document.getElementById("font-css");
    if (link) {
      link.media = "all";
    }
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", activate, { once: true });
  } else {
    activate();
  }
})();
