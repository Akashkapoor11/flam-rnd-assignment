"use strict";
(() => {
  // src/main.ts
  var img = document.getElementById("frame");
  var fpsEl = document.getElementById("fps");
  var resEl = document.getElementById("res");
  function updateMeta() {
    if (!img.complete) {
      img.onload = () => updateMeta();
      return;
    }
    fpsEl.textContent = "12";
    resEl.textContent = `${img.naturalWidth}x${img.naturalHeight}`;
  }
  updateMeta();
})();
