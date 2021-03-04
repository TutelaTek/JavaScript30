const people = [
  { name: 'Wes', year: 1988 },
  { name: 'Kait', year: 1986 },
  { name: 'Irv', year: 1970 },
  { name: 'Lux', year: 2015 },
];

const comments = [
  { id:383090, text: 'this is a test'},
  { id:324833, text: 'how about this'},
  { id:023028, text: 'a new text'},
  { id:377739, text: 'this is bad'},
  { id:293029, text: 'ai is better'}

];


const isAdult = people.some(person => {
  const currentYear = (new Date()).getFullYear();
  if(currentYear - person.year >= 19) {
    return true;
  }
})
console.log(isAdult);


//every
const isEvery = people.every(person => {
  const currentYear = (new Date()).getFullYear();
  if(currentYear - person.year >= 19) {
    return true;
  }
})

console.log(isEvery);



const comment = comments.find(comment => comment.id === 823423);
