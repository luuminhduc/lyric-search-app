import {showNext, hideNext, showPrev, hidePrev} from './handleBtn.js';
export function displaySong(data) {
    const songContainer = document.querySelector('.output');
    console.log(data.data);
    if(data.data.length <= 0) {
        songContainer.innerHTML = `<h1>Sorry there is no song with that name</h1>`
    }else{
        if(data.next) {
            document.querySelector('.next').setAttribute('data', data.next);
            showNext();
        }else{
            hideNext();
        }
        if(data.prev) {
            document.querySelector('.prev').setAttribute('data', data.prev);
            showPrev();
        }else{
            hidePrev();
        }
        songContainer.innerHTML = data.data.map(el => `
                                     <div class="song-card">
                                       <div class="song-card-left">
                                         <img src="${el.album.cover_small}"></img>
                                         <div class="song-info"> 
                                           <h3>${el.title}</h3>
                                           <p>${el.artist.name}</p>
                                         </div>
                                       </div>
                                       <button artist="${el.artist.name}" title="${el.title}" type="button" class="get-lyric-btn">Lyric</button>
                                     </div>
                                  `).join('')
    }
}