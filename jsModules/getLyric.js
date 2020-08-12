import {url} from './url.js';
export async function getLyric(artist, title) {
    const res = await fetch(`${url}/v1/${artist}/${title}`);
    const data = await res.json();
    return data;
}