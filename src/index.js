// [追加]ボタン押下時に実行する関数
const onClickAddButton = () => {
  // テキストボックスの値を取得し、初期化する
  const text = document.getElementById("add-text").value;
  document.getElementById("add-text").value = ""; // テキストボックスを空にする
  //   console.log(text);
  // メモ一覧に追加する要素を作成する
  const li = document.createElement("li");
  const div = document.createElement("div");
  // メモの内容を設定する
  const p = document.createElement("p");
  p.innerText = text;
  // [削除]ボタンを作成し、クリックイベントを設定する
  const deleteButton = document.createElement("button");
  deleteButton.innerText = "削除";
  deleteButton.addEventListener("click", () => {
    // alert("削除しました");
    // document.getElementById("memo-list").removeChild(li);

    const deleteTarget = deleteButton.closest("li");
    document.getElementById("memo-list").removeChild(deleteTarget);
  });

  // メモ一覧に追加する
  div.appendChild(p); // メモの内容
  div.appendChild(deleteButton); // [削除]ボタン
  li.appendChild(div); // li要素にdivを追加
  document.getElementById("memo-list").appendChild(li);
};

// [追加]ボタンを取得して、クリックイベントを設定
document
  .getElementById("add-button")
  .addEventListener("click", onClickAddButton);
