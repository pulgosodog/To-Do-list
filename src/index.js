import './style.css';

const arr = [
  { description: 'supermarket', completed: false, index: 1 },
  { description: 'baby', completed: true, index: 2 },
  { description: 'dishes', completed: true, index: 0 },
];

const populateHTML = (array) => {
  let htmlString = '';
  for (let i = 0; i < array.length;) {
    for (const n of array) {
      if (n.index === i) {
        let check = '';
        if (n.completed) {
          check = 'checked';
        }
        htmlString += `<li class="item" ><input type="checkbox" ${check}>${n.description}</li>`;
        i += 1;
      }
    };
  }

  return htmlString;
};

document.querySelector('ul').innerHTML = populateHTML(arr);
