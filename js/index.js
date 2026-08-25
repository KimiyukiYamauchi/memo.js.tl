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
    updataMemoList(); // リストを更新
  }
}

// タスクリストを更新する関数
function updataMemoList() {
  const memoList = document.getElementById("memo-list");
  memoList.innerHTML = ""; // 既存のリストをクリア

  // 配列のforEach メソッドを使ってタスクを表示
  memos.forEach((memo, index) => {
    const listItem = document.createElement("li"); // li要素作成

    // リストアイテムの内容を設定
    listItem.innerHTML = `
    <span>${memo}</span>
    <button onclick="removeMemo(${index})">削除</button>
    `;
    memoList.appendChild(listItem);
  });
}

// タスクを削除する関数
function removeMemo(index) {
  // 配列のspliceメソッドを使ってタスクを削除
  // indexから1つの要素を削除
  memos.splice(index, 1);
  updataMemoList(); // リストを更新
}

// 初期表示
updataMemoList();
