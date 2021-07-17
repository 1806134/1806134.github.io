// 繰り返し文(while)
// 複雑な条件処理を組み合わせたい場合はこっちを使う事が多い
var count = 0;
while(count < 3) {
    // count = count + 1;
    count++;
    // alert("while文のテスト。" + count + "回目のループです");
}

// 繰り返し文（for）
// ループさせたい回数が事前に分かってる場合はこっちを使う事が多い
for (var i=0; i<3; i++) {
    // alert("for文のテスト。" + i + "回目のループです・");
}

// 繰り返し（for文と配列を組み合わせた応用例）
// 配列名.lengthとすると配列の長さ（要素数）を取得できる
var player_hand = ["グー", "チョキ", "パー"];
for (var i=0; i < player_hand.length; i++) {
    alert(player_hand[i]);
}


// 条件分岐（if文）
var judge = 0;
if (judge > 0) {
    alert("judgeは正の数です。");
} else if (judge == 0) {
    alert("judgeは0です。");
} else if (judge < 0) {
    alert("judgeは負の数です");
} else{
    alert("judgeは数字ではありません。");
}

// 色々な言語のこんにちはを表示する関数
function hello (language) {
    var message = "";

    if (language == 1) {
        message = "こんにちは";
    } else if (language == 2) {
        message = "hello";
    } else if (language == 3) {
        message = "你好"
    } else if (language == 4) {
        message = "アニョハセヨ"
    } else {
        message = "想定されていない引数です。";
    }

    alert(message);

}
