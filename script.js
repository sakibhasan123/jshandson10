'use strict';

//first
const text = document.getElementById('text');
console.log(text);

//second
const headingFirst = document.getElementsByTagName('h1');
console.log(headingFirst[1]);

//third
const box = document.getElementsByClassName('box');
console.log(box[0]);

// forth
const headingThird = document.querySelector('h3');
headingThird.addEventListener('click', () => {
    headingThird.innerHTML = 'Hello World';
});

//fifth
const changeText = document.getElementById('changeText');
function replaceText() {
    changeText.innerText = "Welcome to Elevation Academy";
}

//sixth
const heading =document.querySelector('#heading');
heading.addEventListener('click',() => {
    heading.setAttribute('style', 'color : red');
});

//seventh
function changeDirection(){
    document.getElementById('cards').classList.toggle('direction');
}

//Ninth
let timeZ = document.querySelector('h2');

function time(){
    let time = new Date();
    let hours= time.getHours()
    let min = time.getMinutes()
    let secs = time.getSeconds()

    let timezone =`Hours ${hours} : Minutes ${min} : Seconds ${secs}`;
    timeZ.innerText= timezone;
}

setInterval(() => {
    time()
},1000)
