// Jeff

//   ___     |__________
//  (0 0) -- |/---------
//   / \     |

// Quoto v2 by Wesley. S., developer of 7-f.net

// Stylistic Config

document.body.style.overflow = 'hidden';

// Background images

const bgs = [ // images 4 and 5 were removed for possible censorship.
    "images/bg1.jpg",
    "images/bg2.jpg",
    "images/bg3.jpg",
    "images/bg6.jpg",
    "images/bg7.jpg",
    "images/bg8.jpg",
    "images/bg9.jpg",
    "images/bg10.jpg"
];

const authors = [
    "Sun Tzu, in The art of War",
    "Socrates",
    "Aristotle",
    "René Descarte",
    "Ghandi",
    "Jesus, probably",
    "Socrates, probably",
    "Your dog",
    "Your sleep paralysis demon",
    "Quoto",
    "George Washington",
    "Franklin",
    "Sampras. T",
    "Your sentient bookshelf",
    "The lamp next to you",
    "Jesus",
    "Your cup of Javascript",
    "A cup of tea",
    "A brick wall",
    "The other lamp",
    "A table"
]

// IDs

const elQuote = document.getElementById("quote");
const elAuthor = document.getElementById("author");
const elGenerate = document.getElementById("generate");
const elTemplates = document.getElementById("templates");

// Words

import { words, templates } from './old_words.js'

function doBackground() {
    const selected = getRandom(bgs);
    document.body.style.setProperty('--bg-image', `url("${selected}")`);
}

function getRandom(l) {
    return l[Math.floor(Math.random() * l.length)];
}

function doQuote() {
    const template = getRandom(templates);
    const tempwords = template.split(" ");
    let finished = "";
    let count = 0;
    for (let word of tempwords) {
        if (word[0] == "[") {
            let cIdx = word.indexOf("]")
            let key = word.slice(1, cIdx);
            let randWord = getRandom(words[`${key}`]);
            if (count == 0) {
                finished += randWord.charAt(0).toUpperCase() + randWord.slice(1);
                finished += word.slice(cIdx + 1);
            } else {
                finished += randWord;
                finished += word.slice(cIdx + 1);
            }
        }
        else if (count == 0) {
            finished += word.charAt(0).toUpperCase() + word.slice(1);
        } else {
            finished += word;
        }
        finished += " ";
        count++;
    }
    elQuote.textContent = finished;
}

function doAuthor() {
    elAuthor.innerText = getRandom(authors);
}

function loadTemplates() {
    for (let n of elTemplates.value.split("\n")) {
        if (!templates.includes(n) && n != "") {
            templates.push(n);
        }
    }
}

function doRefresh() {
    loadTemplates();
    console.log(templates);
    doBackground();
    doQuote();
    doAuthor();
}

function playMusic() {
    document.getElementById("moosiic").play();
}

window.addEventListener("DOMContentLoaded", doRefresh); // Load quote on page load
window.addEventListener("DOMContentLoaded", playMusic); // Load music

elGenerate.addEventListener("click", doRefresh);
