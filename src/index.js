import './style.css';

let arr = [
    { description: 'supermarket', completed: false, index: 1 },
    { description: 'baby', completed: true, index: 2 },
    { description: 'dishes', completed: true, index: 0 }
]

let populateHTML = (array) => {
  console.log('populateHTML');
  let htmlString = '';
  for(let i = 0; i<array.length;){
    console.log('Entrando al for')
    array.forEach((n) => {
       if (n.index === i) {
        console.log('for each')
        let check = '';
        if (n.completed) {
          check = 'checked';
          console.log('tiene premio')
        }
        htmlString += `<li class="item" ><input type="checkbox" ${check}>${n.description}</li>`
        i+=1;
       }
      });
  }


return htmlString;
}

document.querySelector('ul').innerHTML = populateHTML(arr);

function componentCustom(string) {
    const element = document.createElement('div');
    element.innerHTML = string;
    element.classList.add('hello');

    return element;
}

document.body.appendChild(componentCustom('JavaScript working'));