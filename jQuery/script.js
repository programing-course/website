
function demo1(){
    console.log('おはようございます'); //文字列
    console.log(3); //数値
    console.log(3+5); //計算結果
    console.log('3+5'); //これは文字列
}
function demo2(){
    history.back();
}
function demo3_1(){
    window.alert('ダウンロードが完了しました');
    window.alert(10);
    window.alert(10+123);
}

function demo3_2(){
    window.open("http://www.google.co.jp/");
}

function demo3_3(){
    window.print();
}

function demo4(){
    document.getElementById('text'); //id=textの要素を取ってくる
    document.getElementById('text').textContent = "今日も元気ですか？";
}

function demo4_1(){
    document.getElementById('text');
    document.getElementById('text').textContent = "おはようございます";
}

function demo5(){
    var textcss = document.getElementById('text2'); //id=textの要素を取ってくる
    textcss.style.background  = "#00ffa7" ;
    textcss.style.color  = "#fff" ;
}

function demo5_1(){
    var textcss = document.getElementById('text2'); //id=textの要素を取ってくる
    textcss.style.background  = "" ;
    textcss.style.color  = "#000" ;
}

// $('#button1').on('click',function(){
//     $('#text1').css('display','block');
// });

$('#button1').on('click',function(){
    $('#text1').toggleClass('hidden');
});