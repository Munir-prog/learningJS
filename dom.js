const heading = document.getElementById('hello')
// const heading2 = document.getElementsByTagName('h2')[0] old and slow
// const heading2 = document.getElementsByClassName('h2-class ')
// const heading2 = document.querySelector('#h2-id')
const heading2 = document.querySelector('h2')


// const heading3 = heading2.nextElementSibling
const h2List = document.querySelectorAll('h2')
const heading3 = h2List[1]

setTimeout(() => {
    addStylesTo(heading, 'Hello!', 'red', 'black')
}, 1000)

setTimeout(() => {
    addStylesTo(heading2, 'Welcome to JS course', 'red ', 'blue')
}, 2000)

setTimeout(() => {
    addStylesTo(heading3, 'You will know everything!', '#abcdef', 'black')
}, 3000)


function addStylesTo(node, text, textColor, backgroundColor) {
    node.textContent = text
    node.style.color = textColor
    node.style.textAlign = 'center'
    node.style.padding = '2rem'
    node.style.backgroundColor = backgroundColor
}

heading.onclick = () => {
    if (heading.style.color === 'red') {
        heading.style.color = 'black'
        heading.style.backgroundColor = 'white'
    } else {
        heading.style.color = 'red'
        heading.style.backgroundColor = 'black'
    }
}

heading2.addEventListener('dblclick', () => {
    if (heading2.style.color === 'red') {
        heading2.style.color = 'black'
        heading2.style.backgroundColor = 'white'
    } else {
        heading2.style.color = 'red'
        heading2.style.backgroundColor = 'black'
    }
})