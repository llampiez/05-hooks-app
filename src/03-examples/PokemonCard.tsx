type Props = {
  id: number;
  name: string;
  sprites: string[]
};

export const PokemonCard = ({ id, name, sprites }: Props) => {
  return (
    <section style={{ height: 200 }}>
      <h2 className='text-capitalize'>
        #{id} - {name}
      </h2>
      <div>
        {sprites.map((sprite) => {
         return(
          <img key={sprite} src={sprite} alt={name} />
         ) 
        })}
      </div>
    </section>
  );
};
