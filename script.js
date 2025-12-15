function beli(namaProduk) {
  const wa = "https://wa.me/6285704067284";
  const text = encodeURIComponent(
    "Halo admin, saya ingin beli " + namaProduk
  );
  window.location.href = wa + "?text=" + text;
}

const revealElements = document.querySelectorAll('.banner, .welcome, .card, .footer');

const revealOnScroll = () => {
  const trigger = window.innerHeight * 0.9;
  revealElements.forEach(el => {
    const top = el.getBoundingClientRect().top;
    if (top < trigger) el.classList.add('show');
  });
};

revealElements.forEach(el => el.classList.add('reveal'));
window.addEventListener('scroll', revealOnScroll);
revealOnScroll()

