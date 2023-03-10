"use strict";

const countries = [
  "Afghanistan",
  "Bahrain",
  "Egypt",
  "Iran",
  "Iraq",
  "Israel",
  "Jordan",
  "Lebanon",
  "Libya",
  "Oman",
  "Qatar",
  "Saudi Arabia",
  "Sudan",
  "Syria",
  "Turkey",
  "United Arab Emirates",
];
const population = [
  "38,346,720",
  "1,540,558",
  "107,770,524",
  "86,758,304",
  "40,462,701",
  "8,914,855",
  "10,998,531",
  "5,331,203",
  "7,137,931",
  "3,764,348",
  "2,532,104",
  "35,354,380",
  "47,958,856",
  "21,563,800",
  "83,047,706",
  "9,915,803",
];
const religion = [
  "Sunni",
  "Muslim",
  "Sunni",
  "Shia",
  "Shia",
  "Jewish",
  "Sunni",
  "Muslim",
  "Sunni",
  "Muslim",
  "Muslim",
  "Sunni",
  "Sunni",
  "Sunni",
  "Sunni",
  "Muslim",
];
const gdp = [
  "60.803 billion",
  "72.627 billion",
  "1.264 trillion",
  "1.319 trillion",
  "390.165 billion",
  "393.861 billion",
  "102.822 billion",
  "72.577 billion",
  "147.942 billion",
  "155.028 billion",
  "249.639 billion",
  "1.594 trillion",
  "168.98 billion",
  "50.28 billion",
  "2.668 trillion",
  "653.067 billion",
];

//Variables to work with created
const country = document.querySelector(`.state`);
const populationStats = document.querySelector(`.pop-stat`);
const religionStats = document.querySelector(`.rel-stat`);
const gdpStats = document.querySelector(`.gdp-stat`);
const modal = document.querySelector(`.modal`);
const overlay = document.querySelector(`.overlay`);

const resetbtn = document.querySelector(`.reset`);
const btnState = document.querySelectorAll(`.state-btn`);
const closebtn = document.querySelector(`.close-modal`);
const logo = document.querySelector(`.logo`);

// Select year variable and change innerHTML to current year
const year = document.querySelector(`.year`);

year.innerHTML = new Date().getFullYear();

// Get clicked country id and return innerHTML of country as state
const pickCountry = (btn) => {
  const stateID = btn.id;
  const state = document.getElementById(stateID).innerHTML;
  return state;
};

// Get country index and use to change content of pop, religion, and gdp elements on page
const countryFacts = (state) => {
  const i = countries.indexOf(state);
  country.textContent = countries[i];
  populationStats.textContent = population[i];
  religionStats.textContent = religion[i];
  gdpStats.textContent = gdp[i];
};

// Reset all value to default
const reset = () => {
  country.textContent = `Country`;
  populationStats.textContent = `0`;
  religionStats.textContent = `Atheist`;
  gdpStats.textContent = `0`;
};

//Iterate over every btnState and add pickCountry function to each one
for (let i = 0; i < btnState.length; i++) {
  btnState[i].addEventListener("click", function () {
    const state = pickCountry(this);
    countryFacts(state);
  });
}

// Add reset funtion to resetbtn
resetbtn.addEventListener(`click`, reset);

//Modal Operations

const openInfo = () => {
  modal.classList.remove(`hidden`);
  overlay.classList.remove(`hidden`);
};

const closeInfo = () => {
  modal.classList.add(`hidden`);
  overlay.classList.add(`hidden`);
};

logo.addEventListener("click", openInfo);

closebtn.addEventListener(`click`, closeInfo);
overlay.addEventListener(`click`, closeInfo);
