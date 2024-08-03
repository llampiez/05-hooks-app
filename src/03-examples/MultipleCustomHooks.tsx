import { useCounter, useFetch } from '../hooks';
import { IsLoading } from './IsLoading';
import { PokemonCard } from './PokemonCard';

export const MultipleCustomHooks = () => {
  const { counter, incrementCounter, decrementCounter } = useCounter(1);
  const { data, isLoading } = useFetch(`https://pokeapi.co/api/v2/pokemon/${counter}`);

  return (
    <>
      <h1>Información del Pokémon</h1>
      <hr />

      {isLoading ? (
        <IsLoading />
      ) : (
        <PokemonCard
          id={data!.id}
          name={data!.name}
          sprites={[
            data!.sprites.front_default,
            data!.sprites.back_default,
            data!.sprites.front_shiny,
            data!.sprites.back_shiny,
          ]}
        />
      )}

      <button onClick={decrementCounter} className='btn btn-primary mt-2'>
        Anterior
      </button>
      <button onClick={incrementCounter} className='btn btn-primary mt-2'>
        Siguiente
      </button>
    </>
  );
};
