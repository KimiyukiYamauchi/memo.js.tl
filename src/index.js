// ここに処理を記述する
const STORAGE_KEY = "memo_app_memos_v1";

function loadMemos() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    return raw ? JSON.parse(raw) : [];
  } catch (e) {
    console.error("failed to load memos", e);
    return [];
  }
}

function saveMemos(memos) {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(memos));
  } catch (e) {
    console.error("failed to save memos", e);
  }
}

function createMemoElement(text, index, onDelete) {
  const li = document.createElement("li");
  const wrapper = document.createElement("div");

  const p = document.createElement("p");
  p.textContent = text;

  const btn = document.createElement("button");
  btn.textContent = "削除";
  btn.addEventListener("click", () => onDelete(index));

  wrapper.appendChild(p);
  wrapper.appendChild(btn);
  li.appendChild(wrapper);
  return li;
}

document.addEventListener("DOMContentLoaded", () => {
  const input = document.getElementById("add-text");
  const addButton = document.getElementById("add-button");
  const memoList = document.getElementById("memo-list");

  let memos = loadMemos();

  function render() {
    // 既存のリストをクリアして再描画（HTML に書かれたサンプルも上書きされる）
    memoList.innerHTML = "";
    memos.forEach((m, i) => {
      const el = createMemoElement(m, i, (index) => {
        memos.splice(index, 1);
        saveMemos(memos);
        render();
      });
      memoList.appendChild(el);
    });
  }

  addButton.addEventListener("click", () => {
    const text = (input.value || "").trim();
    if (!text) return; // 空入力は無視
    memos.push(text);
    saveMemos(memos);
    input.value = "";
    render();
  });

  // Enter キーでも追加できる
  input.addEventListener("keydown", (e) => {
    if (e.key === "Enter") {
      addButton.click();
    }
  });

  // 初期描画
  render();
});
