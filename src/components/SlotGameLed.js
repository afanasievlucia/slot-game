const SlotGameLed = (rootElement) => {
    // mounting the component DOM structure
    let div = createElement('div', {className: 'slot-game-led'}, rootElement)

    // mounting the cpomponent stylesheet   
    let ledLinkStyle = createElement('link', {rel: 'stylesheet', href: 'src/components/SlotGameLed.css'}, document.head)

    // setting animation timer
    let timer = setInterval(()=>{
        if(div.className == 'slot-game-led') {
            div.className = 'slot-game-led lighted'
        } else {
            div.className = 'slot-game-led'
        }
    }, Math.random() * 250 + 250)
}