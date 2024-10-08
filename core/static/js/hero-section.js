const blueTones = [
    '#0f111d',     
    '#121421', 
    '#151627', 
    '#181a2c', 
    '#1b1d32', 
    '#1e202f',
];

const createGrid = (display) => {
    gridItemSize = 25;

    display.style.display = 'grid';
    display.style.gridTemplateColumns = `repeat(auto-fill, minmax(${ gridItemSize }px, 1fr))`;
    display.style.gap = '4px';

    const numSquares = Math.floor(display.clientWidth / 20) * Math.floor(display.clientHeight / 20);
    for (let i = 0; i < numSquares; i++) {
        const gridItem = document.createElement('div');
        gridItem.style.width = `${ gridItemSize }px`;
        gridItem.style.height = `${ gridItemSize }px`;
        gridItem.style.transition = 'background-color 1s linear';
        gridItem.style.backgroundColor = blueTones[Math.floor(Math.random() * blueTones.length)];
        display.appendChild(gridItem);
    }

    setInterval(() => {
        const gridItems = display.children;
        for (let i = 0; i < gridItems.length; i++) {
            const nextColor = blueTones[Math.floor(Math.random() * blueTones.length)];
            gridItems[i].style.backgroundColor = nextColor;
        }
    }, 1000);
};

heroSectionBackground = document.querySelector('#hero-background');
if (heroSectionBackground) {
    createGrid(heroSectionBackground);
}