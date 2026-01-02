import SearchCharacter from "./components/searchCharacter.js";
import { request, requestApi } from "./util/requestApi.js";

const bodyScroll = document.getElementById(
  "secScrollInfinit"
) as HTMLDivElement;
const sectionMenu = document.getElementById("sectionMenu") as HTMLDivElement;
const callMenu = document.getElementById("callMenu") as HTMLInputElement;

let isFetching = false;
let contPage = 1;

request(requestApi(contPage).byPage, bodyScroll);
window.addEventListener("scroll", () => {
  if (window.scrollY + window.innerHeight + 150 > document.body.scrollHeight) {
    if (isFetching) return;
    isFetching = true;
    contPage++;
    request(requestApi(contPage).byPage, bodyScroll);
    isFetching = false;
  }
});

callMenu.addEventListener("change", () => {
  const isOpen = callMenu.checked;

  sectionMenu.classList.toggle("open", isOpen);
  document.body.classList.toggle("menu-open", isOpen);
});

document.addEventListener("click", (event) => {
  const target = event.target;

  if (!(target instanceof Node)) return;

  if (!sectionMenu.contains(target) && !callMenu.contains(target)) {
    sectionMenu.classList.remove("open");
    document.body.classList.remove("menu-open");
  }
});

new SearchCharacter(sectionMenu);
