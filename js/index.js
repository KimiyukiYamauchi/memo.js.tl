// ここに処理を記述する
const addButton = document.getElementById("add-button");
const addText = document.getElementById("add-text");
const memoList = document.getElementById("memo-list");

addButton.addEventListener("click", () => {
  const text = addText.value.trim();

  if (text === "") {
    alert("メモを入力してください");
    return;
  }

  const li = document.createElement("li");
  const div = document.createElement("div");
  const p = document.createElement("p");
  p.textContent = text;

  const deleteButton = document.createElement("button");
  deleteButton.textContent = "削除";

  deleteButton.addEventListener("click", () => {
    li.remove();
  });

  div.appendChild(p);
  div.appendChild(deleteButton);
  li.appendChild(div);
  memoList.appendChild(li);

  addText.value = "";
});

addText.addEventListener("keydown", (event) => {
  if (event.key === "Enter") {
    addButton.click();
  }
});
