

export const HeroDetail = (props) => {
  console.log(props);
  const { name, description, thumbnail, series, stories } = props.data.results[0];
  const { path, extension } = thumbnail;

  document.addEventListener('click', e => {
    if (!e.target.matches('button')) return;

    window.history.back();
  });

  return `
    <section class="hero-detail">
      <div class="hero-detail-img">
        <button>Atras</button>
        <img src="${path}.${extension}" alt="${name}" />
      </div>

      <article class="hero-detail-body">
        <h1>${name}</h1>
        ${description && (
          `<p>${description}</p>`
        )}

        ${series && (
          `
            <h3>Series disponibles (${series.available})</h3>
            <ul>
              ${series.items.map(serie => (
                `<li>${serie.name}</li>`
              )).join('')}
            </ul>
          `
        )}

        ${stories && (
          `
            <h3>Stories disponibles (${stories.available})</h3>
            <ul>
              ${stories.items.map(story => (
                `<li>${story.name}</li>`)
              ).join('')}
            </ul>
          `
        )}
      </article>
    </section>
  `;
}