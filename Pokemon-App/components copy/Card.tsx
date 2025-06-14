import "./Card.css";

type CardProps = {
  pokemon: any;
};
const Card: React.FC<CardProps> = ({ pokemon }) => {
  return (
    <div className="card">
      <div className="cardImg">
        <img src={pokemon.sprites.front_default} alt="" />
        <h3 className="cardName">{pokemon.name}</h3>
        <div className="cardTypes">
          <div>タイプ</div>
          {pokemon.types.map((type) => {
            return (
              <div key={type.type.name}>
                <span className="typeName">{type.type.name}</span>
              </div>
            );
          })}
        </div>
        <div className="cardIngo">
          <div className="cardData">
            <p className="title">重さ：{pokemon.weight}</p>
          </div>
          <div className="cardData">
            <p className="title">高さ：{pokemon.height}</p>
          </div>
          <div className="cardData">
            <p className="title">
              アビリティ：{pokemon.abilities[0].ability.name}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
