const inventors = [
  {first: 'Albert', last: 'Einstein', year: 1879, passed: 1955 },
  {first: 'Isaac', last: 'Newton', year: 1643, passed: 1727 },
  {first: 'Galileo', last: 'Galilei', year: 1564, passed: 1642 },
  {first: 'Marie', last: 'Curie', year: 1867, passed: 1934 },
  {first: 'Johannes', last: 'Kepler', year: 1571, passed: 1630 },
  {first: 'Nicolaus', last: 'Copernicus', year: 1473, passed: 1543 },
  {first: 'Max', last: 'Planck', year: 1858, passed: 1947 }
]
//1. .filter()
const fifteen = inventors.filter(function(inventor){
  if (inventor.year >= 1500 && inventor.year < 1600){
    return true;
  }
})
console.table(fifteen);
//2. .map()
const fullNames = inventors.map(function(inventor){
  return inventor.first + " " + inventor.last;
});
console.log(fullNames);
//1. .sort()
const age = inventors.sort(function(a, b){
  if(a.year > b.year){
    return 1;
  } else {
    return -1;
  }
})

console.table(age);
//1. .reduce()
const totalYears = inventors.reduce((total, inventor) => {
  return total +(inventor.passed - inventor.year)
}, 0);
console.log(totalYears);
//1. .sort inventor by
const oldest = inventors.sort(function(a, b){
  const lastGuy = a.passed - a.year;
  const nextGuy = b.passed - b.year;
  if(lastGuy < nextGuy){
    return 1;
  } else {
    return -1;
  }

})

console.table(oldest);
//1. .filter()
//1. .filter()
//1. .filter()
