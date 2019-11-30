const MOBILE_BUTTON = document.querySelector('.frame--controls_mobile');
const BACK_BUTTON = document.querySelector('.frame--controls_back');
const FRAME = document.querySelector('.frame');
const FRAME_CONTAINER = document.querySelector('.frame-container');

function changeText(width){
    let content = width > 640  ? 'mobile' : 'desktop';
    MOBILE_BUTTON.textContent = content.toUpperCase();
}

function changeWidthPage() {
    let width = parseFloat(getComputedStyle(FRAME).width);
    switch(FRAME_CONTAINER.classList[1]){
        case 'theyallow_height':
        FRAME.style.width = width > 640 ? '640px' : '1300px';
        FRAME_CONTAINER.style.height = width > 640 ? '1560px' : '1850px';
        break;
        case 'repair':
        FRAME.style.width = width > 640 ? '375px' : '1440px';
        FRAME_CONTAINER.style.height = width > 640 ? '9050px' : '10200px';
        break;
    }
    changeText(parseFloat(getComputedStyle(FRAME).width));
}

MOBILE_BUTTON.addEventListener('click', changeWidthPage);
BACK_BUTTON.addEventListener('click', () => {
    location.href='../index.html'
});
