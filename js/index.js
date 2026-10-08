
const input = document.getElementById("add-text");
const addButton = document.getElementById("add-button");
const memoList = document.getElementById("memo-list");

// 保存されているメモを読み込む
let memos = JSON.parse(localStorage.getItem("memos") || "[]");

// メモを保存する
function saveMemos() {
  localStorage.setItem("memos", JSON.stringify(memos));
}

// メモ一覧を表示する
function showMemos() {
  memoList.innerHTML = "";

  memos.forEach((memo, index) => {
    const li = document.createElement("li");
    const div = document.createElement("div");
    const p = document.createElement("p");
    const deleteButton = document.createElement("button");

    // メモの内容と追加日時を表示
    p.textContent = `${memo.text}（${memo.date}）`;
    deleteButton.textContent = "削除";

    // 削除ボタンを押したとき
    deleteButton.addEventListener("click", () => {
      memos.splice(index, 1);
      saveMemos();
      showMemos();
    });

    div.appendChild(p);
    div.appendChild(deleteButton);
    li.appendChild(div);
    memoList.appendChild(li);
  });
}

// 追加ボタンを押したとき
addButton.addEventListener("click", () => {
  const text = input.value.trim();

  // 空欄だったら赤く光らせる
  if (text === "") {
    input.classList.remove("error");
    void input.offsetWidth;
    input.classList.add("error");
    return;
  }

  // 現在の日時を取得
  const now = new Date();
  const date = now.toLocaleString("ja-JP");

  // 配列に新しいメモを追加
  memos.push({
    text: text,
    date: date
  });

  // 保存して画面を更新
  saveMemos();
  showMemos();

  // 入力欄を空にする
  input.value = "";
  input.classList.remove("error");
});

// 入力したらエラー表示を解除
input.addEventListener("input", () => {
  input.classList.remove("error");
});

// 保存されたメモを最初に表示
showMemos();
