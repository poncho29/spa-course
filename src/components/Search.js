

export function Search() {
  const d = document,
        input = d.createElement('input');

  input.name = 'search';
  input.type = 'search';
  input.placeholder = 'Buscar...';
  input.autocomplete = 'off';

  return input;
}