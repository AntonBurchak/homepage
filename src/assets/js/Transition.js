import {pages} from './pages'; 
import {Pageview} from './Pageview';
import {Controller} from './Controller';

class Transition {
    static speed = 1000; // ms
    static mainSelector = '.bodyWrap'; // main selector (wrapper)

    static clear(parent) {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                parent.innerHTML = null;
                return resolve(Controller.getHash());
            }, this.speed);
        })
    }
    
    static moveTo(hash) {
        return console.log(`moved to ${hash}`);
    }

    static hide(parent = document.body) {
        const wrapper = parent.querySelector(this.mainSelector);
        wrapper.classList.add('hide');
        console.trace();
        return this.clear(parent);
    }
};

// Transition.hide();
Transition.moveTo('main');

export {Transition};