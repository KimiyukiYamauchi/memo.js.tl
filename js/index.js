const memos = ["本を読む"]; // 初期タスク

//[追加]ボタン押下時に実行する関数
function addMemo() {
  //テキストボックスの値を取得し、初期化する
  const input = document.getElementById("add-text"); //テキストボックスの値を取得
  const memo = input.value.trim(); // 前後の空白を削除

  if (memo !== "") {
    // 配列の末尾にタスクオブジェクトを追加
    memos.push(memo);
    input.value = ""; // 入力欄をクリア
    updateMemoList(); // リストを更新
  }
}

// タスクリストを更新する関数
function updateMemoList() {
  const memoList = document.getElementById("memo-list");
  memoList.innerHTML = ""; // 既存のリストをクリア

  // 配列のforEach メソッドを使ってタスクを表示
  memos.forEach((memo, index) => {
    const listItem = document.createElement("li"); // li要素作成
    const div = document.createElement("div"); // div要素作成

    // メモの内容（textContentを使い、入力値をHTMLとして解釈させない）
    const text = document.createElement("p");
    text.textContent = memo;

    // 削除ボタン
    const deleteButton = document.createElement("button");
    deleteButton.textContent = "削除";
    deleteButton.addEventListener("click", () => removeMemo(index));

    // <li><div><p>…</p><button>削除</button></div></li> の構造にする
    div.appendChild(text);
    div.appendChild(deleteButton);
    listItem.appendChild(div);
    memoList.appendChild(listItem);
  });
}

// タスクを削除する関数
function removeMemo(index) {
  // 配列のspliceメソッドを使ってタスクを削除
  // indexから1つの要素を削除
  memos.splice(index, 1);
  updateMemoList(); // リストを更新
}

// 初期表示
updateMemoList();
