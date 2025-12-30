interface Character {
  image: string;
  name: string;
  id: number;
  gender: string;
  species: string;
  status: string;
  origin: {
    name: string;
  };
}
export default class ComponentCard {
  tagFather: HTMLElement;
  information: Character;

  constructor(tagFather: HTMLElement, information: Character) {
    this.tagFather = tagFather;
    this.information = information;
  }
  private static readonly colors: Record<string, string> = {
    Alive: "#aaf2a2",
    Dead: "#eb9e97",

    Male: "#90caf9",
    Female: "#f48fb1",
    Genderless: "#ce93d8",

    Human: "#98fb98",
    Alien: "#cc99ff",
    Robot: "#c0c0c0",
    Humanoid: "#ffcc80",
    Disease: "#ffab91",
    "Mythological Creature": "#fff176",
    Animal: "#bc8f8f",
    Parasite: "#80ffbf",
    Zombie: "#acc688",
    "Artificial Intelligence": "#80e5e5",
    Cronenberg: "#ffb4da",

    "Earth (C-137)": "#aaf2a2",
    Abadango: "#ffcc80",
    "Citadel of Ricks": "#90caf9",
    "Worldender's lair": "#ffab91",
    "Anatomy Park": "#f48fb1",
    "Post-Apocalyptic Earth": "#bc8f8f",
    "Purge Planet": "#ef9a9a",

    unknown: "#cfcfcf",
  };

  private static readonly translations: any = {
    gender: {
      male: "Homem",
      female: "Mulher",
      genderless: "Sem gênero",
      unknown: "Desconhecido(a)",
    },

    status: {
      alive: "Vivo",
      dead: "Morto",
      unknown: "Desconhecido",
    },

    species: {
      human: "Humano",
      alien: "Alienígena",
      robot: "Robô",
      Humanoid: "Humanóide",
      Disease: "Doença",
      "Mythological Creature": "Criatura mitológica",
      animal: "Animal",
      parasite: "Parasita",
      zombie: "Zumbi",
      "artificial intelligence": "Inteligência Artificial",
      cronenberg: "Cronenberg",
      Poopybutthole: "Bunda cagada",
      unknown: "Desconhecido",
    },

    origin: {
      "Earth (C-137)": "Terra (C-137)",
      "Earth (C-500A)": "Terra (C-500A)",
      "Earth (K-83)": "Terra (K-83)",
      "Earth (Replacement Dimension)": "Terra (Dimensão Substituta)",
      "Earth (Evil Rick's Target Dimension)":
        "Terra (Dimensão Alvo do Rick Malvado)",
      "Purge Planet": "Planeta do Espurgo",
      "Cronenberg Earth": "Terra de Cronenberg",
      "Citadel of Ricks": "Cidadela dos Ricks",
      "Post-Apocalyptic Earth": "Terra pós-apocalíptica",
      "Fantasy World": "Mundo de Fantasia",
      "Bird World": "Mundo dos Pássaros",
      "Hideout Planet": "Planeta Esconderijo",
      "Cronenberg's Land": "Terra de Cronenberg",
      "Unity's Planet": "Planeta da Unidade",
      "Anatomy Park": "Parque de Anatomia",
      "Giant's Town": "Cidade do Gigante",
      "Snake Planet": "Planeta Cobra",
      "Story Train": "Trem da história",
      "Morty’s Story": "A História de Morty",
      "Ricks’s Story": "A História de Rick",
      "Tickets Please Guy Nightmare": "Ingressos, por favor, cara, pesadelo",
      "Glorzo Asteroid": "Glorzo Asteroid",
      "Merged Universe": "Universo Mesclado",
      "Near-Duplicate Reality": "Realidade quase duplicada",
      "Planet Squanch": "Planeta Squanch",
      "The Ocean": "Oceano",
      "Narnia Dimension": "Dimensão de Nárnia",
      Hell: "Inferno",
      "Space Tahoe": "Espaço Tahoe",
      "Birdperson's Consciousness": "Consciência do Homem-Pássaro",
      "Rick and Two Crows Planet": "Rick e o Planeta dos Dois Corvos",
      unknown: "Origem desconhecida",
    },
  };

  private getStyle(value: string) {
    return `style="color: ${
      ComponentCard.colors[value] || ComponentCard.colors.unknown
    }"`;
  }
  private translate(group: string, value: string) {
    return ComponentCard.translations[group]?.[value.toLowerCase()] || value;
  }

  cardCharacter() {
    const { image, name, id, gender, species, status, origin } =
      this.information;
    this.tagFather.insertAdjacentHTML(
      "beforeend",
      `
      <section class="cardOfCharacter">
        <img src="${image}" alt="${name}">
        <div class="cardInfo">
          <span>${name} #${id}</span>
          <span ${this.getStyle(status)}>${this.translate(
        "status",
        status
      )}</span>
          <span ${this.getStyle(species)}>${this.translate(
        "species",
        species
      )}</span>
          <span ${this.getStyle(gender)}>${this.translate(
        "gender",
        gender
      )}</span>
          <span>${this.translate("origin", origin.name)}</span>
        </div>
      </section>
    `
    );
  }
}
