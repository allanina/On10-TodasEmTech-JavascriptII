const listagemDeFrutas = [ "Uva", "Banana", "Manga", "Cajá", "Pinha", "Maçã", "Melão"];

listagemDeFrutas.push("Acerola");
console.log(listagemDeFrutas);
/*console.log(listagemDeFrutas.length);*/

listagemDeFrutas.push("Carambola", "Abacaxi", "Melancia");
console.log(listagemDeFrutas);
/*console.log(listagemDeFrutas.length);*/

for (let fruta = 0; fruta < listagemDeFrutas.length; fruta++){
  console.log(listagemDeFrutas[fruta]);
}