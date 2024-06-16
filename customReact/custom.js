// ? Basic function
/* 
function createReact(element, container) {
  const domElement = document.createElement(reactElement.type);
  domElement.setAttribute('href', element.props.href);
  domElement.setAttribute('target', element.props.target);
  domElement.innerHTML = element.children
  container.appendChild(domElement);
}
*/

// ? Function applicable for various elements:

function createReact(element, container) {
  const domElement = document.createElement(element.type);
  domElement.innerHTML = element.children;

  for (prop in element.props) {
    if (prop === 'children') continue;
    domElement.setAttribute(prop, element.props[prop]);
  }
  container.appendChild(domElement);
}

const reactElement = {
  type: 'a',
  props: {
    href: 'https://google.com',
    target: '_blank'
  },
  children: 'Click me for Google'
};
const reactElement2 = {
  type: 'h1',
  props: {
    id: 'heading1',
    class: 'red'
  },
  children: 'This is a heading'
};

const mainContainer = document.querySelector('#rootElement');

createReact(reactElement, mainContainer);
createReact(reactElement2, mainContainer);