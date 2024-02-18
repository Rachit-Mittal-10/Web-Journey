"use strict";
const parentNode = document.getElementsByTagName("body")[0];
const para = document.createElement("p");
para.textContent = "Hey I\'m red";
para.style.color = "red";
parentNode.appendChild(para);

const header3 = document.createElement("h3");
header3.textContent = "Hey I\'m Blue h3";
header3.style.color = "blue";
parentNode.appendChild(header3);

const division = document.createElement("div");
const h1 = document.createElement("h1");
h1.textContent = "I\'m in Div";
const div_p = document.createElement("p");
div_p.textContent = "Me too!!";
division.appendChild(h1);
division.appendChild(div_p);
division.style.border = "solid 5px red";
division.style.padding = '20px';
division.style.display = "inline-block";
parentNode.insertBefore(division,header3);

const btn = document.getElementById('#btn');
btn.addEventListener('click',function(e){
    e.target.style.background = "blue"
});