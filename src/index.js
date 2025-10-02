//追加ボタンの挙動
const onClickAddButton = () => {
  //テキストボックス取得
  const textEl = document.getElementById("add-text");
  //テキストボックス内の文字を取得
  const text = textEl.value;
  //テキストボックスを空にする
  textEl.value = "";
  //メモ一覧に追加する要素の作成
  const li = document.createElement("li");
  const div = document.createElement("div");
  const p = document.createElement("p");
  //メモの内容をpタグに追加
  p.textContent = text;
  //削除ボタンの作成
  const button = document.createElement("button");
  button.textContent = "削除";
  //削除ボタンの挙動
  button.addEventListener("click", () => {
    //削除内容を受け取る
    const deleteTarget = button.closest("li");
    //削除する
    document.getElementById("memo-list").removeChild(deleteTarget);
  });
  ///divタグに要素を追加
  div.appendChild(p);
  div.appendChild(button);
  //liタグに要素を追加
  li.appendChild(div);
  //作成してまとめたliタグをmemo-listのulタグに追加
  document.getElementById("memo-list").appendChild(li);
}
// 追加ボタン押下時にonClickAddButton関数を実行するよう登録
document
  .getElementById("add-button")
  .addEventListener("click", () => onClickAddButton());
