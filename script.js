const grid = document.querySelector('.grid')

const gridLayout = 4
const matrix = []

const createMatrix = function (n, m) {
    for (let i = 0; i < n; i++) {
        matrix.push([]);
        for (let j = 0; j < m; j++) {
            matrix[i].push(0);
        }
    }
}

createMatrix(gridLayout, gridLayout);

const matrixIndex = function (index) {
    if (index < 4) {
        return `0${index}`
    } else if (index < 8) {
        return `1${index - 4}`
    } else if (index < 12) {
        return `2${index - 8}`
    } else if (index < 16) {
        return `3${index - 12}`
    }
}

grid.style.gridTemplateColumns = `repeat(${gridLayout}, 1fr)`

function createBiscuit (index) {
    const biscuit = document.createElement('img');
    biscuit.className = `biscuit ${biscuitClassName(index)}`
    biscuit.src = 'images/biscuit.png'
    return biscuit
}

function biscuitClassName (index) {
    return matrixIndex(index)
}

function createGrid (n=gridLayout, m=gridLayout) {
    let index = n * m
    for (let i = 0; i < index; i++) {
        grid.appendChild(createBiscuit(i))
    }
}

createGrid(gridLayout)

// Logic
grid.addEventListener('mouseover', function (e) {
    if (e.target.classList.contains('biscuit')) {
        const target = e.target
        matrixOn(target)
        matrix.forEach(el => console.log(el))
    }
})

grid.addEventListener('mouseout', function (e) {
    if (e.target.classList.contains('biscuit')) {
        const target = e.target
        matrixOff(target)
        matrix.forEach(el => console.log(el))
    }
})

const matrixOn = function (index, mtx=matrix) {
    const newIndex = index.classList.value
    const n = newIndex[8]
    const m = newIndex[9]
    for (let i = n; i < 4; i++) {
        mtx[i][m] = 1
        for (let j = m; j < 4; j++) {
            mtx[i][j] = 1
        }
    }
}

const matrixOff = function (index, mtx=matrix) {
    const newIndex = index.classList.value
    const n = newIndex[8]
    const m = newIndex[9]
    for (let i = n; i < 4; i++) {
        mtx[i][m] = 1
        for (let j = m; j < 4; j++) {
            mtx[i][j] = 0
        }
    }
}

/*
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
    const currentPos = Number.parseInt(el.classList[1])

    gridArray[currentPos] = 0
    gridArray.forEach(e => {
        if (e === 0) {
            biscuit.classList.remove('hover')
        }
    })
}
*/
