import { changeSprite } from './changeSprite.js';
import {firstpkm, fetch_first_pkm} from './firstpkm.js';
import {Pokemon} from './team.js';
import {savelocal} from './localstorage.js';
import { savedInstance } from './localstorage.js';

export function is_evolving(){
    if(firstpkm.level == firstpkm.evo_lvl){
        console.log('ton pokemon evolue');
        return true
    }
    return false;
}

function fetchBasePokemonData() {
    let chosenPokemon = localStorage.getItem('chosenPokemon');
    chosenPokemon++;
    fetch("https://pokebuildapi.fr/api/v1/pokemon/" + chosenPokemon)
      .then(response => response.json())
      .then(data => {
        // Traitez les données du Pokémon ici
        console.log(data);
        console.log(chosenPokemon);
        firstpkm.name = data.name;
        firstpkm.sprite = data.sprite;
        changeSprite();
      })
      .catch(error => {
        console.log('Une erreur s\'est produite :', error.message);
      });
  }


export function compte() {
  savelocal();
  let i = savedInstance.xp;
  let lvl = savedInstance.level;
  console.log(i);
  i++;
  console.log(firstpkm.xp);
  firstpkm.xp = i;
  console.log((0.8 * (firstpkm.level^3)) - (15 * firstpkm.level^2) + (100 * firstpkm.level) - 140)
  if(i >= (0.8 * (firstpkm.level^3)) - (15 * firstpkm.level^2) + (100 * firstpkm.level) - 140){
    console.log(lvl);
    firstpkm.level = lvl + 1;
    if(is_evolving()){
        console.log('ça evolue', is_evolving());
        firstpkm.name = firstpkm.evolutionName;
        fetchBasePokemonData();
        
    }
  }
  console.log('ca evolue pas ', is_evolving())
    
  console.log(firstpkm.name +'est niveau '+firstpkm.level);
  
}






