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

function freelanceOne(freelancer) {
  const container = document.createElement("div");
  container.className = "freelancer";

  const nameElement = document.createElement("h1");
  nameElement.textContent = freelancer.name;

  const occupationElement = document.createElement("p");
  occupationElement.textContent = freelancer.occupation;

  const rateElement = document.createElement("p");
  rateElement.textContent = freelancer.rate;

  container.appendChild(nameElement);
  container.appendChild(occupationElement);
  container.appendChild(rateElement);

  return container;
}
