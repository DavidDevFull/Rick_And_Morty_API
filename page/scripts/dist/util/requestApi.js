import ComponentCard from "../components/componentCard.js";
import filterInformation from "./filterInformation.js";
export const requestApi = (value) => ({
    byNumber: `https://rickandmortyapi.com/api/character/${value}`,
    byString: `https://rickandmortyapi.com/api/character/?name=${value}`,
    byPage: `https://rickandmortyapi.com/api/character/?page=${value}`,
});
export const request = async (url, container) => {
    try {
        const response = await fetch(url);
        if (!response.ok)
            throw new Error(`Erro: ${response.status}`);
        const data = await response.json();
        const results = Array.isArray(data) ? data : data.results || [data];
        const filtering = filterInformation(results);
        filtering.forEach((eachData) => new ComponentCard(container, eachData).cardCharacter());
    }
    catch (error) {
        console.error("Erro na requisição:", error);
    }
};
//      console.info(`Dados da página (${contPage}): `, filtering);
//# sourceMappingURL=requestApi.js.map