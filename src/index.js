//[追加]ボタンを押し時に実行する関数
const onClickAddButton = () => {
  // テキストボックスの値を取得し、変数に格納
  const inputText = document.getElementById("add-text").value;
  console.log(inputText);
  //メモー一覧に追加する要素を作成する
  //メモーの内容を設定する
  //削除ボタンを作成し、クリックイベントを設定する
  //メモー一覧に追加する
};
// 追加ボタンを取得して、クリックイベントを設定
document
  .getElementById("add-button")
  .addEventListener("click", onClickAddButton);
