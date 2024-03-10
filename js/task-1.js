const categoriesListEl = document.querySelector('#categories');
const categoryEl = document.querySelectorAll('.item');
const categoriesTitlesEl = document.querySelectorAll('.item h2');
const categoryListEl = document.querySelectorAll('.item ul');

console.log(categoryEl.length);
categoryEl.forEach(element => {
  console.log(`Category: ${element.firstElementChild.textContent}`);
  console.log(`Elements: ${element.lastElementChild.children.length}`);
});
