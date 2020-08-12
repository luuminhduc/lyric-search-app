const form = document.querySelector('form');
const input = document.querySelector('input');
const flashBtn = document.querySelector('.flash-container i');

import{showFlash} from './jsModules/showFlash.js';
import{hideFlash} from './jsModules/hideFlash.js';
import{getSong, getData} from './jsModules/getSong.js';
import{displaySong} from './jsModules/displaySong.js';
import{showProgress} from './jsModules/handleProgress.js';
import{hideProgress} from './jsModules/handleProgress.js';
import{getLyric} from './jsModules/getLyric.js';
import{displayLyric} from './jsModules/displayLyric.js';
import{hideNext, hidePrev} from './jsModules/handleBtn.js';
  
form.addEventListener('submit', (e) => {
    e.preventDefault();
    if(input.value === '') {
        showFlash('Please give us something', 'danger');
    }else{
        hideFlash();
        showProgress();
        getSong(input.value.trim())
        .then(data => {
            displaySong(data)
        })
        .then(() => {
            hideProgress();
        })
    }
})

window.addEventListener('click', (e) => {
    if(e.target.classList.contains('next')) {
        showProgress();
        const nextUrl = e.target.getAttribute('data');
        handleNextAndPrev(nextUrl)
    }    
    if(e.target.classList.contains('prev')) {
        showProgress();
        const prevUrl = e.target.getAttribute('data');
        handleNextAndPrev(prevUrl);
    }
    if(e.target.classList.contains('get-lyric-btn')) {
        const artist = e.target.getAttribute('artist');
        const title = e.target.getAttribute('title');
        showProgress();
        getLyric(artist, title).then(data => {
            displayLyric(data, artist, title);
        })
        .then(() => {
            hideNext();
            hidePrev();
            hideProgress();
        })
    }
})

flashBtn.addEventListener('click', (e) => {
    hideFlash();
})

function handleNextAndPrev(url) {
    getData(url)
    .then(data => {
        displaySong(data);
    })
    .then(() => {
        hideProgress();
    })
}
