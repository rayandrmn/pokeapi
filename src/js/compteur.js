import {firstpkm, fetch_first_pkm} from './firstpkm.js';
import {Pokemon} from './team.js';
let i = -54;
let lvl = 1;
export function is_evolving(){
    if(firstpkm.level == firstpkm.evo_lvl){
        console.log('ton pokemon evolue');
        return true
    }
    return false;
}
export function compte() {
  
  i++;
  console.log(firstpkm.xp);
  firstpkm.xp = i;
  console.log((0.8 * (firstpkm.level^3)) - (15 * firstpkm.level^2) + (100 * firstpkm.level) - 140)
  if(i >= (0.8 * (firstpkm.level^3)) - (15 * firstpkm.level^2) + (100 * firstpkm.level) - 140){
    
    firstpkm.level = lvl++;
    if(is_evolving()){
        console.log('ça evolue', is_evolving());
        
    }
  }
  console.log('ca evolue pas ', is_evolving())
    
  console.log(firstpkm.name +'est niveau '+firstpkm.level);
}






