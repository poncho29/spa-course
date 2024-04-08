import { Search } from './';

import marvelLogo from '../../public/marvel.svg';

export function Header() {
  const header = document.createElement('header');

  header.innerHTML = `
    <img
      src="${marvelLogo}"
      alt="logo"
      class="logo"
    />
  `;

  header.appendChild(Search());

  return header;
}