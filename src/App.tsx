import { useState } from "react";
import "./App.css";
import NavBar from "./components/NavBar";

interface Pokemon {
	name: string;
	imgSrc?: string;
}

const pokemonList: Pokemon[] = [
	{ name: "bulbasaur" },
	{ name: "charmander" },
	{ name: "squirtle" },
];

function App() {
	const [pokemonName, setPokemonName] = useState("bulbasaur");

	const pokemon = pokemonList.find((pokemon) => pokemon.name === pokemonName);

	if (pokemon == null) {
		throw new Error("Invalid pokemon name");
	}

	return (
		<div>
			<NavBar pokemonList={pokemonList} setPokemonName={setPokemonName} />
		</div>
	);
}

export default App;
