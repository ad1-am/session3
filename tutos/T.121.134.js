//2.1. L’art du compteur
let mots = ["chat", "ordinateur", "table", "programmation", "js"];
let motsLongs =0;

for(let i=0;i<mots.length;i++){
    if(mots[i].length>5){
        motsLongs++;
    }

}
console.log(motsLongs);

//2.2. L’art de l’accumulateur conditionnel
let nombres = [4, 7, 2, 9, 5, 8];
let sommePairs=0;
for(let i=0;i<=nombres.length;i++){
    if(nombres[i] % 2 === 0){
        sommePairs+=nombres[i];
    }
}
console.log("le nombre des  nombres pairs est :",sommePairs);




//2.3. Travail à faire (Livrable)
let panier = [15, 42, 5, 89, 12, 50, 8];
//La somme totale de tous les articles du panier
console.log(panier);
let somme=0;
for(let j=0;j<panier.length;j++){
    somme+=panier[j];
}
console.log("la somme de panier est :",somme);


