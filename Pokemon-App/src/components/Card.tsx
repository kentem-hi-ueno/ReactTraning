import "./Card.css";

const Card: React.FC<any> = ({ pokemons }) => {
  const PokemonCard = pokemons.map((pokemon: any) => {
    return (
      <div className="card" key={pokemon.name}>
        <img src={pokemon.sprites.front_default} alt="" />
        <h3 className="name">{pokemon.name}</h3>
        <div className="detail">
          <div className="type">
            <span>タイプ</span>
            {pokemon.types.map((type: any) => {
              return <div key={type.type.name}>{type.type.name}</div>;
            })}
          </div>
          <div className="weight">
            重さ：<span>{pokemon.weight}</span>
          </div>
          <div className="height">
            高さ：<span>{pokemon.weight}</span>
          </div>
          <div className="ability">
            特性：<span>{pokemon.abilities[0].ability.name}</span>
          </div>
        </div>
      </div>
    );
  });
  return <div className="pokemonList">{PokemonCard}</div>;
};

export default Card;

// 丁寧なやり方
// APIからくるアンノウン型
// let aa: unknown = 1;
// let bb: number = 0;
// bb = aa;
// aa = "";
// aa = true;

// 何が来るかわからない方に対して使える型
// 型ガード
// アンノウン型を厳密に制御できる

// 大体何が来るかはわかる
// 来るものに型を合わせる

// 当社ではアンノウン型を使うほどがちがちの制御の必要はないことが多い

// never型　何も値が入らない型
// typescriptの型チューリング完全
// typescriptだと型をプログラミング可能
