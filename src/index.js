//[追加]ボタン押したときに実行する関数
const onClickAddButton = () => {
//テキストボックスの値を取得し、初期化する
const text = document.getElementById("add-text").value;
//console.log(text);
//メモ一覧に追加する要素を作成する
const li = document.createElement("li");
const div = document.createElement("div");
//メモの内容を設定する
const p = document.createElement("p");
p.innerText = text;
//消去ボタンを作成し、クリックイベントを設定する
deleteButton = document.createElement("button");
deleteButton.innerText = "削除";
deleteButton.addEventListener("click", () => {
    //押された消去ボタンの親要素（li）をメモ一覧から削除する
    const deleteTArget = deleteButton.closet(li);
    document.getElementById("memo-list").removeChild(div);
});
//メモ一覧に追加する
div.appendChild(p);//メモの内容
div.appendChild(deleteButton);//消去ボタン
li.appendChild(div);//要素にdivを追加
document.getElementById("memo-list").appendChild(li);
document.getElementById("add-text").value = "";
};
//[追加]ボタンを取得して、クリックイベントを設定する
document
    .getElementById("add-button")
    .addEventListener("click", onClickAddButton)