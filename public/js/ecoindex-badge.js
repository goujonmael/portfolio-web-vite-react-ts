/* Masque temporairement le badge ecoindex pendant le défilement.
   Extrait du <script> inline d'index.html pour respecter une CSP stricte
   (les gestionnaires inline et scripts inline seraient bloqués). */
(function () {
  var scrollTimeout;
  window.addEventListener(
    "scroll",
    function () {
      var badge = document.getElementById("ecoindex-badge");
      if (!badge) {
        return;
      }
      badge.style.opacity = "0";
      badge.style.pointerEvents = "none";
      clearTimeout(scrollTimeout);
      scrollTimeout = setTimeout(function () {
        badge.style.opacity = "1";
        badge.style.pointerEvents = "auto";
      }, 150);
    },
    { passive: true }
  );
})();
