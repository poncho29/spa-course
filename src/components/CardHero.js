export function CardHero(props) {
  const { name, thumbnail, description } = props;
  const { path, extension } = thumbnail;

  return `
    <article class="card-hero">
      <img src="${path}.${extension}" alt="${name}" />
      
      <div class="card-hero--body">
        <h2>${name}</h2>

        ${description && description !== '' 
          ? `<p>${description.substring(0, 40)}...</p>`
          : `<p>No description</p>`
        }

        <button>Ver más</button>
      </div>
    </article>
  `;
}