console.log("Hello World");
//console.log("Hello World");
console.log(5+2);
//7
console.log(9%2);
//1
console.log("ひつじ"+"仙人");

let na = "john";
console.log(na+ "さん");
//変数naにjohnが代入
//変数名は2語以上の場合は大文字で区切る
na="Kate";
//変数名上書き　let不要

let num = 5;
num=num + 3;
console.log(num)
//8 変数の更新

const a = "js";
// 定数aにjsを代入　更新不可

console.log(`こんにちは、${a}さん`);
//テンプレートリテラル　バッククォーテーション必要

const num = 12;
if(num<12){
    console.log("numは10より大きい");
}
console.log(num>10);
//true
console.log8(num<10);
//false

const password = "ninjawanko";

// passwrdの値が"ninjawanko"の場合、「ログインに成功しました」と出力してください
if (password==="ninjawanko"){
  console.log("ログインに成功しました");
}
//===で等号
const num = 12;
if (num>10){
    console.log("10以上です");
}else{
    console.log("10以下です");
}
//else文


//&&でかつ　
const num =12;
if (num>=10 && num<20){
    console.log("10代");
}
//または
const num =12;
if (num>=10 || num<=19){
console.log("10代");
}

//ある値によって条件を分岐する　switch
//caseごとにbreak;必須
//defaultはelseと同意義
const color = "赤";
switch(color){
    case"赤":
        console.log("止まれ");
        break;
    case"黄":
        console.log("注意");
        break;
    default:
        console.log("値が正しくない");
        break;
}
//while繰り返し
let num = 1;
while (num <= 100){
    console.log(num);
    num += 1;
}
//for繰り返し  num++ で　num+=1と同じ意味
for(let num = 1;  num <= 100; num += 1){
    console.log(num);
}








