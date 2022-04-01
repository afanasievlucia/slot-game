const randInt = (min, max) => {
    return parseInt(Math.random() * (max-min) + min)
}

const  SlotGameWheel = (rootElement, spinEndCB) => {
    const frames = [ 'heart', 'seven', 'star', 'grapes', 'diamont', 'dollar', 'cherry'
    ]
    // mounting the component DOM structure
    let div = createElement('div', {class: 'slot-game--wheel'}, rootElement)
    
    div.addEventListener('click', () => {
        let turns = randInt(1, 10)
        renderWheelFrame(turns)
        while(turns--) {
            frames.push( frames.shift() )
        }
    })
    
    div.addEventListener('transitionend', () => {
        spinEndCB(frames[0])
        console.log(frames[0]);
    })

    let input = createElement('input', {type: 'text', value: '0'}, div)

    const renderWheelFrame = (index) => {
        div.style.backgroundPositionY = 16.5 * index + "%"
    }
    
    // mounting the component stylesheet
    let wheellLinkStyle = createElement('link', {rel: 'stylesheet', href: 'src/components/SlotGameWheel.css'}, document.head)
    return div
}