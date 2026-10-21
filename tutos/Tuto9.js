//2.1. Lecture et utilisation
let nombres = [10, 20, 30, 40];
let dernierNombres=nombres.length-1;
console.log("la somme du premier élément et du dernier élément :",nombres[0]+nombres[dernierNombres]);

//2.2. Modification classique et dynamique
let temperatures = [18, 20, 23, 19];
console.log ("Avant :",temperatures);

//Remplacez la deuxième température (20) par 21.
temperatures[1]=21;
//Remplacez la toute dernière température par 25 en utilisant la formule length - 1
let dernièreTempérature=temperatures.length-1;
temperatures[dernièreTempérature]=25;
//Affichez “Après :”
console.log("apré :",temperatures);
