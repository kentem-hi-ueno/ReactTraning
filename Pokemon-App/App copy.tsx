// import { useEffect, useState } from "react";
// import axios from "axios";
// import "./App.css";
// import { getAllPokemon, getPokemon } from "./utils/pokemon";
// import Card from "./components/Card";
// import Navbar from "./components/Navbar";

// function App() {
//   const [count, setCount] = useState(0);
//   const initialURL = `https://pokeapi.co/api/v2/pokemon`;
//   const [loading, setLoading] = useState(true);
//   const [pokemonData, setPokemonData] = useState([]);
//   const [nextURL, setNextURL] = useState("");
//   const [prevURL, setPrevURL] = useState("");

//   useEffect(() => {
//     // 全てのポケモンデータを取得

//     fetchPokemonData(initialURL);
//   }, [initialURL]);

//   const loadPokemon = async (data) => {
//     let _pokemonData = await Promise.all(
//       data.map((pokemon) => {
//         let pokemonRecord = getPokemon(pokemon.url);
//         return pokemonRecord;
//       })
//     );
//     setPokemonData(_pokemonData);
//   };
//   const fetchPokemonData = async (url: string) => {
//     const res = await getAllPokemon(url);
//     // 各ポケモンの詳細なデータを取得
//     loadPokemon(res.results);
//     setNextURL(res.next);
//     setPrevURL(res.previous);
//     setLoading(false);
//   };
//   const handleClick = (url: string) => {
//     if (url) {
//       setLoading(true);
//       fetchPokemonData(url);
//     }
//   };
//   return (
//     <>
//       <Navbar></Navbar>
//       {loading ? (
//         <h1>ロード中</h1>
//       ) : (
//         <div className="pokemonCardContainer">
//           {pokemonData.map((pokemon, i) => {
//             return <Card key={i} pokemon={pokemon}></Card>;
//           })}
//         </div>
//       )}
//       <div className="btn">
//         <button key="prev" onClick={() => handleClick(prevURL)}>
//           前へ
//         </button>
//         <button key="next" onClick={() => handleClick(nextURL)}>
//           次へ
//         </button>
//       </div>
//     </>
//   );
// }

// export default App;
