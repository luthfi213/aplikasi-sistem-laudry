// Animasi saat halaman dibuka
window.onload = function () {
  document.querySelector(".hero").style.opacity = 0;
  setTimeout(() => {
    document.querySelector(".hero").style.opacity = 1;
  }, 300);
};
