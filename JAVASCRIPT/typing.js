/* 메인 화면 타이핑 */
(function(){
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
}());

/* 스크롤 */
(function(){

/*메인 화면으로 돌아가기*/
const $mainDiv = document.querySelector('.mainDiv');

$mainDiv.addEventListener('click', () => window.scrollTo({top:0, behavior:'smooth'}));

const top = 100;


/* About me */
let $about = document.getElementById('about');
let $a = document.getElementById('A');

$a.addEventListener('click', () => window.scrollTo({top: ($about.offsetTop - top), behavior:'smooth'}));

/* Team Project */
let locationB = document.getElementById('team').offsetTop;
let $b = document.getElementById('B');

$b.addEventListener('click', () => window.scrollTo({top: locationB - top, behavior:'smooth'}));

// /* Personal Project */
// let locationC = document.getElementById('personal').offsetTop;
// let $c = document.getElementById('C');

// $c.addEventListener('click', () => scrollTo({top: locationC - top, behavior: 'smooth'}));

}());

/* 네비게이션 바 고정 */
(function(){
    const $mainNav = document.querySelector('.main-nav').offsetHeight;
    const $nav = document.querySelector('nav');
    const $mainDiv = document.querySelector('.mainDiv');


    addEventListener('scroll', function(){
        const scrollpositon = scrollY;

        if(scrollpositon >= $mainNav){
            $nav.classList.add('fix1');
            $mainDiv.classList.add('fix2');
        }else{
            $nav.classList.remove('fix1');
            $mainDiv.classList.remove('fix2');
        }
    }, true);

}());

/* 영문 구절 나오기 */
(function(){
    const $eng = document.querySelector('.eng');
    let scrolly = 0;
    const str = `My big fish must be somewhere`;

    window.addEventListener('scroll',(e) => {
        scrolly = this.scrollY;

        if(scrolly > 400){
            $eng.innerHTML = str;
        }
    });
}());

/* 내용 스크롤 */
(function(){
    const $ko1 = document.getElementById('ko1');
    const $ko2 = document.getElementById('ko2');
    const $ko3 = document.getElementById('ko3');
    const $ko4 = document.getElementById('ko4');
    const $ko5 = document.getElementById('ko5');
    const $ko6 = document.getElementById('ko6');
    const $ko7 = document.getElementById('ko7');
    const $ko8 = document.getElementById('ko8');

    const kor = [$ko1, $ko2, $ko3, $ko4, $ko5, $ko6, $ko7];

    const str1 = '헤밍웨이의 <노인과 바다>에 나오는 구절입니다.';
    const str2 = '어려운 상황에서도 희망을 잃지 않고 사자 꿈을 꾸며 잠들던 노인처럼'
    const str3 = '언제나 희망을 잃지 않는 사람이 되는 것이 저의 목표입니다.'
    const str4 = '끈기';
    const str5 = '를 가지고';
    const str6 = '도전';
    const str7 = '을';
    const str8 = '두려워하지 않는 개발자가 되겠습니다.';

    let scrolly = 0;

   window.addEventListener('scroll', () => {
    scrolly = this.scrollY;

    if(scrolly >= 420){
        setInterval(() => {$ko1.innerHTML = str1;}, 400);
        setInterval(() => {$ko2.innerHTML = str2;}, 600);
        setInterval(() => {$ko3.innerHTML = str3;}, 800);
        setInterval(() => {$ko4.innerHTML = str4;}, 1200);
        setInterval(() => {$ko5.innerHTML = str5;}, 1600);
        setInterval(() => {$ko6.innerHTML = str6;}, 1800);
        setInterval(() => {$ko7.innerHTML = str7;}, 1900);
        setInterval(() => {$ko8.innerHTML = str8;}, 2300);
    };
   })
}());
