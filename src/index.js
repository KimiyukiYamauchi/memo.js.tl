// 追加したときに実行される関数
const onClickAddButton = () => {
  // テキストボックスの値を取得し初期化する
  const inputElement = document.getElementById("add-text");
  const text = inputElement.value;
  inputElement.value = ""; // テキストボックスをからにする

  console.log(text);

  // メモ一覧に追加する要素を作成
  const li = document.createElement("li");
  const div = document.createElement("div");

  // メモの内容を設定
  const p = document.createElement("p");
  p.innerText = text;

  const deleteButton = document.createElement("button");
  deleteButton.innerText = "削除";

  // 削除ボタンのイベント
  deleteButton.addEventListener("click", () => {
    li.remove();
  });

  // メモ一覧に追加
  div.appendChild(p);
  div.appendChild(deleteButton);
  li.appendChild(div);
  document.getElementById("memo-list").appendChild(li);
};

// 追加ボタンを取得して、クリックイベントを設定
document
  .getElementById("add-button")
  .addEventListener("click", onClickAddButton);
