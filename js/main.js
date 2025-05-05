// ハンバーガーメニュー開閉（必要に応じて）
const btn = document.getElementById('btn-menu');
btn.addEventListener('click', () => {
  document.body.classList.toggle('menu-open');
});

// IntersectionObserver で 50% 見えたら発火
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      document.body.style.backgroundColor = entry.target.dataset.bg;
    }
  });
}, { threshold: 0.5 });

// すべてのセクションを監視
document.querySelectorAll('header[id], section[id]').forEach(sec => {
  observer.observe(sec);
});