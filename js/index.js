const memos = [];

const addText = document.getElementById("add-text");
const addButton = document.getElementById("add-button");
const memoList = document.getElementById("memo-list");

function renderMemos() {
  memoList.innerHTML = "";
  memos.forEach((memo, index) => {
    const li = document.createElement("li");
    const div = document.createElement("div");
    const p = document.createElement("p");
    p.textContent = memo;

    const deleteButton = document.createElement("button");
    deleteButton.textContent = "削除";

    deleteButton.addEventListener("click", () => {
      memos.splice(index, 1);
      renderMemos();
    });

    div.appendChild(p);
    div.appendChild(deleteButton);

    li.appendChild(div);

    memoList.appendChild(li);
  });
}

addButton.addEventListener("click", () => {
  const text = addText.value.trim();

  if (text === "") {
    return;
  }

  memos.push(text);

  addText.value = "";

  renderMemos();
});

renderMemos();
