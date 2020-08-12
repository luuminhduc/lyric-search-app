import {hideFlash} from './hideFlash.js';
export function showFlash(msg, className) {
    const flashMessageEl = document.querySelector('.flash-container');
    const flashMsg = document.querySelector('.flash-msg');
    console.log(className);
    if(flashMessageEl.classList.contains('success') || flashMessageEl.classList.contains('danger')) {
        hideFlash();
        setTimeout(() => {
            flashMsg.innerText = msg;
            flashMessageEl.classList.add(className);
        }, 1000)
    }else{
        flashMsg.innerText = msg;
        flashMessageEl.classList.add(className);
    }
}