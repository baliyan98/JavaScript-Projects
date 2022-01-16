const colors = ["green", "red", "rgba(133,122,200)", "#f15025"];

const btn = document.querySelector('#btn');

const color = document.querySelector('.color');

 // adding event listener on button ' click me'
btn.addEventListener('click' , ()=>{
    const random = generateNumber();
    document.body.style.backgroundColor = colors[random];
    color.textContent = colors[random];
    
})
 // generating random color from the colors array
function generateNumber(){
    return Math.floor(Math.random()*colors.length);
}
