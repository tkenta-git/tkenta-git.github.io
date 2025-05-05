// ハンバーガーメニュー開閉（必要に応じて）
const btn = document.getElementById('btn-menu');
btn.addEventListener('click', () => {
  document.body.classList.toggle('menu-open');
});