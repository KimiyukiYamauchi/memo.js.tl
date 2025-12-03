// ここに処理を記述する
// 要素の取得
const addText = document.getElementById("add-text");
const addButton = document.getElementById("add-button");
const memoList = document.getElementById("memo-list");

// ▼ 追加ボタンクリック時の処理
addButton.addEventListener("click", () => {
  const text = addText.value.trim();
  if (text === "") return;

  // li 要素を作成
  const li = document.createElement("li");

  // ラッパ div
  const div = document.createElement("div");

  // メモのテキスト
  const p = document.createElement("p");
  p.textContent = text;

  // 削除ボタン
  const deleteButton = document.createElement("button");
  deleteButton.textContent = "削除";

  // 削除処理
  deleteButton.addEventListener("click", () => {
    memoList.removeChild(li);
  });

  // DOM を組み立てる
  div.appendChild(p);
  div.appendChild(deleteButton);
  li.appendChild(div);
  memoList.appendChild(li);

  // 入力欄のリセット
  addText.value = "";
});
