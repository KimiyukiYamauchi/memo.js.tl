// ここに処理を記述する
let memoList = [];

function addMemo() {
  const input = document.getElementById("add-text");
  const memo = input.value.trim();
  if (memo) {
    memoList.push(memo);
    input.value = "";
    renderMemoList();
  }
}

function renderMemoList() {
  const memoListElement = document.getElementById("memo-list");
  memoListElement.innerHTML = "";
  memoList.forEach((memo, index) => {
    const li = document.createElement("li");
    li.innerHTML = `
      <p>${memo}
      <button onclick="deleteMemo(${index})">削除</button></p>`;
    memoListElement.appendChild(li);
  });
}

function deleteMemo(index) {
  memoList.splice(index, 1);
  renderMemoList();
}
