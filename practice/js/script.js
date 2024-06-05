'use strict';
{
    // アコーディオン
    // DOM取得
    const parent = document.querySelectorAll('.js-qa__parent');
    console.log(parent);

    // イベント
    for (let i = 0; i < parent.length; i++) {
        // clickイベントを付加
        parent[i].addEventListener('click', accodionToggle);
    }

     // 処理
     function accodionToggle(e) {
        // クリックした要素にクラスを付加
        e.currentTarget.classList.toggle('is-open');
        // クリックした要素の兄弟要素を取得
        const child = e.currentTarget.nextElementSibling;
        //　兄弟要素にクラスを付加
        child.classList.toggle('is-open');
    }

}

// $(function() {
//     var menu = $('#global-nav'),
//     offset = menu.offset();
//     $(window).scroll(function () {
//       if($(window).scrollTop() > offset.top) {
//         menu.addClass('fixed');
//       } else {
//         menu.removeClass('fixed');
//       }
//     });
//   });