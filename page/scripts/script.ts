import ComponentCard from "./componentCard.js";
import filterInformation from "./util/filterInformation.js";

const bodyScroll = document.getElementById(
  "secScrollInfinit"
) as HTMLInputElement;

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

interface ApiResponse {
  results: Character[];
}

let isFetching = false; 
let contPage = 1;

const request = async (pageCurrent: number) => {
  if (isFetching) return; 
  isFetching = true;

  try {
    const response = await fetch(`https://rickandmortyapi.com/api/character/?page=${pageCurrent}`);
    if (!response.ok) throw new Error(`Erro: ${response.status}`);

    const data: ApiResponse = await response.json();
    const filtering = filterInformation(data);

    filtering.forEach(eachData => new ComponentCard(bodyScroll, eachData).cardCharacter());
    console.info(`Dados da página (${contPage}): `, filtering);
    
  } catch (error) {
    console.error(error);
  } finally {
    isFetching = false; 
  }
};

request(contPage)
window.addEventListener("scroll", () =>{
    if(window.scrollY + window.innerHeight + 50 > document.body.scrollHeight){
      contPage++
      request(contPage)
    }
})
