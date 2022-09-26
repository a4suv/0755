// ==UserScript==
// @name         GoogleBot
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  Bot 4 Google
// @author       Anna Uvarova
// @match        https://www.google.ru/*
// @icon         data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==
// @grant        none
// ==/UserScript==
let links = document.links;
let btnK = document.getElementByName("btnK")[0];
document.getElementsByName("q")[0].value = ["10 самых популярных шрифтов от Google"];
if (btnK !== undefined) {
btnK.click();
} else {
for (let i=0; i<links.length; i++) {
 if (links[i].href.indexOf("napli.ru") !== -1) {
 console.log("Найдена строка" + links[i]);
 }}}
