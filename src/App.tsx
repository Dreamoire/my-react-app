import { useEffect, useState } from "react";
import "./App.css";
import NavBar from "./components/NavBar";
import PokemonCard from "./components/PokemonCard";

interface Pokemon {
	name: string;
	imgSrc?: string;
}

const pokemonList: Pokemon[] = [
	{
		name: "bulbasaur",
		imgSrc:
			"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png",
	},
	{
		name: "charmander",
		imgSrc:
			"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/4.png",
	},
	{
		name: "squirtle",
		imgSrc:
			"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/7.png",
	},
	{
		name: "pikachu",
		imgSrc:
			"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/25.png",
	},
	{
		name: "eevee",
		imgSrc:
			"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/133.png",
	},
	{
		name: "snorlax",
		imgSrc:
			"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/143.png",
	},
	{
		name: "mew",
	},
];

function App() {
	const [pokemonName, setPokemonName] = useState("bulbasaur");

	useEffect(() => {
		alert("hello pokemon trainer :)");
	}, []);

	useEffect(() => {
		if (pokemonName === "pikachu") {
			alert("pika pikachu !!!");
		}
	}, [pokemonName]);

	const pokemon = pokemonList.find((pokemon) => pokemon.name === pokemonName);

	if (pokemon == null) {
		throw new Error("Invalid pokemon name");
	}

	return (
		<div>
			<NavBar pokemonList={pokemonList} setPokemonName={setPokemonName} />

			<PokemonCard pokemon={pokemon} />
		</div>
	);
}

export default App;
