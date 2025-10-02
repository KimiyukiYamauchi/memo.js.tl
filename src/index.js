// ここに処理を記述する

const onClickAddButton = () => {
  const text = document.getElementById("add-text").value;
  document.getElementById("add-text").value = ""; 
  //console.log(text);
  const li = document.createElement("li");
  const div = document.createElement("div");
  const p = document.createElement("p");
  p.innerText = text;
  const deleteButton = document.createElement("button");
  deleteButton.innerText = "削除";
  deleteButton.addEventListener("click", () => {

    const deleteTarget = deleteButton.closest("li");
    document.getElementById("memo-list").removeChild(deleteTarget);
  });
  div.appendChild(p); 
  div.appendChild(deleteButton); 
  li.appendChild(div); 
  document.getElementById("memo-list").appendChild(li);
};

document
  .getElementById("add-button")
  .addEventListener("click", onClickAddButton);
