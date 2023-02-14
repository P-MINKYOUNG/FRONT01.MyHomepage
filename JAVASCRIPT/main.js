/* 메인 화면 타이핑 */
const content = "MINKYOUNG'S PORTFOLIO :)";
const $text = document.querySelector(".text");
let i = 0;
let before;
let after = '';

setInterval(() => {

    if(i <= content.length){
        before = content.charAt(i);
        after += before;
        console.log($text.textContent = after);
        i++;
    }

}, 100);