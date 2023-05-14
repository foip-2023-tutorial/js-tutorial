// 課題について基本的にはJSファイルをいじります
// 課題1についてのヒントを記載しています

// まずは、ulタグdocumet.querySelectorで取得します

//　form タグをまずは、documet.querySelectorで取得します
const form = document.querySelector("form")
// "todo"というidがついているinputタグをdocument.getElementByIdで取得して,todoInputという変数に格納してください

// formタグのsubmitイベントをaddEventListenerを用いて登録してください
form.addEventListener("submit", (e) => {
  // e.preventDefault()を用いてデフォルトのイベントをキャンセルしてください
  e.preventDefault()
  // タスク一個を表すためのliタグを作成します
  // liタグはcreateElementを用いて作成してください。

  // liタグのテキストには、todoInput.valueを代入してください

  //button.textContentを用いてテキストを代入することができます

  //todoInput.value = ""でtodoInputのvalueを空にします

  // liタグをulタグの子要素に追加してください

  //ここまで作成するとタスクを追加することができるようになります.
  // live serverからindex.htmlを起動して、確認してみましょう！

  // ここからは、削除ボタンを作成していきます
  // まずは、documet.createElementを用いてbuttonタグを作成してください.

  // buttonタグのテキストは、"削除"を代入します
  // deleteButton.textContentを用いてテキストを代入することができます

  //deleteButtonをliタグの子要素に追加してください
  //li.appendChild(追加したい要素)で追加することができます

  //次に、deleteButtonを押したときに、liタグを削除する処理を記載していきます
  //buttonタグのclickイベントをaddEventListenerを用いて登録してください
  //button.addEventListener("click", (e)=>{})で登録することができます

  //ここからは、button.addEventListenerの関数の中で行う処理を記載していきます
  // e.target.parentElementを用いて、buttonの親要素であるliタグを取得してください

  // e.targetは、イベントが発生した要素を取得することができます

  // li.remove()を用いて、liタグを削除してください

  //ここまで記載すると、削除ボタンを押したときに、タスクが削除されるようになります
  // live serverからindex.htmlを起動して、確認してみましょう！

  // 課題2についてのヒントを記載しています
  // 基本的にform.addEventListener("submit", (e)=>{})の中でやってもらいます
  // type属性checkboxのinputタグを作成してください
  // inputタグはcreateElementを用いて作成してください。

  // checkbox.type = "checkbox"でtype属性をcheckboxに変更してます

  // checkboxをliタグの子要素に追加してください

  //checkboxが変化したときのイベントをaddEventListenerを用いて登録してください //checkbox.addEventListener("change", (e)=>{})で登録することができます
  //ここからは,checkbox.addEventListenerの関数の中で行う処理を記載していきます

  //if文を用いてe.currentTarget.checkedがtrueの時とfalseの時で処理を分けてください

  //trueの時は、li.style.textDecoration = "line-through"を用いて、liタグのテキストを取り消し線にしてください

  //falseの時は、li.style.textDecoration = "none"を用いて、liタグのテキストを取り消し線をなくしてください

  //ここまで来たら、live serverからindex.htmlを起動して、確認してみましょう！
})
