import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getPokemons } from '../store/slices/pokemon';

export const PokemonApp = () => {
  const { pokemons, page, isLoading } = useSelector((state) => state.pokemons);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getPokemons());
  }, []);

  return (
    <div>
      <h1>PokemonApp</h1>
      <hr />

      <span>Loading... {isLoading ? 'True' : 'False'}</span>

      <ul>
        {pokemons.map((pokemon) => (
          <li key={pokemon.name}>
            <h4>{pokemon.name}</h4>
          </li>
        ))}
      </ul>

      <button
        //
        disabled={isLoading}
        onClick={() => dispatch(getPokemons(page))}
      >
        Next
      </button>
    </div>
  );
};
