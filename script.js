const grid = document.querySelector('.grid')


const gridLayout = 4
const gridArray = []

grid.style.gridTemplateColumns = `repeat(${gridLayout}, 1fr)`

function biscuit (n) {
    const img = document.createElement('img');
    img.className = `biscuit ${n}`;
    img.src = 'images/biscuit.png'
    return img
}

function createGrid (n) {
    n = n * n
    for (let i = 0; i < n; i++) {
        grid.appendChild(biscuit(i))
        gridArray.push(0)
    }
}

createGrid(gridLayout)


grid.addEventListener('mouseover', function (e) {
    if (e.target.classList.contains('biscuit')) {
        addHoverFx(e)
        }
})

grid.addEventListener('click', function (e) {
    if (e.target.classList.contains('biscuit')) {
        e.target.classList.add('eaten')
        console.log(e.currentTarget.children)
    }
})

function addHoverFx(el) {
    const currentPos = Number.parseInt(el.toElement.classList[1])

    gridArray[currentPos] = 1

    for (let i = 0; i <= gridArray.length; i++) {
        if (gridArray[i] === 1) {
            el.currentTarget.childNodes[i + 1].classList.add('eaten')
        } else if (gridArray[i] === 0) {
            el.currentTarget.childNodes[i + 1].classList.remove('eaten')
        }
    }

    el.currentTarget.addEventListener('mouseout', function (e) {
        gridArray[currentPos] = 0
        e.currentTarget.childNodes[currentPos + 1].classList.remove('eaten')
    })
}


