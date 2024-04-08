import { ajax, URL_BASE } from "../helpers";

export function Main() {
  const main = document.createElement('main');

  main.id = 'main';
  main.classList.add('grid-fluid');

  return main;
}