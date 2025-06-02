/**
 * @typedef Freelancer
 * @property {string} name
 * @property {string} occupation
 * @property {number} rate
 */

// === Constants ===
const NAMES = ["Alice", "Bob", "Carol", "Dave", "Eve"];
const OCCUPATIONS = ["Writer", "Teacher", "Programmer", "Designer", "Engineer"];
const PRICE_RANGE = { min: 20, max: 200 };
const NUM_FREELANCERS = 100;

function freelancerObject() {
  const nameIndex = Math.floor(Math.random() * NAMES.length);
  const occupationIndex = Math.floor(Math.random() * OCCUPATIONS.length);
  const rateIndex = Math.floor(Math.random() * 180 + 20);
  return {
    name: NAMES[nameIndex],
    occupation: OCCUPATIONS[occupationIndex],
    rate: rateIndex,
  };
}

console.log(freelancerObject());

const freelancers = Array.from({ length: NUM_FREELANCERS }, freelancerObject);

console.log(freelancers);

function averageRate(items) {
  return items.reduce((total, item) => total + item.rate, 0) / NUM_FREELANCERS;
}

console.log(averageRate(freelancers));

const averageFreelancer = averageRate(freelancers);

function freelancerCard(freelancer) {
  const card = document.createElement("div");
  card.className = "freelancerClass";
  card.style.border = "3px solid";

  const name = document.createElement("h2");
  name.textContent = freelancer.name;

  const occupation = document.createElement("p");
  occupation.textContent = freelancer.occupation;

  const rate = document.createElement("p");
  rate.textContent = freelancer.rate;

  card.appendChild(name);
  card.appendChild(occupation);
  card.appendChild(rate);
}
