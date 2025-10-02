//[追加]ボタン押下時に実行する関数
const onClickAddButton = () => {
  //テキストボックスの値を取得し、初期化する
  const text = document.getElementById("add-text").value; //テキストボックスの値を取得
  if (text === "") return; //テキストボックスが空の場合は何もしない
  document.getElementById("add-text").value = ""; //テキストボックスを初期化
  //メモ一覧に追加する要素を作成する
  const li = document.createElement("li");
  const div = document.createElement("div");
  //メモの内容を設定する
  const p = document.createElement("p");
  p.innerText = text;
  //[削除]ボタンを作成し、クリックイベントを設定する
  const deleteButton = document.createElement("button"); //ボタン要素を作成
  deleteButton.innerText = "削除"; //ボタンのラベル
  deleteButton.addEventListener("click", () => {
    const deleteTarget = deleteButton.closest("li");
    document.getElementById("memo-list").removeChild(deleteTarget); //メモ一覧から削除
  });
  //メモ一覧に追加する
  div.appendChild(p);
  div.appendChild(deleteButton);
  li.appendChild(div);
  document.getElementById("memo-list").appendChild(li);
};

// [追加]ボタンを取得して、クリックイベントを設定
//HTML内にある要素を取得<button id="add-button">追加</button>
document
  .getElementById("add-button")
  .addEventListener("click", onClickAddButton);
