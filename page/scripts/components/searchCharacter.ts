import { requestApi, request } from "../util/requestApi.js";

export default class SearchCharacter {
  private tagFather: HTMLDivElement;
  private timer: number | undefined;

  constructor(tagFather: HTMLDivElement) {
    this.tagFather = tagFather;
    this.render(); 
    this.initEvents(); 
  }

  private buildSearchUrl(value: string): string {
    const trimmedValue = value.trim();
    const isNumber = !isNaN(Number(trimmedValue)) && trimmedValue !== "";
    return isNumber
      ? requestApi(Number(trimmedValue)).byNumber
      : requestApi(trimmedValue).byString;
  }

  private handleSearch(input: HTMLInputElement, container: HTMLDivElement) {
    clearTimeout(this.timer);
    this.timer = window.setTimeout(async () => {
      const value = input.value.trim();
      container.innerHTML = "";
      if (!value) return;

      await request(this.buildSearchUrl(value), container);
    }, 500);
  }

  // Novo método para capturar os elementos após o render
  private initEvents() {
    const input = this.tagFather.querySelector(
      "#inputSearchCharacter"
    ) as HTMLInputElement;
    const container = this.tagFather.querySelector(
      ".divResultSearch"
    ) as HTMLDivElement;

    if (input && container) {
      input.addEventListener("input", () =>
        this.handleSearch(input, container)
      );
    }
  }

  private render() {
    if (!this.tagFather) return console.error("Elemento pai não encontrado");

    this.tagFather.insertAdjacentHTML(
      "beforeend",
      `
      <section class="componentSearchCharacter">
        <div class="input-wrapper">
          <input type="text" id="inputSearchCharacter" placeholder="Pesquise pelo nome ou número" />
        </div>
        <div class="divResultSearch"></div>
      </section>
      `
    );
  }
}
