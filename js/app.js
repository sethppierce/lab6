'use strict';

// *** Globals****





let glbHours = ['6:00am','7:00am','8:00am','9:00am','10:00am','11:00am','12:00am','1:00pm','2:00pm','3:00pm','4:00pm','5:00pm','6:00pm','7:00pm'];
let salesSection = document.getElementById('cookie-sales');
console.dir(salesSection);

let headerSection = document.getElementById('cookie-header');
console.dir(headerSection);

let cookieTop = document.getElementById('cookie-top');
console.dir(cookieTop);

let cookieTable = document.getElementById('cookie-table');
console.dir(cookieTable);

let cookieTitle = document.getElementById('cookietitle');
console.dir(cookieTitle);


let tableElem = document.createElement('table');



// *** constructs ***
let citiesArray = [];
function CityConstruct(city,minCust,maxCust,avgCookie){
  this.location = city;
  this.minCust = minCust;
  this.maxCust = maxCust;
  this.avgCookie = avgCookie;
  this.amntCookie = 0;
  this.totalCookie = 0;
  this.totalCookieArr = [];
  citiesArray.push(this);
}

//***functions ****/
function randomCookie (min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

function cookieHeader(){
  let headerElem = document.createElement('header');
  headerSection.appendChild(headerElem);
  let h1Elem = document.createElement('h1');
  h1Elem.textContent= 'Salmon Cookies';
  headerElem.appendChild(h1Elem);
  let imgElem = document.createElement('img');
  imgElem.src = 'img/salmon.png';
  imgElem.alt = 'picture of a beautiful salmon';
  imgElem.id = 'salmon';
  headerElem.appendChild(imgElem);
}


function cookieHtwo() {
  let ulElem = document.createElement('ul');
  cookieTop.appendChild(ulElem);
  ulElem.id = 'navul';
  let liElem = document.createElement('li');
  liElem.id = 'navli';
  ulElem.appendChild(liElem);
  let buttonElem = document.createElement('button');
  buttonElem.title = 'Back to Home';
  buttonElem.textContent = 'Back to Home';
  buttonElem.id = 'backtohome';
  buttonElem.onclick= function(){window.location = 'https://sethppierce.github.io/lab6/';};
  liElem.appendChild(buttonElem);
  let h2Elem = document.createElement('h2');
  h2Elem.textContent = 'Cookie Sales';
  cookieTitle.appendChild(h2Elem);
}


let ttlArr = [];

function dailytotals(){
  for(let j = 0; j < glbHours.length; j++){
    let dailyTotaladd = 0;
    for(let i = 0; i < citiesArray.length; i++){
      dailyTotaladd += citiesArray[i].totalCookieArr[j];}
    ttlArr.push(dailyTotaladd);
  }}



function tableTop(){
  let theadElem = document.createElement('thead');
  cookieTable.appendChild(tableElem);
  tableElem.appendChild(theadElem);
  let row1 = document.createElement('tr');
  theadElem.appendChild(row1);
  let emptyElem = document.createElement('th');
  row1.appendChild(emptyElem);
  for(let i = 0; i < glbHours.length; i++){
    let thElem = document.createElement('th');
    thElem.textContent = `${glbHours[i]}`;
    thElem.classList.add('headerrow');
    row1.appendChild(thElem);
  }
  let totalTop = document.createElement('th');
  totalTop.textContent = 'Daily Location Total';
  totalTop.classList.add('headerrow');
  row1.appendChild(totalTop);
}

let ttlallDaily = 0;
function totalAllDaily(){
  for(let i = 0; i < ttlArr.length; i ++){
    ttlallDaily += ttlArr[i];}
  return ttlallDaily;}

function totalAllDailyNew(){
  let ttlArrNew = ttlArr.slice(-14);
  let ttlallDailyNew = 0;
  for(let i = 0; i < 14; i ++){
    ttlallDailyNew += ttlArrNew[i];}
  return ttlallDailyNew;
}


function tableBottom() {
  let tfootElem = document.createElement('tfoot');
  tfootElem.id = 'tfoot';
  tableElem.appendChild(tfootElem);
  let totalFoot = document.createElement('tr');
  tfootElem.appendChild(totalFoot);
  let totaltitle = document.createElement('td');
  totaltitle.textContent = ('Totals');
  totaltitle.classList.add('rowstart');
  totalFoot.appendChild(totaltitle);
  for (let i = 0; i < glbHours.length; i++) {
    let totalTd = document.createElement('td');
    totalTd.textContent = `${ttlArr[i]} cookies`;
    totalTd.classList.add('content');
    totalFoot.appendChild(totalTd);
  }
  let allDaily = totalAllDaily();
  let allTotal = document.createElement('td');
  allTotal.textContent = `${allDaily} cookies`;
  allTotal.classList.add('content');
  totalFoot.appendChild(allTotal);}

function tableBottomNew() {
  let tfootElem = document.createElement('tfoot');
  tfootElem.id = 'tfoot';
  tableElem.appendChild(tfootElem);
  let totalFoot = document.createElement('tr');
  tfootElem.appendChild(totalFoot);
  let totaltitle = document.createElement('td');
  totaltitle.textContent = ('Totals');
  totaltitle.classList.add('rowstart');
  totalFoot.appendChild(totaltitle);
  let ttlArrNew = ttlArr.slice(-14);
  for (let i = 0; i < ttlArrNew.length; i++) {
    let totalTd = document.createElement('td');
    totalTd.textContent = `${ttlArrNew[i]} cookies`;
    totalTd.classList.add('content');
    totalFoot.appendChild(totalTd);
  }
  let allDaily = totalAllDailyNew();
  let allTotal = document.createElement('td');
  allTotal.textContent = `${allDaily} cookies`;
  allTotal.classList.add('content');
  totalFoot.appendChild(allTotal);
}

// **** prototype method *******
CityConstruct.prototype.render = function(){
  let row2 = document.createElement('tr');
  tableElem.appendChild(row2);
  let nameElem = document.createElement('td');
  nameElem.textContent =`${this.location}`;
  nameElem.classList.add('rowstart');
  row2.appendChild(nameElem);
  for(let i = 0; i < glbHours.length; i++){
    this.amntCookie = Math.floor(randomCookie(this.minCust,this.maxCust) * this.avgCookie);
    this.totalCookie = this.totalCookie + this.amntCookie;
    this.totalCookieArr.push(this.amntCookie);
    let tdElem = document.createElement('td');
    tdElem.classList.add(`content`);
    tdElem.textContent = `${this.amntCookie} cookies`;
    row2.appendChild(tdElem);
  }
  let totalElem = document.createElement('td');
  totalElem.textContent = `${this.totalCookie} cookies`;
  totalElem.classList.add('content');
  row2.appendChild(totalElem);
};


let myForm = document.getElementById('frm1');

function renderCities(){for(let i = 0; i <citiesArray.length;i++){
  citiesArray[i].render();
}}
function handleSubmit(event){
  event.preventDefault();
  let newCityName = event.target.inputCityName.value;
  console.log(newCityName);
  let newMinCust = parseInt(event.target.inputMinCust.value);
  console.log(newMinCust);
  let newMaxCust = parseInt(event.target.inputMaxCust.value);
  console.log(newMaxCust);
  let newAvgCust = parseInt(event.target.inputAvgCust.value);
  console.log(newAvgCust);
  new CityConstruct(newCityName,newMinCust,newMaxCust,newAvgCust).render();
  let tfootRemove = document.getElementById('tfoot');
  tfootRemove.remove();
  dailytotals();
  tableBottomNew();
  myForm.reset();
}

myForm.addEventListener('submit', handleSubmit);

// **** executeable code ****
new CityConstruct('Seattle',23,65,6.3);
new CityConstruct('Tokyo',3,24,1.2);
new CityConstruct('Dubai',11,38,3.7);
new CityConstruct('Paris',20,38,2.3);
new CityConstruct('Lima',2,16,4.6);

// citiesArray[0].render();
// citiesArray[1].render();
// citiesArray[2].render();
// citiesArray[3].render();
// citiesArray[4].render();

renderCities();
cookieHeader();
cookieHtwo();
tableTop();
dailytotals();
tableBottom();

