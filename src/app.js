import { Header, Loader, Main, Router } from "./components";

export function App() {
  const root = document.getElementById('root');

  root.innerHTML = '';
  root.appendChild(Header());
  root.appendChild(Main());
  root.appendChild(Loader());

  Router();
}