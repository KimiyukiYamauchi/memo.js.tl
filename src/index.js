// 追加ボタン押したときに実行する関数
const onClickAddButton = () => {
  // テキストボックスの値を取得し、初期化する
  const text = document.getElementById("add-text").value;
  document.getElementById("add-text").value = "";
  // メモ一覧に追加する要素を作成する
  const li = document.createElement("li");
  const div = document.createElement("div");
  // メモの内容を設定する
  const p = document.createElement("p");
  p.innerText = text; // pの中の文字列を設定
  // 削除ボタンを作成し、クリックイベントを設定する
  const deleteButton = document.createElement("button");
  deleteButton.innerText = "削除";
  deleteButton.addEventListener("click", () => {
    //   document.getElementById("memo-list").removeChild(li);
    const deleteTarget = deleteButton.closest("li"); // 押された削除ボタンの親要素のliを取得
    document.getElementById("memo-list").removeChild(deleteTarget); // そのliをmemo-listから削除
  });
  // メモ一覧に追加する
  div.appendChild(p); // pをdivの子要素に設定
  div.appendChild(deleteButton); // 削除ボタンをdivの子要素に設定
  li.appendChild(div); // divをliの子要素に設定
  document.getElementById("memo-list").appendChild(li);
};

// 追加ボタンを取得してクリックイベントを設定
document
  .getElementById("add-button")
  .addEventListener("click", onClickAddButton);
