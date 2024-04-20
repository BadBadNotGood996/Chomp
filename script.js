const grid = document.querySelector('.grid')


const gridLayout = 4
const gridArray = []

grid.style.gridTemplateColumns = `repeat(${gridLayout}, 1fr)`

function createBiscuit (n) {
    const img = document.createElement('img');
    img.className = `biscuit ${n} ${biscuitClassName(n)}`;
    img.src = 'images/biscuit.png'
    return img
}

function biscuitClassName (n) {
    const rowA = [0, 4, 8, 12]
    const rowB = [1, 5, 9, 13]
    const rowC = [2, 6, 10, 14]

    if (rowA.includes(n)) {
        return 'A';
    } else if (rowB.includes(n)) {
        return 'B';
    } else if (rowC.includes(n)) {
        return 'C';
    } else {
        return 'D'
    }
}

function createGrid (n) {
    n = n * n
    for (let i = 0; i < n; i++) {
        grid.appendChild(createBiscuit(i))
        gridArray.push(0)
    }
}

createGrid(gridLayout)


grid.addEventListener('mouseover', function (e) {
    if (e.target.classList.contains('biscuit')) {
        const biscuit = e.target;
        hoverFx(biscuit)
    }
})

grid.addEventListener('mouseout', function (e) {
    if (e.target.classList.contains('biscuit')) {
        const biscuit = e.target;
        hoverFxNo(biscuit)
    }
})

grid.addEventListener('click', function (e) {
    if (e.target.classList.contains('biscuit')) {
        e.target.classList.add('eaten')
        console.log(e.currentTarget.children)
    }
})

function hoverFx(el) {
    const biscuit = el
    const biscuitCol = el.classList[2]
    const currentPos = Number.parseInt(el.classList[1])

    gridArray[currentPos] = 1
    gridArray.forEach(e => {
        if (e === 1) {
            biscuit.classList.add('hover')
        }
    })
}

function hoverFxNo(el) {
    const biscuit = el
    const biscuitCol = el.classList[2]
    const currentPos = Number.parseInt(el.classList[1])

    gridArray[currentPos] = 0
    gridArray.forEach(e => {
        if (e === 0) {
            biscuit.classList.remove('hover')
        }
    })
}
