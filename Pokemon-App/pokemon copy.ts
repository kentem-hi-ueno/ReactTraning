export const getAllPokemon = (url: string) => {
  return new Promise((resoluve, reject) => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => resoluve(data));
  });
};

export const getPokemon = (url: string) => {
  return new Promise((resoluve, reject) => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => resoluve(data));
  });
};
