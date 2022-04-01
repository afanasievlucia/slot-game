const SlotGame = (rootElement) => {
    const wheels = [] 
    let selectedFrames = []

    let scriptUtil = document.createElement('script')
    scriptUtil.src = 'src/libs/DOMUtils.js'
    document.body.appendChild(scriptUtil)

    // const domElements = [
    //     {
    //         elemName: 'divContainer',
    //         type: 'div',
    //         class: 'slot-game-container',
    //         root: 'rootElement'
    //     },
    //     {
    //         elemName: 'divHead',
    //         type: 'div',
    //         class: 'slot-game-header',
    //         root: 'divContainer'
    //     },
    //     {
    //         elemName: 'divContent',
    //         type: 'div',
    //         class: 'slot-game-content',
    //         root: 'divContainer'
    //     },
    //     {
    //         elemName: 'divLContent',
    //         type: 'div',
    //         class: 'slot-game-content-left',
    //         root: 'divContent'
    //     },
    //     {
    //         elemName: 'divRContent',
    //         type: 'div',
    //         class: 'slot-game-content-right',
    //         root: 'divContent'
    //     },
    //     {
    //         elemName: 'divContentScreen',
    //         type: 'div',
    //         class: 'slot-game-content-screen',
    //         root: 'divContent'
    //     },
    // ]


    // mounting the subcomponents
    
    // const components = [
    //     {
    //         tagName: 'link',
    //         attr: {
    //             rel: 'stylesheet',
    //             href: 'src/components/SlotGame.css'
    //         },
    //         root: 'document.head'
    //     },
    //     {
    //         tagName: 'script',
    //         attr: {
    //             src: 'src/components/SlotGameLed.js'
    //         },
    //         root: 'document.body'
    //     },
    //     {
    //         tagName: 'script',
    //         attr: {
    //             src: 'src/components/SlotGameWheel.js'
    //         },
    //         root: 'document.body'
    //     },
    // ]

    setTimeout(()=>{
        createElement('link', {rel: 'stylesheet', href: 'src/components/SlotGame.css'}, document.head)
        createElement('script', {src: 'src/components/SlotGameLed.js'}, document.body)
        createElement('script', {src: 'src/components/SlotGameWheel.js'}, document.body)

// loading subcomponents
        // components.forEach(element => {
        //    createElement(`${element.tagName}, { ${element.attr} }, ${element.root}`)
        // })


// creating all the DOM elements
        // domElements.forEach(element => {
        //     let elemName = createElement(`${element.type}, {class: ${element.class}}, element.root`)
        // })

        let divContainer = createElement('div', { class: 'slot-game-container'}, rootElement)
        
        let divHead = createElement('div', { class: 'slot-game-header'}, divContainer)
        let divTopHead = createElement('div', { class: 'slot-game-top-header'}, divHead)
        let divLeftHead = createElement('div', { class: 'slot-game-left-header'}, divHead)
        let divRightHead = createElement('div', { class: 'slot-game-right-header'}, divHead)
        let divTextHead = createElement('div', { class: 'slot-game-text-header'}, divHead)
            let h1 = createElement('h1', {class: 'gradient-text'}, divTextHead)
            // let text = document.createTextNode('BIG WIN')
            // h1.appendChild(text)
            h1.innerText = 'BIG WIN'  // less code

        let divContent = createElement('div', { class: 'slot-game-content'}, divContainer)
        let divLContent = createElement('div', { class: 'slot-game-content-left'}, divContent)
        let divRContent = createElement('div', { class: 'slot-game-content-right'}, divContent)
        
        let divFooter = createElement('div', {class: 'slot-game-footer'}, divContent)
        let divFooterBorder = createElement('div', {class: 'slot-game-footer-border'}, divContent)
        let divButtonsContainer =createElement('div', {class: 'slot-game-footer-buttons-container'}, divContent)
        let divButtons = createElement('div', {class: 'slot-game-footer-buttons'}, divButtonsContainer)

        let divFooterBotton1 = createElement('div', {class: 'slot-game-footer-button button1'}, divButtons)
        let divFooterBotton2 = createElement('div', {class: 'slot-game-footer-button button2'}, divButtons)
        let divFooterBotton3 = createElement('div', {class: 'slot-game-footer-button'}, divButtons)
        let divFooterBotton4 = createElement('div', {class: 'slot-game-footer-round-button'}, divButtonsContainer)

        let buttonGo = createElement('button', { class: 'slot-game-button-go'}, divContent)
        let handler = createElement('div', {class: 'slot-game-handler'}, divContent)
        let handlerBall = createElement('div', {class: 'slot-game-handler-ball'}, divContent)


// START THE GAME
        buttonGo.addEventListener('click', (e) => {
            wheels.forEach(wheel => wheel.dispatchEvent(new Event('click')))
            setTimeout(()=> {
                let allEqual = true
                for(let i = 0; i < selectedFrames.length; i++) {
                    if( !selectedFrames.includes(selectedFrames[i])) {
                        allEqual = false
                        break
                    }
                }
                if(allEqual && selectedFrames[0] == 'seven')  {
                    h1.innerText = 'Win!300$'
                    h1.style.fontSize = '40px'
                }
            }, 1500)
        })
        
        let divContentFrame = createElement('div', { class: 'slot-game-content-frame'}, divContent)
        let divContentScreen = createElement('div', { class: 'slot-game-content-screen'}, divContentFrame)

        let i = 4;
        while(i-- >1) {
            let divScreenWindow = createElement('div', { class: `slot-game-screen-window-${i}`}, divContentScreen)
        }

    }, 200)

    // delay the function invokation to make sure the script loaded
    setTimeout(()=>{

        for(let i = 1; i <= 3; i++) {
            wheels.push(SlotGameWheel(
                document.querySelector(`.slot-game-screen-window-${i}`), ()=>{})
                // (selectedFrame) => {console.log(selectedFrame);})
            )
        }

        for(let ledTopCount = 0; ledTopCount < 10; ledTopCount++) {
            SlotGameLed(document.querySelector('.slot-game-top-header'))
        }

        for(let ledCount = 0; ledCount < 4; ledCount++) {
            SlotGameLed(document.querySelector('.slot-game-left-header'))
            SlotGameLed(document.querySelector('.slot-game-right-header'))
        }

        for(let lCount = 0; lCount < 9; lCount++) {
            SlotGameLed(document.querySelector('.slot-game-content-left'))
            SlotGameLed(document.querySelector('.slot-game-content-right'))
        }
    }, 500)
}