const grid = document.querySelector('.grid')


const gridLayout = 4

grid.style.gridTemplateColumns = `repeat(${gridLayout}, 1fr)`

function biscuit (n) {
    const img = document.createElement('img');
    img.className = n;
    img.src = 'images/biscuit.png'
    return img
}

function createGrid (n) {
    n = n * n
    for (let i = 0; i < n; i++) {
        grid.appendChild(biscuit(i + 1))
    }

}

createGrid(gridLayout)

grid.addEventListener('mouseover', function (e) {
    if (e.target.className !== 'grid') {
        addHoverFx(e.target)
    }
})

function addHoverFx (biscuit) {
    const biscuitVal = biscuit.classList[0]

    // if (biscuitVal <= 4) {
    //     console.log(biscuitVal, 'A')
    // } else if (biscuitVal <= 8) {
    //     console.log(biscuitVal, 'B')
    // } else if (biscuitVal <= 12) {
    //     console.log(biscuitVal, 'C')
    // } else if (biscuitVal <= 16) {
    //     console.log(biscuitVal, 'D')
    // }

    console.log(biscuitVal)

    biscuit.classList.add('hover')

}
