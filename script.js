/*
Student Name: Danielle Thompson
File Name; script.js
Date: 2-20-2025
*/

//Global variables 
var video = document.getElementById ("example");
var videoSource = document.getElementById ("vid-src");
var descriptionSource = document.getElementById ("despsrc");


function hamburger() {
    let menu = document.getElementById("menu-links");
    if (menu.style.display === "block") {
        menu.style.display = "none";
    } else {
        menu.style.display = "block";
    }
}

