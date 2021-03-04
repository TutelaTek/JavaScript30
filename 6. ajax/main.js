const endpoint = 'https://gist.githubusercontent.com/Miserlou/c5cd8364bf9b2420bb29/raw/2bf258763cdddd704f8ffd3ea9a3e81d25e2c6f6/cities.json';

const cities = [];

fetch(endpoint)
.then(blob => blob.json())
.then(data => cities.push(...data) );

function findMatches(wordToMatch, cities){
  return cities.filter(place => {
    const regex = new RegExp(wordToMatch, 'gi');
    return place.city.match(regex) || place.state.match(regex);
  });
}

function displayMatches(){
  const matchArray = findmatches(this.value, cities);
  const html = matchArray.map(place => {
    return `
    <a href=`https:"//"www.google.com/maps/search/${place.city}, ${place.state}`>
    <li>
      <span class="name">${place.city}, ${place.state}</span>
      <span class="population">${place.population}</span>
    </li>
    <a>
    `;
  }).join('');
  suggestion.innerHTML = html;
}
const searchInput = document.querySelector('.search');
const suggestion = document.querySelector('keyup', displayMatches);
