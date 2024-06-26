import { API_KEY_PUBLIC, URL_BASE, ajax, pagination } from "../helpers";

import { CardHero, HeroDetail } from "./";

export async function Router() {
  const d = document,
        main = d.querySelector('main');

  let { pathname } = location;

  main.innerHTML = null;

  if (pathname === '/') {
    await ajax({
      url: `${URL_BASE}/characters?apikey=${API_KEY_PUBLIC}`,
      callbackSuccess: ({ data }) => {
        pagination.total =  data.total;

        let html = '';
        data.results.forEach(hero => html += CardHero(hero));
        main.innerHTML = html;
        d.getElementById('main').innerHTML = html;
      }
    })
  }  else {
    const heroId = localStorage.getItem('heroId');

    await ajax({
      url: `${URL_BASE}/characters/${heroId}?apikey=${API_KEY_PUBLIC}`,
      callbackSuccess: (post) => {
        main.innerHTML = HeroDetail(post);
      }
    });
  }

  d.querySelector('.loader').style.display = 'none';
}