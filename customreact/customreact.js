function customRender(reactElement, mainContainer) {
    /*
    const domElement = document.createElement(reactElement.type);
    domElement.innerHTML = reactElement.children
    domElement.setAttribute('href', reactElement.props.href)
    domElement.setAttribute('target', reactElement.props.target)

    mainContainer.appendChild(domElement)
    */

    const domElement = document.createElement(reactElement.type);
    domElement.innerHTML = reactElement.children
    for (const i in reactElement.props) {
        if (i === 'children') continue
        domElement.setAttribute(i, reactElement.props[i])
    }
    mainContainer.appendChild(domElement)
}

const reactElement = {
    type: 'a',
    props: {
        href: 'https://google.com',
        target: '_blank'
    },
    children: 'Click me to visit google'
}
const mainContainer = document.querySelector('#root');


customRender(reactElement, mainContainer);