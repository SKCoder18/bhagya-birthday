const birthday = new Date("2025-02-14").getTime();

setInterval(() => {
  const now = new Date().getTime();
  const diff = birthday - now;

  const days = Math.floor(diff / (1000 * 60 * 60 * 24));
  const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
  const mins = Math.floor((diff / (1000 * 60)) % 60);

  document.getElementById("countdown").innerHTML =
    `⏳ ${days} Days ${hours} Hours ${mins} Minutes left 💖`;
}, 1000);