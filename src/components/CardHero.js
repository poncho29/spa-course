export function CardHero(props) {
  const { name, thumbnail, description, id } = props;
  const { path, extension } = thumbnail;

  document.addEventListener('click', e => {
    if (!e.target.matches('.card-hero--body a')) return;

    localStorage.setItem('heroId', e.target.dataset.id);
  });

  return `
    <article class="card-hero">
      <img src="${path}.${extension}" alt="${name}" />
      
      <div class="card-hero--body">
        <h2>${name}</h2>

        ${description && description !== '' 
          ? `<p>${description.substring(0, 40)}...</p>`
          : `<p>No description</p>`
        }

        <a href="/${id}" data-id="${id}">Ver más</a>
      </div>
    </article>
  `;
}