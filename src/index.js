//追加ボタン押下時に実行する関数
const onClickAddButton = () => {
  //テキストボックスの値を取得、初期化する
  const text = document.getElementById("add-text").value;

  //テキストボックスを空にする
  document.getElementById("add-text").value = "";

  //メモ一覧に追加する要素を作成する
  const li = document.createElement("li");
  const div = document.createElement("div");

  //メモの内容を設定する
  const p = document.createElement("p");
  p.innerText = text;

  //削除ボタンを作成、押下時の実行内容を設定する
  const deleteButton = document.createElement("button");
  deleteButton.innerText = "削除";
  deleteButton.addEventListener("click", () => {
    const deleteTarget = deleteButton.closest("li");
    document.getElementById("memo-list").removeChild(deleteTarget);
  });

  //メモ一覧に追加する
  div.appendChild(p); //メモ
  div.appendChild(deleteButton); //削除ボタン
  li.appendChild(div);
  document.getElementById("memo-list").appendChild(li);
};

//追加ボタン押下時の実行内容を設定(add-button)
document
  .getElementById("add-button")
  .addEventListener("click", onClickAddButton);
