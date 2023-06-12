import { Pokemon } from './team.js';
import {compte} from './compteur.js';
import { changeSprite } from './changeSprite.js';
import {initializeApp} from './localstorage.js';


export let firstpkm;
export let evolutionurl;

export function first_pkm_random() {
  let chosenPokemon = localStorage.getItem('chosenPokemon');

  if (!chosenPokemon) {
    const pokemonrandom = [
      1, 4, 7, 10, 13, 16, 19, 21, 23, 27, 29, 32, 35, 37, 39, 41, 43, 46, 48, 50,
      52, 54, 56, 58, 60, 63, 66, 69, 72, 74, 77, 79, 81, 84, 86, 88, 90, 92, 96,
      98, 100, 102, 104, 109, 111, 116, 118, 120, 123, 124, 125, 126, 127, 128, 129,
      133, 138, 140, 142, 147
    ];

    const randomIndex = Math.floor(Math.random() * pokemonrandom.length);
    chosenPokemon = pokemonrandom[randomIndex];

    localStorage.setItem('chosenPokemon', chosenPokemon);
  }

  console.log('Le Pokémon choisi est :', chosenPokemon);
}

export  async function  fetch_first_pkm() {
  let chosenPokemon = localStorage.getItem('chosenPokemon');
  

  
  try {
    const response = await fetch("https://pokebuildapi.fr/api/v1/pokemon/" + chosenPokemon);
    if (!response.ok) {
      throw new Error('Erreur de réseau.');
    }
    const data = await response.json();
    console.log(data);
    const first_pkm_name = data.name;
    
    firstpkm = new Pokemon(first_pkm_name, -54, 1, true, evolutionurl);
    firstpkm.sprite = data.sprite;
    changeSprite()
    document.addEventListener('click', compte);
    initializeApp();

    console.log( firstpkm);
    
  } catch (error) {
    console.log('Une erreur s\'est produite :', error.message);
  }











  try {

    const responsee = await fetch("https://pokeapi.co/api/v2/pokemon-species/" + chosenPokemon);
    if (!responsee.ok) {
      throw new Error('Erreur de réseau.');
    }
    const data = await responsee.json();
    //console.log(data.chain.evolves_to[0].species.name      );
    firstpkm.evolutionurl = data.evolution_chain.url;
    console.log(data);
    
    
  } catch (errror) {
    console.log('Une erreur s\'est produite :', errror.message);
  }










  try {
    const response =  await fetch(firstpkm.evolutionurl);
    if (!response.ok) {
      throw new Error('Erreur de réseau.');
    }
    const data = await  response.json();
    firstpkm.evolutionName = data.chain.evolves_to[0].species.name;
    console.log(data.chain.evolves_to[0]);
    firstpkm.evo_lvl = data.chain.evolves_to[0].evolution_details[0].min_level;


    
    
    
  } catch (errror) {
    console.log('Une erreur s\'est produite :', errror.message);
  }
}





