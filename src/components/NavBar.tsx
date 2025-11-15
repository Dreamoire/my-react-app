interface Pokemon {
	name: string;
	imgSrc?: string;
}

interface NavBarProps {
	setPokemonName: (name: string) => void;
	pokemonList: Pokemon[];
}

export default function NavBar({ setPokemonName, pokemonList }: NavBarProps) {
	return (
		<nav>
			{pokemonList.map((onePokemonFromTheList) => (
				<button
					key={onePokemonFromTheList.name}
					type="button"
					onClick={() => setPokemonName(onePokemonFromTheList.name)}
				>
					{onePokemonFromTheList.name}
				</button>
			))}
		</nav>
	);
}
