import {pages} from './pages';

class Pageview {
    static parent = document.body;

    static parse(hash) {
        console.log(pages, hash, parent);
        this.parent.innerHTML = pages[hash];
        return hash;
    }

    static clear(hash) {

    }
}

export {Pageview};