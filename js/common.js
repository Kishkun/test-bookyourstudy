// header-mobile-button
let mobileButton = document.querySelector('.header-mobile-button-body');
let mobileButtonLine = document.querySelectorAll('.header-mobile-button-line');
let headerMobile = document.querySelector('.header-mobile');
let headerTopMobileEl = document.querySelector('.header-top-content');

let clickMobileButton = function () {
    for (let i = 0; i < mobileButtonLine.length; i++) {
        mobileButtonLine[i].classList.toggle('header-mobile-button-line-active')
    }
    headerMobile.classList.toggle('header-mobile-active');
    headerTopMobileEl.classList.toggle('header-top-content-shadow');
};
if (mobileButton) {
    mobileButton.addEventListener('click', clickMobileButton);
}
