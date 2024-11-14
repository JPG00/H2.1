import { el } from './lib/elements.js';


async function fetchIndex() {
  const file = 'public/data/index.json';

  const response = await fetch(file);
  const json = await response.json();
  return json;
}

async function render(root) {
  const indexJson = await fetchIndex();
  console.log('rendering', root, indexJson.title);

  const headerElement = el('header', {}, indexJson.title);
  const mainElement = el(
    'main',
    {},
    el(
      'section',
      {},
      el('p', {}, indexJson.description)
    )
  );
  const footerElement = el('footer', {}, indexJson.footer);

  root.appendChild(headerElement);
  root.appendChild(mainElement);
  root.appendChild(footerElement);
}

const root = document.querySelector('#app');
render(root);
