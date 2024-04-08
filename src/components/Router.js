import { API_KEY_PUBLIC, URL_BASE, ajax } from "../helpers";

import { CardHero } from "./";

export async function Router() {
  const d = document,
        main = d.querySelector('main');

  let { hash } = location;

  main.innerHTML = null;

  console.log(hash)

  if (hash === '') {
    await ajax({
      url: `${URL_BASE}/characters?apikey=${API_KEY_PUBLIC}`,
      callbackSuccess: ({ data }) => {
        console.log(data);
        let html = '';
        data.results.forEach(hero => html += CardHero(hero));
        main.innerHTML = html;
        d.getElementById('main').innerHTML = html
      }
    })
  }
}