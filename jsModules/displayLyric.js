export function displayLyric(data, artist, title) {
    const output = document.querySelector('.output');
    const lyrics = data.lyrics.replace(/(\r\n|\r|\n)/g, '<br>');
    output.innerHTML = `
                         <p><h1>${title}</h1> by ${artist}</p>
                         <p class="lyric">${lyrics}</p>
                       `
    console.log(data);
}