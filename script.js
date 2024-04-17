const grid = document.querySelector('.grid')


const gridLayout = 4
const gridArray = []

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
        grid.appendChild(biscuit(i))
        gridArray.push(0)
    }
}

createGrid(gridLayout)


// grid.addEventListener('mouseover', function (e) {
//     if (e.target.className !== 'grid') {
//         e.target.classList.add('hover')
//     }
// })
//
// grid.addEventListener('click', function (e) {
//     if (e.target.className !== 'grid') {
//         addHoverFx(e.target)
//     }
// })
//
// function addHoverFx (biscuit) {
//     const biscuitVal = biscuit.classList[0]
//     gridArray[biscuitVal] = 1
//
//     biscuit.classList.add('eaten')
//
//     console.log(gridArray)
// }


