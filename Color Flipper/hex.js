const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];

const btn = document.querySelector('#btn');

const color = document.querySelector('.color');

// adding event listener on button ' click me'
btn.addEventListener('click', () => {
    let random = '#';
    for (let i = 0; i < 6; i++) {
        random += hex[generateNumber()];
        console.log(random);
    }
    document.body.style.backgroundColor = random;
    color.textContent = random;

})
// generating random color from the colors array
function generateNumber() {
    return Math.floor(Math.random() * hex.length);
}