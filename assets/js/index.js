

for (let i = 0; i < 100; i++) {
    const elem = document.createElement('div')
    elem.classList.add('anim');
    elem.style.top = 30 * i + 'px';
    elem.style.opacity = i / 20 + ''
    document.querySelector('.body').appendChild(elem);
}
const cl = randColor();
document.querySelectorAll('.anim').forEach((el) => {
    el.style.background = cl
})
setTimeout(() => {
    document.querySelectorAll('.anim').forEach((el, index) => {
        setTimeout(() => {
            el.classList.add('active');
        }, index * 10)
    })
}, 500)

setTimeout(() => {
    document.querySelectorAll('.anim').forEach((el, index) => {
        el.remove();
    })
}, 3000)

function randColor() {
    const r = Math.floor(Math.random() * (256)),
        g = Math.floor(Math.random() * (256)),
        b = Math.floor(Math.random() * (256)),
        color = '#' + r.toString(16) + g.toString(16) + b.toString(16);

    return color;
}

