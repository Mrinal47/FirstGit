const form = document.querySelector('form');
const fruits = document.querySelector('.fruits');

const list = document.querySelectorAll('.fruit');
for (let li of list) {
  li.innerHTML = li.innerHTML + '<button class="edit-btn">Edit</button>';
}

form.addEventListener('submit', function(event) {
    event.preventDefault();
    //Selected the input element
const fruitToAdd = document.getElementById('fruit-to-add');

//created the Li
const newLi = document.createElement('li');
    newLi.className = 'fruit';
    newLi.innerHTML = fruitToAdd.value + '<button class="delete-btn">x</button>' + '<button class="edit-btn">Edit</button>';

//Adding Li as last button of unordered list
fruits.appendChild(newLi);

})

fruits.addEventListener('click', function(event) {
if(event.target.classList.contains('delete-btn')) {
    const fruitToDelete = event.target.parentElement;
    fruits.removeChild(fruitToDelete);
  }
})