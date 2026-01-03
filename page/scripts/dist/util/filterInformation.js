const filterInformation = (characters) => {
    return characters.map((character) => ({
        image: character.image,
        name: character.name,
        id: character.id,
        gender: character.gender,
        species: character.species,
        status: character.status,
        origin: {
            name: character.origin.name,
        },
    }));
};
export default filterInformation;
//# sourceMappingURL=filterInformation.js.map