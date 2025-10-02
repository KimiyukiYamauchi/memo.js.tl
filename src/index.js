//[追加]ボタンを押し時に実行する関数
const onClickAddButton = () => {
  // テキストボックスの値を取得し、変数に格納
  const inputText = document.getElementById("add-text").value;
  document.getElementById("add-text").value = "";
  //console.log(inputText);
  //メモー一覧に追加する要素を作成する
  const li = document.createElement("li");
  const div = document.createElement("div");
  //メモーの内容を設定する
  const p = document.createElement("p");
  p.innerText = inputText;
  //削除ボタンを作成し、クリックイベントを設定する
  const deleteButton = document.createElement("button");
  deleteButton.innerText = "削除";
  deleteButton.addEventListener("click", () => {
    //alert("削除しました");
    //document.getElementById("memo-list").removeChild(li);
    const deleteTarget = deleteButton.closest("li");
    document.getElementById("memo-list").removeChild(deleteTarget);
  });

  //メモー一覧に追加する
  div.appendChild(p);
  div.appendChild(deleteButton);
  li.appendChild(div);
  document.getElementById("memo-list").appendChild(li);
};
// 追加ボタンを取得して、クリックイベントを設定
document
  .getElementById("add-button")
  .addEventListener("click", onClickAddButton);
