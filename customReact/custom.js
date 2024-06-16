
function createReact(element, container) {
  const domElement = document.createElement(reactElement.type);
  domElement.setAttribute('href', element.props.href);
  domElement.setAttribute('target', element.props.target);
  domElement.innerHTML = element.children
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

const mainContainer = document.querySelector('#rootElement');

createReact(reactElement, mainContainer);