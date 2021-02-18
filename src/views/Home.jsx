import { useEffect, useState } from "react";
import PokemonCard from "../components/PokemonCard";

const Home = ({ pokemonList, filteredList, setFilteredList }) => {
  const filterPokemon = (event) => {
    event.preventDefault();

    const name = document.getElementById("pokemonName").value.toLowerCase();
    const type = document.getElementById("pokemonType").value.toLowerCase();
    const weakness = document
      .getElementById("pokemonWeaknesses")
      .value.toLowerCase();
    let filteredArr = pokemonList;

    console.log(name, type, weakness);

    if (name) {
      filteredArr = filteredArr.filter((pokemon) =>
        pokemon.name.toLowerCase().includes(name)
      );
    }
    if (type) {
      filteredArr = filteredArr.filter((pokemon) =>
        pokemon.type.includes(type)
      );
    }
    if (weakness) {
      filteredArr = filteredArr.filter((pokemon) =>
        pokemon.weaknesses.includes(weakness)
      );
    }

    setFilteredList(filteredArr);
  };

  const listTypes = () => {
    const typeList = [];
    // Dynamically factor total list of all possible types
    pokemonList.forEach(({ type }) => {
      type.forEach((type) => {
        if (!typeList.includes(type)) {
          typeList.push(type);
        }
      });
    });

    return (
      <datalist id="typeList">
        {typeList.map((type) => {
          return <option value={type}>{type}</option>;
        })}
      </datalist>
    );
  };

  const listWeaknesses = () => {
    const weaknessList = [];
    // Dynamically factor total list of all possible weaknesses
    pokemonList.forEach(({ weaknesses }) => {
      weaknesses.forEach((weakness) => {
        if (!weaknessList.includes(weakness)) {
          weaknessList.push(weakness);
        }
      });
    });

    return (
      <datalist id="weaknessList">
        {weaknessList.map((weakness) => {
          return <option value={weakness}>{weakness}</option>;
        })}
      </datalist>
    );
  };

  return (
    <main className="container">
      <div className="row">
        <div className="col-md-8 mx-auto">
          <h1 className="text-center">Home</h1>
          <hr />
          <form onSubmit={filterPokemon}>
            <div className="form-group my-3">
              <label htmlFor="pokemonName">Name Search:</label>
              <input
                type="search"
                name="pokemonName"
                id="pokemonName"
                className="form-control"
                onChange={filterPokemon}
                placeholder="Bulbasaur..."
              />
            </div>
            <div className="form-group my-3">
              <label htmlFor="pokemonType">Type Search:</label>
              <input
                type="search"
                name="pokemonType"
                id="pokemonType"
                className="form-control"
                onChange={filterPokemon}
                placeholder="Grass..."
                list="typeList"
              />
              {listTypes()}
            </div>
            <div className="form-group my-3">
              <label htmlFor="pokemonWeaknesses">Weaknesses Search:</label>
              <input
                type="search"
                name="pokemonWeaknesses"
                id="pokemonWeaknesses"
                className="form-control"
                onChange={filterPokemon}
                placeholder="Fire..."
                list="weaknessesList"
              />
              {listWeaknesses()}
            </div>
            <div className="form-group d-flex justify-content-around">
              <h6>{filteredList.length}</h6>
              <button type="submit" className="btn btn-primary mx-auto d-block">
                Search
              </button>
            </div>
          </form>
          <hr />
          <h3></h3>
          <div className="row">
            <ul className="list-group-flush">
              {filteredList.length > 0 ? (
                filteredList.map((pokemon) => {
                  return <PokemonCard key={pokemon.id} pokemon={pokemon} />;
                })
              ) : (
                <h6 className="text-center">Loading...</h6>
              )}
            </ul>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Home;
