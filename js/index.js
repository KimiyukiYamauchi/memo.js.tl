// HTMLの要素を取得
const addButton = document.getElementById("add-button");
const addText = document.getElementById("add-text");
const memoList = document.getElementById("memo-list");

// メモを追加する関数
const addMemo = () => {
  // 入力されたテキストを取得
  const text = addText.value;

  // 1. li要素を生成
  const li = document.createElement("li");

  // 2. div要素を生成
  const div = document.createElement("div");

  // 3. p要素を生成してテキストをセット
  const p = document.createElement("p");
  p.textContent = text;

  // 4. button要素（削除ボタン）を生成
  const deleteButton = document.createElement("button");
  deleteButton.textContent = "削除";

  // 削除ボタンにクリックイベントを設定
  deleteButton.addEventListener("click", () => {
    // 削除ボタンの親要素のさらに親要素（li）を取得して削除
    const targetLi = deleteButton.closest("li");
    memoList.removeChild(targetLi);
  });

  // 5. 要素を組み立てる (divの中にpとbuttonを入れ、liの中にdivを入れる)
  div.appendChild(p);
  div.appendChild(deleteButton);
  li.appendChild(div);

  // 6. 完成したli要素をul(memo-list)に追加
  memoList.appendChild(li);

  // 7. 入力欄を空にする
  addText.value = "";
};

// 追加ボタンのクリック時に addMemo 関数を実行
addButton.addEventListener("click", addMemo);

// 初期表示されているサンプルデータの削除ボタンにもイベントを設定
const initialDeleteButtons = memoList.querySelectorAll("button");
initialDeleteButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const targetLi = button.closest("li");
    memoList.removeChild(targetLi);
  });
});