const PokemonCard = ({ pokemon }) => {
  const determineTypeColors = () => {
    let color;
    return pokemon.type.map((type) => {
      if (type == "Grass") {
        color = "success";
      } else if (type == "Rock") {
        color = "secondary";
      } else if (type == "Fire") {
        color = "red";
      } else {
        color = "info";
      }
      return <span className={`badge bg-${color}`}>{type}</span>;
    });
  };

  return (
    <li className="list-group-item">
      <div className="row">
        <div className="col-sm-2">
          <span className="text-secondary">{pokemon.num}</span>
        </div>
        <div className="col-sm-5">
          <span className="h4">{pokemon.name}</span>
        </div>
        <div className="col-sm-5">{determineTypeColors()}</div>
      </div>
    </li>
  );
};

export default PokemonCard;
