
class Animations {
    static elements = [];
    static activeClass = 'active';

    static animate = (hash) => {
        console.log(hash);
        switch(hash) {
            case '#main':
                console.log('success');
                Animations.animateMainPage();
                break;
            default:
                break;    
        }
        return hash;
    }

    static animateMainPage = () => {

        const delay = { // in ms
            delayBeforeGreeting: 7000, // initial delay
            delayBeforeShowName: 1500,
            delayBeforeShowJobPosition: 2500,
            delayBeforeShowButton: 2000
        }

        const animateGreeting = () => {
            const hide = document.querySelector('.bodyMain__heading-first .hide');
            Animations.elements.push(hide);

            return new Promise((resolve, reject) => {
                setTimeout(() => {
                    hide.classList.add(Animations.activeClass);
                    return resolve();
                }, delay.delayBeforeGreeting)
            }) 
        }

        const animateName = () => {
            const heading = document.querySelector('.bodyMain__heading-main');

            Animations.elements.push(heading);

            return new Promise((resolve, reject) => {
                setTimeout(() => {
                    heading.classList.add('show');
                }, delay.delayBeforeShowName);
    
                setTimeout(() => {
                    heading.classList.add(Animations.activeClass);
                    return resolve();
                }, delay.delayBeforeShowName + 1000)
            })
            
        }

        

        const animateJobPosition = () => {
            const slices = document.querySelectorAll('.bodyMain__heading-second span');
            const lastIndex = slices.length - 1;

            Animations.elements.push(slices);
 
            return new Promise((resolve, reject) => {
                slices.forEach((span, index) => {
                    setTimeout(() => {
                        span.classList.add(Animations.activeClass);
                    }, delay.delayBeforeShowJobPosition + ((index + 1) * 1000));
                })
                setTimeout(() => resolve(), delay.delayBeforeShowJobPosition + ((lastIndex + 1) * 1000))
            })
            
        }
        
        const animateButtonNext = () => {
            const button = document.querySelector('.bodyMain__heading-hi');

            Animations.elements.push(button);

            return new Promise((resolve, reject) => {
                setTimeout(() => {
                    button.classList.add(Animations.activeClass);
                    return resolve()
                }, delay.delayBeforeShowButton)
            })
            
        }
        
        animateGreeting()
        .then(() => animateName())
        .then(() => animateJobPosition())
        .then(() => {
            console.log(delay);
            return animateButtonNext()
        })
        .then(() => Animations.resetAnimation())
    }

    static resetAnimation = (hash) => {
        console.log('Emulate reset... ' + hash, Animations.elements);
        // Animations.elements.forEach(element => element.classList.remove(Animations.activeClass));
    }
}
// Animations.animate('123');

export default Animations;