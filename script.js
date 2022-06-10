const colors = ["green", "red", "rgba(133,122,200)", "#f15025"];
const btn = document.getElementById('btn');
const color = document.querySelector('.color');


//Add event listener to the button
btn.addEventListener('click', function () {
    // console.log(document.body);
    const randomNumber = 2;
    document.body.style.backgroundColor = colors[randomNumber];
    color.textContent = colors[randomNumber];
});