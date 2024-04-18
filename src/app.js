import { Header, Loader, Main, Router } from "./components";
import { infiniteScroll } from "./helpers";

export function App() {
  const root = document.getElementById('root');

  root.innerHTML = '';
  root.appendChild(Header());
  root.appendChild(Main());
  root.appendChild(Loader());

  Router();
  infiniteScroll();
}