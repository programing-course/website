//ローディング画面の処理
window.addEventListener('DOMContentLoaded', function () {
  const loadingElement = document.getElementById('loading');

  // ローディング画面を非表示にする関数
  function hideLoading() {
    loadingElement.style.transition = 'opacity .6s ease, visibility .6s ease';
    loadingElement.style.opacity = 0;
    loadingElement.style.visibility = 'hidden';
  }
  setTimeout(function () {
    hideLoading();
  }, 3000);
}
);