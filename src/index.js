// [追加]ボタンを取得して、クリックイベントを設定
const onClickAddButton = () => {
    // テキストボックスの値を取得し、初期化する
    const text = document.gitElementById("addd-text").value;
    // console.log(text);
    // メモ一覧に追加する要素を作成する
    const li = document.createElement("li");
    const div = document.createElement("div");
    // メモの内容を設定する
    const p = document.createElement("p");
    p.innerText = Text;
    // [削除]ボタンを作成し、クリックイベントを設定する
    const deleteButton = document.createElement("button");
    deleteButton.innerText = "削除";
    deleteButton.addEventListener("click",() => {
        // alert("削除しました");
        // document.getElementById("memo-list").removeChild(li);

        const deleteTarget = deleteButton.closest("li");
        document.getElementById("memo-list").removeChild(deleteTarget);
    });
    // メモの内容を設定する
    div.appendChild(p); // メモの内容
    div.appendChild(docmentButton); // [削除]ボタン
    li.appendChild(div); // li要素にdivを追加
    document.getElementById("memo-list").appendChild(li);
    // メモ一覧に追加する
}
// [追加]ボタンを取得して、クリックイベントを設定
document.getElementById("add-button")
.addEventListener("click",onClickAddButton);