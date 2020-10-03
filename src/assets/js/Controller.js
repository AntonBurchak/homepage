import {Transition} from './Transition';
import {Pageview} from './Pageview';
class Controller {
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

    static setObserveLinker() {
        document.body.addEventListener('click', (e) => {
            e.preventDefault();
            
            const target = e.target;

            const firstLevel = target.tagName === 'A' && target.classList.contains('link');
            const secondLevel = target.offsetParent.tagName === 'A' && target.offsetParent.classList.contains('link');

            if(firstLevel || secondLevel) {
                const link = target.classList.contains('link') ? target : target.offsetParent;

                const hash = link.getAttribute('href');
                Controller.setHash(hash);
            } 
        });
    }

    static setObserveHashchange() {
        const currentHash = location.hash;
        window.addEventListener('hashchange', (e) => {
            const hash = location.hash;
            console.log(Controller.getHash(), e);
            console.log(Transition.hide())

            Transition.hide()
            .then((hash) => Pageview.parse(hash))
            .then((hash) => Transition.moveTo(hash));
        });
    }

    static setPushState(hash) {
        window.history.pushState({
            page: hash
        }, '', `?page=${hash}`);
    }

    static setDefaultHash() {
        if(!Controller.getHash()) {
            Controller.setHash('main');
        }
    }
}

Controller.setObserveLinker();
Controller.setObserveHashchange();
Controller.setDefaultHash();




const event = new Event('hashchange');
window.dispatchEvent(event);

export {Controller};

