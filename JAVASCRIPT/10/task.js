
const countries = [
  { name: 'United States', population: 331002651, continent: 'North America', capital: 'Washington, D.C.' },
  { name: 'China', population: 1439323776, continent: 'Asia', capital: 'Beijing' },
  { name: 'Brazil', population: 212559417, continent: 'South America', capital: 'Brasília' },
  { name: 'United Kingdom', population: 67886011, continent: 'Europe', capital: 'London' },
  { name: 'South Africa', population: 59308690, continent: 'Africa', capital: 'Pretoria, Cape Town, Bloemfontein' },
];



// 1. Print the names of all countries.
const countryNames = countries.map((country) => country.name);
console.log('1. Country names:', countryNames);

// 2. Find the country with the largest population.
const largestPopulation = countries.reduce((largest, country) =>
  country.population > largest.population ? country : largest
);
console.log('2. Largest population:', largestPopulation);

// 3. Find the total population of all countries.
const totalPopulation = countries.reduce(
  (total, country) => total + country.population,
  0
);
console.log('3. Total population:', totalPopulation);

// 4. Find all countries in Asia.
const asianCountries = countries.filter(
  (country) => country.continent === 'Asia'
);
console.log('4. Countries in Asia:', asianCountries);

// 5. Print capitals with more than one city.
const multipleCapitals = countries
  .filter((country) => country.capital.includes(','))
  .map((country) => country.capital);
console.log('5. Capitals with more than one city:', multipleCapitals);

// 6. Sort countries based on population (descending order).
const countriesByPopulation = [...countries].sort(
  (country1, country2) => country2.population - country1.population
);
console.log('6. Countries by population:', countriesByPopulation);

// 7. Find the country with the smallest population.
const smallestPopulation = countries.reduce((smallest, country) =>
  country.population < smallest.population ? country : smallest
);
console.log('7. Smallest population:', smallestPopulation);

// 8. Find the country with the longest name.
const longestCountryName = countries.reduce((longest, country) =>
  country.name.length > longest.name.length ? country : longest
);
console.log('8. Longest country name:', longestCountryName);

// 9. Find the country with the shortest name.
const shortestCountryName = countries.reduce((shortest, country) =>
  country.name.length < shortest.name.length ? country : shortest
);
console.log('9. Shortest country name:', shortestCountryName);

// 10. Find the average population of all countries.
const averagePopulation = totalPopulation / countries.length;
console.log('10. Average population:', averagePopulation);