import { useEffect, useState } from "react";
import "./App.css";
import Card from "./components/Card";
import Navbar from "./components/Navbar";
import Button from "./components/Button";
import axios from "axios";

type SymplePokemon = {
  name: string;
  url: string;
};
type ResultsPokemon = {
  count: number;
  next: string;
  previous: string;
  results: SymplePokemon[];
};

function App() {
  const [pokemonsList, setPokemonsList] = useState<any[]>([]);
  const initialURL = "https://pokeapi.co/api/v2/pokemon";
  const [prevURL, setPrevURL] = useState<string>("");
  const [nextURL, setNextURL] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    fetchPokemonData(initialURL);
  }, []);

  const fetchPokemonData = async (url: string) => {
    const res: ResultsPokemon = (await axios(url)).data;
    getPokemonDetailList(res.results);
    setPrevURL(res.previous);
    setNextURL(res.next);
    setLoading(false);
  };

  const getPokemonDetailList = async (pokemons: SymplePokemon[]) => {
    const pokemonList = await Promise.all(
      pokemons.map(async (pokemon) => {
        const res = await axios(pokemon.url);
        return res.data;
      })
    );
    setPokemonsList(pokemonList);
  };

  const movePage = (type: string) => {
    let url: string = "";
    setLoading(true);
    switch (type) {
      case "prev":
        url = prevURL;
        break;
      case "next":
        url = nextURL;
        break;
    }
    if (!url) return;
    fetchPokemonData(url);
  };

  return (
    <>
      <Navbar />
      {loading ? <h1>Now Loading ...</h1> : <Card pokemons={pokemonsList} />}
      <Button handleClick={movePage} />
    </>
  );
}

export default App;
