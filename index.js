/*document.body.appendChild(element); 
const ul = document.createElement('ul');

for (let i = 0; i < 3; i++) {
  const li = document.createElement('li');
  li.innerHTML = (i + 1).toString();
  ul.appendChild(li);
}

element.appendChild(ul); */

document.body.remove('main');

const newHeader = document.createElement('h1')
newHeader.setAttribute('id','victory');
//document.getElementById('h1').innerHTML = "Sean is the champion";
newHeader.textContent = "Sean is the champion";