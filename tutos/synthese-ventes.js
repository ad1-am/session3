let ventes = [110, 75, 150, 180, 90, 130, 100, 160];

let total= 0;
let somme=0;
let Exceptionnelles=-1;
let totalExceptionnelles=0;
let sommeExceptionnelles=0;
let Maximum=0;
let Minimum=ventes[0];
console.log("notre tableu de ventes est :",ventes);
for(let i=0;i<ventes.length;i++){
    total++;
    somme+=ventes[i];
    if(ventes[i]>=130){
      totalExceptionnelles++;
      Exceptionnelles=ventes[i]; 
      sommeExceptionnelles+=ventes[i] ;
      console.log("Le nombre de ventes 'Exceptionnelles'est:",Exceptionnelles);
    }
    if(ventes[i]>=Maximum){
        Maximum=ventes[i];
    }
    if(ventes[i] < Minimum){
    Minimum = ventes[i];
}
    
}
if(Exceptionnelles===-1){
    console.log("non nombre exeptionnelles");
}

//Le nombre total de ventes réalisées
console.log("Le nombre total de ventes réalisées :",total);
//Le nombre total de ventes exeptionnelles 
console.log ("Le nombre total de ventes exeptionnelles est :",totalExceptionnelles);
//Le chiffre d’affaires total (la somme)
console.log("Le chiffre d’affaires total",somme);
//Le chiffre d’affaires généré uniquement par ces ventes exceptionnelles
console.log("Le chiffre d’affaires généré uniquement par ces ventes exceptionnelles est :",sommeExceptionnelles);



//Le montant de la vente la plus élevée (Maximum) et la plus faible (Minimum)

    console.log("le maximum est :",Maximum);
    console.log("le minimum est :",Minimum);