export async function ajax(props) {
  const { url, callbackSuccess } = props;

  await fetch(url)
  .then(res => res.ok ? res.json() : Promise.reject(res))
  .then(json => callbackSuccess(json))
  .catch(err => {
    console.log(err);
    let message = err.statusText || 'Ocurrio un error';
    
    document.getElementById('main').innerHTML = `
        <div class="error">
          <p>Error ${err.status}: ${message}</p>
        </div>
      `;
    });
}