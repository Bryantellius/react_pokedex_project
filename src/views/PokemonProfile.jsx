import { useParams, useHistory } from "react-router-dom";

const PokemonProfle = ({ pokemon }) => {
  return (
    <main className="container">
      <div className="row">
        <div className="col-md-6 mx-auto">
          <div className="card">
            <div className="card-header d-flex justify-content-between">
              <h4>{pokemon.name}</h4>
              <span className="badge bg-secondary">{pokemon.num}</span>
            </div>
            <div className="card-body">
              <div className="my-3">
                <label htmlFor="type">Type:</label>
                <ul className="list-group-flush" id="type">
                  {pokemon.type.map((type) => {
                    return (
                      <li key={type} className="list-group-item">
                        {type}
                      </li>
                    );
                  })}
                </ul>
              </div>
              <div className="my-3">
                <label htmlFor="weaknesses">Weaknesses:</label>
                <ul className="list-group-flush" id="weaknesses">
                  {pokemon.weaknesses.map((weakness) => {
                    return (
                      <li key={weakness} className="list-group-item">
                        {weakness}
                      </li>
                    );
                  })}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default PokemonProfle;
