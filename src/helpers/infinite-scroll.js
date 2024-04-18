import { API_KEY_PUBLIC, URL_BASE, pagination, ajax } from './';

import { CardHero, HeroDetail } from '../components';

export async function infiniteScroll() {
  const d = document,
        w = window;

  let Component;
  
  w.addEventListener('scroll', async (e) => {
    let { scrollTop, clientHeight, scrollHeight } = d.documentElement,
        { pathname } = w.location;

    const existNextPage = pagination.page < pagination.totalPages;

    if (scrollTop + clientHeight >= scrollHeight && existNextPage ) {
      pagination.page++;
      const url = `${URL_BASE}/characters?apikey=${API_KEY_PUBLIC}&offset=${pagination.page}`;
      Component = CardHero;

      d.querySelector('.loader').style.display = 'block';

      await ajax({
        url,
        callbackSuccess: ({ data }) => {
          console.log(data);
          
          let html = '';
          data.results.forEach(hero => html += Component(hero));
          d.getElementById('main').insertAdjacentHTML('beforeend', html);
          d.querySelector('.loader').style.display = 'none';
        }
      })
    }
  });
}