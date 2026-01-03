import ComponentCard from "../components/card.js";
import filterInformation from "./filterInformation.js";
import { loading, messageError } from "../components/loading&MessageError.js";

export const requestApi = (value: string | number) => ({
  byNumber: `https://rickandmortyapi.com/api/character/${value}`,
  byString: `https://rickandmortyapi.com/api/character/?name=${value}`,
  byPage: `https://rickandmortyapi.com/api/character/?page=${value}`,
});

export const request = async (url: string, container: HTMLDivElement) => {
  const loadingElement = loading(container);

  try {
    const response = await fetch(url);
    if (!response.ok) throw new Error(`Erro: ${response.status}`);

    const data = await response.json();
    const results = Array.isArray(data) ? data : data.results || [data];
    const filtering = filterInformation(results);

    filtering.forEach((eachData) =>
      new ComponentCard(container, eachData).cardCharacter()
    );
  } catch (error) {
    console.error("Erro na requisição:", error);
    messageError(container);

  }finally{
    loadingElement.remove();
  }
};
