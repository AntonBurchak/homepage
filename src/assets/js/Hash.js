// import {Controller} from './Controller';


class Hash {
    static setHash(hash) {
        if(typeof hash === 'string') {
            location.hash = hash;
        } else {
            throw new Error('Hash key is invalid.');
        }
    }

    static getHash() {
        return location.hash;
    }
}

export {Hash}