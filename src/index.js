// ここに処理を記述する
const onClickAddButton = () => {
    // テキストボックスの値を取得し初期化
  const textEl = document.getElementById("add-text");
  const text = textEl.value;
  textEl.value = "";

  const li = document.createElement("li");

  // divタグ生成
  const div = document.createElement("div");

  // pタグ生成(テキストボックスの文字を設定)
  const p = document.createElement("p");
  p.textContent = text;

  // buttonタグ生成(ラベルは「削除」)
  const button = document.createElement("button");
  button.textContent = "削除";
  button.addEventListener("click", () => {
    // 削除対象の行(li)を取得
    // closestは親要素に一致する文字列を探すメソッド
    const deleteTarget = button.closest("li");

    // ulタグは以下から上記で特定した行を削除
    document.getElementById("memo-list").removeChild(deleteTarget);
  });
  div.appendChild(p);
  div.appendChild(button);
  li.appendChild(div);

   document.getElementById("memo-list").appendChild(li);

}
document
  .getElementById("add-button")
  .addEventListener("click", () => onClickAddButton());
