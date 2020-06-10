
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
            // console.log('work', target, target.tagName === 'A')
            if(target.tagName === 'A' && target.classList.contains('link')) {
                const link = target.getAttribute('href');
                Controller.setHash(link);
            }
        });
    }
}
Controller.setObserveLinker();

export {Controller};


console.log(Controller.getHash());