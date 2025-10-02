// ここに処理を記述する
document.getElementById("add-button").addEventListener("click", () => {
    alert("追加ボタンがクリックされました");
});

// [追加]ボタンを取得して、クイックイベントを設定する
document.getElementById("add-button").addEventListener("click", onclickAddButton);

// [追加]ボタンがクリックされたときの処理
function onclickAddButton() {
    // テキストボックスに入力された値を取得する
    const text = document.getElementById("add-text").value;
    // 取得した値をコンソールに出力する
    console.log(text);

    // メモ一覧に追加する
    const li = document.createElement("li");
    li.innerText = text;
    document.getElementById("memo-list").appendChild(li);

    // テキストボックスを空にする
    document.getElementById("add-text").value = "";

    // メモ一覧を取得し、削除ボタンで削除できるようにする
    const memoList = document.getElementById("memo-list");
    const items = memoList.getElementsByTagName("li");
    for (let i = 0; i < items.length; i++) {
        const item = items[i];
        if (!item.querySelector("button")) {
            const deleteButton = document.createElement("button");
            deleteButton.innerText = "削除";
            deleteButton.addEventListener("click", () => {
                memoList.removeChild(item);
            });
            item.appendChild(deleteButton);
        }   
    }

}
