'use strict';

// *** Globals****

let glbHours = ['6am','7am','8am','9am','10am','11am','12am','1pm','2pm','3pm','4pm','5pm','6pm','7pm'];
let salesSection = document.getElementById('cookie-sales');
console.dir(salesSection);

let headerSection = document.getElementById('cookie-header');
console.dir(headerSection);

let cookieTop = document.getElementById('cookie-top');
console.dir(cookieTop);
// *** Object Literals ***

let seattleCookie = {
  city: 'Seattle',
  minCust: 23,
  maxCust: 65,
  avgCookie: 6.3,
  amntCookie: 0,
  totalCookie: 0,
  totalCookieArr: [],
  renderCookie: cookieList
};

let tokyoCookie = {
  city: 'Tokyo',
  minCust: 3,
  maxCust: 24,
  avgCookie: 1.2,
  amntCookie: 0,
  totalCookie: 0,
  totalCookieArr: [],
  renderCookie: cookieList
};

let dubaiCookie = {
  city: 'Dubai',
  minCust: 11,
  maxCust: 38,
  avgCookie: 3.7,
  amntCookie: 0,
  totalCookie: 0,
  totalCookieArr: [],
  renderCookie: cookieList
};

let parisCookie = {
  city: 'Paris',
  minCust: 20,
  maxCust: 38,
  avgCookie: 2.3,
  amntCookie: 0,
  totalCookie: 0,
  totalCookieArr: [],
  renderCookie: cookieList
};

let limaCookie = {
  city: 'Lima',
  minCust: 2,
  maxCust: 16,
  avgCookie: 4.6,
  amntCookie: 0,
  totalCookie: 0,
  totalCookieArr: [],
  renderCookie: cookieList
};


// *** Functions ***
// took from MDN
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
  let h2Elem = document.createElement('h2');
  h2Elem.textContent = 'Cookie Sales';
  cookieTop.appendChild(h2Elem);
  let buttonElem = document.createElement('button');
  buttonElem.title = 'Back to Home';
  buttonElem.textContent = 'Back to Home';
  buttonElem.id = 'backtohome';
  buttonElem.onclick= function(){window.location = 'https://sethppierce.github.io/lab6/';};
  cookieTop.appendChild(buttonElem);
}
function cookieList(){
  let articleElem = document.createElement('article');
  salesSection.appendChild(articleElem);

  let h3Elem = document.createElement('h3');
  h3Elem.textContent= this.city;
  articleElem.appendChild(h3Elem);

  let ulElem = document.createElement('ul');
  articleElem.appendChild(ulElem);

  for(let i = 0; i < glbHours.length; i++){
    this.amntCookie = Math.floor(randomCookie(this.minCust,this.maxCust) * this.avgCookie);
    this.totalCookie = this.totalCookie + this.amntCookie;
    this.totalCookieArr.push(`${glbHours[i]}: ${this.amntCookie} cookies`);
    let liElem = document.createElement('li');
    liElem.textContent = `${glbHours[i]}: ${this.amntCookie} cookies`;
    ulElem.appendChild(liElem);
  }
  this.totalCookieArr.push(`Total: ${this.totalCookie} cookies`);
  let liElem = document.createElement('li');
  liElem.textContent = `Total: ${this.totalCookie} cookies`;
  ulElem.appendChild(liElem);
}


// **** executeable code ****
cookieHeader();
cookieHtwo();
seattleCookie.renderCookie();
tokyoCookie.renderCookie();
dubaiCookie.renderCookie();
parisCookie.renderCookie();
limaCookie.renderCookie();
