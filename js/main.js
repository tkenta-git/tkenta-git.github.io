// ——————————————————————————————
// ロード時にハッシュを消して必ずトップへ
// ——————————————————————————————
window.addEventListener('load', () => {
  // URL にハッシュがあれば消す
  if (location.hash) {
    history.replaceState(null, null, location.pathname + location.search);
  }
  // スクロール位置を最上部へ
  window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
});

// ——————————————————————————————
// ハンバーガーメニュー開閉（ボタンがあれば）
// ——————————————————————————————
const btn = document.getElementById('btn-menu');
if (btn) {
  btn.addEventListener('click', () => {
    document.body.classList.toggle('menu-open');
  });
}

// ——————————————————————————————
// IntersectionObserver で背景色切り替え
// ——————————————————————————————
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      document.body.style.backgroundColor = entry.target.dataset.bg;
    }
  });
}, { threshold: 0.5 });

// すべての header[id], section[id] を監視
document.querySelectorAll('header[id], section[id]').forEach(sec => {
  observer.observe(sec);
});

// ——————————————————————————————
// ナビリンクの下線表示とクリック時の他リンクグレーアウト
// ——————————————————————————————
document.addEventListener('DOMContentLoaded', function() {
  const navLinks = document.querySelectorAll('.main-nav .nav-list .nav-item a');
  navLinks.forEach(function(link) {
    link.addEventListener('click', function(e) {
      const href = link.getAttribute('href');
      // ページ内リンクならスムーズスクロールしつつ遷移を抑制
      if (href.startsWith('#')) {
        e.preventDefault();
        document.querySelector(href).scrollIntoView({ behavior: 'smooth' });
      }
      // すべてのリンクを一度グレーアウト
      navLinks.forEach(function(l) {
        l.classList.add('inactive');
      });
      // クリックしたリンクだけアクティブ（グレーアウト解除）
      link.classList.remove('inactive');
    });
  });
});