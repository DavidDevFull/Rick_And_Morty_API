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

const filterInformation = (data: ApiResponse): Character[] => {
  return data.results.map((character) => ({
    image: character.image,
    name: character.name,
    id: character.id,
    gender: character.gender,
    species: character.species,
    status: character.status,
    origin: {
      name: character.origin.name
    }
  }));
};
export default filterInformation