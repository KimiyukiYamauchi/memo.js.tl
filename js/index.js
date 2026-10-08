const STORAGE_KEY = "memo-app-memos";
const addText = document.getElementById("add-text");
const addButton = document.getElementById("add-button");
const memoList = document.getElementById("memo-list");

const defaultMemos = [
  {
    text: "本を読む",
    createdAt: new Date().toISOString(),
  },
];

function loadMemos() {
  const savedMemos = localStorage.getItem(STORAGE_KEY);

  if (savedMemos === null) {
    return defaultMemos;
  }

  try {
    const memos = JSON.parse(savedMemos);

    if (!Array.isArray(memos)) {
      throw new Error("保存されたメモが配列ではありません。");
    }

    return memos;
  } catch (error) {
    console.error("保存されたメモを読み込めませんでした。", error);
    return [];
  }
}

let memos = loadMemos();

function saveMemos() {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(memos));
}

function renderMemos() {
  memoList.replaceChildren();

  memos.forEach((memo, index) => {
    const listItem = document.createElement("li");
    const memoContainer = document.createElement("div");
    const memoText = document.createElement("p");
    const createdAt = document.createElement("small");
    const deleteButton = document.createElement("button");

    memoText.textContent = memo.text;
    createdAt.textContent = `追加日時: ${new Date(memo.createdAt).toLocaleString("ja-JP")}`;
    deleteButton.textContent = "削除";
    deleteButton.addEventListener("click", () => {
      memos.splice(index, 1);
      saveMemos();
      renderMemos();
    });

    memoContainer.append(memoText, createdAt, deleteButton);
    listItem.append(memoContainer);
    memoList.append(listItem);
  });
}

addButton.addEventListener("click", () => {
  const text = addText.value.trim();

  if (text === "") {
    addText.classList.add("input-error");
    addText.setAttribute("aria-invalid", "true");
    addText.focus();
    return;
  }

  addText.classList.remove("input-error");
  addText.removeAttribute("aria-invalid");
  memos.push({
    text,
    createdAt: new Date().toISOString(),
  });
  saveMemos();
  renderMemos();
  addText.value = "";
});

addText.addEventListener("input", () => {
  if (addText.value.trim() !== "") {
    addText.classList.remove("input-error");
    addText.removeAttribute("aria-invalid");
  }
});

if (localStorage.getItem(STORAGE_KEY) === null) {
  saveMemos();
}
renderMemos();
