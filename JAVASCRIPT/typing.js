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

/* 발바닥 */
(function(){
const $paw = document.getElementById('paw');
let x = 10;
const stepping = 10;

function step(){
    x += stepping;

    $paw.style.left = x;
}

setInterval(step(), 100);
}());


/* 스크롤 */
(function(){
/*메인 화면으로 돌아가기*/
const $mainDiv = document.querySelector('.mainDiv');

$mainDiv.addEventListener('click', () => window.scrollTo({top:0, behavior:'smooth'}));


/* About me */
const $about = document.getElementById('about');
const $a = document.getElementById('A');
const locationA = $about.offsetTop;

$a.addEventListener('click', () => window.scrollTo({top: locationA, behavior:'smooth'}));

/* Team Project */
const locationB = document.getElementById('team').offsetTop;
const $b = document.getElementById('B');

$b.addEventListener('click', () => window.scrollTo({top: locationB , behavior:'smooth'}));

/* Personal Project */
const locationC = document.getElementById('personal').offsetTop;
const $c = document.getElementById('C');

$c.addEventListener('click', () => scrollTo({top: locationC, behavior: 'smooth'}));

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

/* page2 */
(function(){
    const $eng = document.querySelector('.eng');
    const $page1 = document.querySelector('.page1');
    const $page2 = document.querySelector('.page2')
    const str = `"My big fish must be somewhere"`;

    $page2.addEventListener('wheel',(e) => {

        if(window.scrollY > $page1.offsetHeight/1000){
            $eng.innerHTML = str;
        }

    })
}())
