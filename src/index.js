<!DOCTYPE html>
<html lang="ja">
  <head>
    <title>簡単メモアプリ</title>
    <meta charset="UTF-8" />
    <link rel="stylesheet" href="src/styles.css" />
  </head>

  <body>
    <h1 id="title">簡単メモアプリ</h1>

    <input id="add-text" placeholder="メモを入力" />
    <button id="add-button">追加</button>

    <div class="container">
      <p>メモ一覧</p>
      <ul id="memo-list"></ul>
    </div>

    <script src="src/index.js"></script>
  </body>
</html>


// 追加ボタンと入力欄、リストを取得
const addButton = document.getElementById("add-button");
const addText = document.getElementById("add-text");
const memoList = document.getElementById("memo-list");

// 追加ボタンをクリックしたとき
addButton.addEventListener("click", () => {
  const text = addText.value;

  // 空文字なら追加しない
  if (text === "") return;

  // li要素作成
  const li = document.createElement("li");

  // div作成（中身をまとめる）
  const div = document.createElement("div");

  // メモテキスト
  const p = document.createElement("p");
  p.textContent = text;

  // 削除ボタン
  const deleteButton = document.createElement("button");
  deleteButton.textContent = "削除";

  // 削除ボタンの処理
  deleteButton.addEventListener("click", () => {
    memoList.removeChild(li);
  });

  // 要素をまとめて追加
  div.appendChild(p);
  div.appendChild(deleteButton);
  li.appendChild(div);
  memoList.appendChild(li);

  // 入力欄を空に
  addText.value = "";
});