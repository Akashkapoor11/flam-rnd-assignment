const img = document.getElementById('frame') as HTMLImageElement;
const fpsEl = document.getElementById('fps')!;
const resEl = document.getElementById('res')!;

function updateMeta() {
  if (!img.complete) {
    img.onload = () => updateMeta();
    return;
  }
  fpsEl.textContent = '12';
  resEl.textContent = `${img.naturalWidth}x${img.naturalHeight}`;
}
updateMeta();
