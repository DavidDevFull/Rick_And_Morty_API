import { requestApi, request } from "../util/requestApi.js";
export default class SearchCharacter {
    tagFather;
    timer;
    constructor(tagFather) {
        this.tagFather = tagFather;
        this.render();
        this.initEvents();
    }
    buildSearchUrl(value) {
        const trimmedValue = value.trim();
        const isNumber = !isNaN(Number(trimmedValue)) && trimmedValue !== "";
        return isNumber
            ? requestApi(Number(trimmedValue)).byNumber
            : requestApi(trimmedValue).byString;
    }
    handleSearch(input, container) {
        clearTimeout(this.timer);
        this.timer = window.setTimeout(async () => {
            const value = input.value.trim();
            container.innerHTML = "";
            if (!value)
                return;
            await request(this.buildSearchUrl(value), container);
        }, 500);
    }
    // Novo método para capturar os elementos após o render
    initEvents() {
        const input = this.tagFather.querySelector("#inputSearchCharacter");
        const container = this.tagFather.querySelector(".divResultSearch");
        if (input && container) {
            input.addEventListener("input", () => this.handleSearch(input, container));
        }
    }
    render() {
        if (!this.tagFather)
            return console.error("Elemento pai não encontrado");
        this.tagFather.insertAdjacentHTML("beforeend", `
      <section class="componentSearchCharacter">
        <div class="input-wrapper">
          <input type="text" id="inputSearchCharacter" placeholder="Pesquise pelo nome ou número" />
        </div>
        <div class="divResultSearch"></div>
      </section>
      `);
    }
}
//# sourceMappingURL=searchCharacter.js.map