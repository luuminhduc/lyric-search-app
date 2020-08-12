import {url} from './url.js';
async function getSong(term) {
    const res = await fetch(`${url}/suggest/${term}`);
    const data = await res.json();
    return data
}

async function getData(url) {
    const res = await fetch(url);
    const data = await res.json();
    return data;
}

export{getSong, getData}

