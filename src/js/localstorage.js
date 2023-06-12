import { firstpkm } from "./firstpkm.js";
export let savedInstance;
export function savelocal(){
    const pkmData = JSON.stringify(firstpkm);
    localStorage.setItem('pkmdata', pkmData);
    console.log(pkmData);
    const savedPkmData = localStorage.getItem('pkmdata');
    savedInstance = JSON.parse(savedPkmData);
    console.log(savedInstance.name);
    Object.assign(firstpkm, savedInstance);
    console.log(firstpkm);




} 

export function initializeApp() {
    const savedPkmData = localStorage.getItem('pkmdata');
    if (savedPkmData) {
      const savedInstance = JSON.parse(savedPkmData);
      Object.assign(firstpkm, savedInstance);
    }
    
    // Autres étapes d'initialisation de votre application
  }