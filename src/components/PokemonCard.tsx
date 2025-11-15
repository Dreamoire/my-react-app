type Pokemon = {
	name: string;
	imgSrc?: string;
};

type PokemonCardPops = {
	pokemon: Pokemon;
};

function PokemonCard({ pokemon }: PokemonCardPops) {
	return (
		<figure>
			{pokemon.imgSrc !== undefined ? (
				<img src={pokemon.imgSrc} alt={pokemon.name} />
			) : (
				<p>???</p>
			)}
			<figcaption>{pokemon.name}</figcaption>
		</figure>
	);
}

export default PokemonCard;
