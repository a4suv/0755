// ==UserScript==
// @name         GoogleBot
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  Bot 4 Google
// @author       Anna Uvarova
// @match        https://www.google.ru/
// @icon         data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==
// @grant        none
// ==/UserScript==
let links = document.links;
let btnK = document.getElementByName("btnK")[0];
let keywords = ["Взаимодействие PHP и MySQL", "10 самых популярных шрифтов от Google", "Отключение редакций и ревизий в WordPress"];
let keyword = keywords[getRandom(0, keywords.length)];
if (btnK !== undefined) {
document.getElementsByName("q")[0].value = keyword;
btnK.click();
} else {
for (let i=0; i<links.length; i++) {
 if (links[i].href.indexOf("napli.ru") !== -1) {
 console.log("Найдена строка" + links[i]);
 let link = links[i];
 link.click();
 break;
 }}}
function getRandom(min, max) {
return Math.floor(Math.random()*(max - min) + min);}
