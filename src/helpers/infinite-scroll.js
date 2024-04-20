import { API_KEY_PUBLIC, URL_BASE, pagination, ajax } from './';

import { CardHero } from '../components';

export async function infiniteScroll() {
  const d = document,
        w = window;

  let Component;
  
  w.addEventListener('scroll', async (e) => {
    let { scrollTop, clientHeight, scrollHeight } = d.documentElement,
        { pathname } = w.location;

    const existNextPage = pagination.offset < pagination.total;

    if (scrollTop + clientHeight >= scrollHeight && existNextPage ) {
      pagination.offset += 20;
      const url = `${URL_BASE}/characters?apikey=${API_KEY_PUBLIC}&offset=${pagination.offset}`;
      Component = CardHero;

      d.querySelector('.loader').style.display = 'block';

      await ajax({
        url,
        callbackSuccess: ({ data }) => {          
          let html = '';
          data.results.forEach(hero => html += Component(hero));
          d.getElementById('main').insertAdjacentHTML('beforeend', html);
          d.querySelector('.loader').style.display = 'none';
        }
      })
    }
  });
}