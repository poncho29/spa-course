
const URL_BASE = import.meta.env.VITE_URL_BASE,
      API_KEY_PUBLIC = import.meta.env.VITE_API_KEY_PUBLIC,
      API_KEY_PRIVATE = import.meta.env.VITE_API_KEY_PRIVATE;

const pagination = {
  page: 0,
  totalPages: 0,
}

export {
  URL_BASE,
  API_KEY_PUBLIC,
  API_KEY_PRIVATE,
  pagination
}