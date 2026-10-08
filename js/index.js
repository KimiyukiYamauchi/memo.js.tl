// ここに処理を記述する
// 画面の要素を取得する
const addText = document.getElementById("add-text");
const addButton = document.getElementById("add-button");
const memoList = document.getElementById("memo-list");

// 「追加」ボタンが押された時の処理
const onClickAdd = () => {
  // 1. テキストボックスに入力された文字を取得する
  const textValue = addText.value;

  // 未入力の場合は何もせず処理を終える
  if (textValue === "") {
    return;
  }

  // 2. テキストボックスの中身を空にする
  addText.value = "";

  // 3. メモ用のHTML要素を順番に作成する
  // <li> を作成
  const li = document.createElement("li");

  // <div> を作成
  const div = document.createElement("div");

  // <p> を作成し、入力されたテキストを設定する
  const p = document.createElement("p");
  p.innerText = textValue;

  // <button>削除</button> を作成する
  const deleteButton = document.createElement("button");
  deleteButton.innerText = "削除";

  // 4. 「削除」ボタンをクリックした時の動作を設定する
  deleteButton.addEventListener("click", () => {
    // 削除ボタンの一番近い親要素である <li> を取得して削除する
    const targetLi = deleteButton.closest("li");
    memoList.removeChild(targetLi);
  });

  // 5. 作成した要素をHTMLの構造通りに組み上げる
  // <div> に <p> と <button> を追加
  div.appendChild(p);
  div.appendChild(deleteButton);

  // <li> に <div> を追加
  li.appendChild(div);

  // 最後に <ul> (#memo-list) の中に <li> を追加して画面に表示させる
  memoList.appendChild(li);
};

// 「追加」ボタンをクリックした時に onClickAdd 関数を実行する
addButton.addEventListener("click", onClickAdd);