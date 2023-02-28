"use strict";

const countries = [
  "Afghanistan",
  "Bahrain",
  "Egypt",
  "Iran",
  "Iraq",
  "Israel",
  "Jordan",
  "Libya",
  "Oman",
  "Saudi Arabia",
  "Sudan",
  "Syria",
  "Turkey",
  "United Ara Emirates",
  "West Bank",
];
const population = [
  "38,346,720",
  "1,540,558",
  "107,770,524",
  "86,758, 304",
  "40,462,701",
  "8,914,855",
  "10,998,531",
  "7,137,931",
  "3,764,348",
  "35,354,380",
  "47,958,856",
  "21,563,800",
  "83,047,706",
  "9,915,803",
  "3,000,021",
];
const religion = [
  "Sunni",
  "Muslim",
  "Sunni",
  "Shia",
  "Shia",
  "Jewish",
  "Sunni",
  "Sunni",
  "Muslim",
  "Sunni",
  "Sunni",
  "Sunni",
  "Sunni",
  "Muslim",
  "Sunni",
];
const gdp = [
  "60.803 billion",
  "72.627 billion",
  "1.264 trillion",
  "1.319 trillion",
  "390.165 billion",
  "393.861 billion",
  "102.822 billion",
  "147.942 billion",
  "155.028 billion",
  "1.594 trillion",
  "168.98 billion",
  "50.28 billion",
  "2.668 trillion",
  "653.067 billion",
  "27.779 billion",
];

const countryFacts = (country) => {
  if (!countries.includes(country)) {
    prompt("No match found. Please try another country.");
    enterCountry();
  } else {
    const x = countries.indexOf(country);
    return `
  ${country}
  population: ${population[x]}
  religion: ${religion[x]}
  GDP: $${gdp[x]}
  `;
  }
};

function enterCountry() {
  const choice = prompt("Type a country from the Middle East: ")
    .toLowerCase()
    .split("");
  const firstLetter = choice[0].toUpperCase();
  const otherLetters = choice.slice(1).join("");
  return firstLetter + otherLetters;
}

const facts = countryFacts(enterCountry());
console.log(facts);
