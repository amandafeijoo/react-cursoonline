
const PokemonList = ({pokemons}) => {
//necesitamos un estado //
return <ul>
    {pokemons.map(pokemons => <li key={pokemons.name}>{pokemons.name}</li>)}
</ul>
}

export default PokemonList