function showNext() {
    document.querySelector('.next').classList.add('active');
}
function hideNext() {
    document.querySelector('.next').classList.remove('active');
}
function showPrev() {
    document.querySelector('.prev').classList.add('active');
}
function hidePrev() {
    document.querySelector('.prev').classList.remove('active');
}
export{showNext, hideNext, showPrev, hidePrev}