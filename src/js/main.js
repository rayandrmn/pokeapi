import { first_pkm_random } from './firstpkm.js'; 
import { fetch_first_pkm } from './firstpkm.js';
import { is_evolving } from './compteur.js';
import { firstpkm } from './firstpkm.js';
import {compte} from './compteur.js';
import {initializeApp} from './localstorage.js';


first_pkm_random();
fetch_first_pkm().then(compte,is_evolving);
//compte();
