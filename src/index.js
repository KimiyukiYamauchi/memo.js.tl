const onClickAddButton = () => {
   const text = document.getElementById("add-text").value;
   document.getElementById("add-text").value = "";

 const li = document.createElement("li");
 const div = document.createElement("div");

 const p = document.createElement("p");
 p.innerText = text;

 const deleteButton = document.createElement("button");
   deleteButton.innerText = "削除";
   deleteButton.addEventListener("click", () => {
    document.getElementById("task-list").removeChild(li);
   });

 div.appendChild(p);
 div.appendChild(deleteButton);
 li.appendChild(div);
   document.getElementById("task-list").appendChild(li);
}