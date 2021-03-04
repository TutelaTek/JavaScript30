const panels = document.querySelectorAll('.panel');

function toggleOpen(){
  this.classList.toggle('open');
  console.log("test");
}
console.log(panels);
panels.forEach(panel => panel.addEventListener('click', toggleOpen));
