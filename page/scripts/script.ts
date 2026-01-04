import SearchCharacter from "./components/searchCharacter.js";
import { request, requestApi } from "./util/requestApi.js";

const bodyScroll = document.getElementById(
  "secScrollInfinit"
) as HTMLDivElement;
const sectionMenu = document.getElementById("sectionMenu") as HTMLDivElement;
const callMenu = document.getElementById("callMenu") as HTMLInputElement;

let isFetching:boolean = false;
let contPage:number = 0;
const maxPage:number = 42;

request(requestApi(contPage).byPage, bodyScroll);

const handleScroll = async () => {
  if (contPage >= maxPage) {
    window.removeEventListener("scroll", handleScroll);
    console.info("Não é possível mais incrementar cards");
    return;
  }

  if (window.scrollY + window.innerHeight + 150 > document.body.scrollHeight) {
    if (isFetching) return;

    isFetching = true;
    contPage++;

    await request(requestApi(contPage).byPage, bodyScroll);

    isFetching = false;
  }
};

window.addEventListener("scroll", handleScroll);


callMenu.addEventListener("change", () => {
  const isOpen = callMenu.checked;

  sectionMenu.classList.toggle("open", isOpen);
  document.body.classList.toggle("menu-open", isOpen);
});

document.addEventListener("click", (event: PointerEvent) => {
  const target = event.target;

  if (!(target instanceof Node)) return;

  if (!sectionMenu.contains(target) && !callMenu.contains(target)) {
    sectionMenu.classList.remove("open");
    document.body.classList.remove("menu-open");
  }
});

new SearchCharacter(sectionMenu);
