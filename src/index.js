// [追加]ボタン押下時に実行する関数
const onAddButtonClick = () => {
  // テキストボックスの値を取得し、初期化する
  const text = document.getElementById("add-text").value;
  document.getElementById("add-text").value = ""; // テキストボックスを空にする

  // メモ一覧に追加する要素を作成する
  const li = document.createElement("li");
  const div = document.createElement("div");

  // メモの内容を設定する
  const p = document.createElement("p");
  p.innerText = text;

  // [削除]ボタンを作成し、クリックイベントを設定する
  const deleteButteon = document.createElement("button");
  deleteButteon.innerText = "削除";
  deleteButteon.addEventListener("click", () => {
    const deleteTarget = deleteButteon.closest("li");
    document.getElementById("memo-list").removeChild(deleteTarget);
  });

  // メモ一覧に追加する
  div.appendChild(p); // メモの内容
  div.appendChild(deleteButteon); // [削除]ボタン
  li.appendChild(div); // li要素にdivを追加
  document.getElementById("memo-list").appendChild(li);

  // メモの内容を設定する
  document.getElementById("memo-list").appendChild(li);
};

// [追加]ボタンを取得してクリックイベントを設定
document
  .getElementById("add-button")
  .addEventListener("click", onAddButtonClick);
