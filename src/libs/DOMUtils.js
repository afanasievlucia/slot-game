const createElement = (tagName, attributes, rootElement) => {
    let element = document.createElement(tagName)
    for(let k in attributes) {
        element.setAttribute(k, attributes[k])
    }
    rootElement.appendChild(element)
    return element
}