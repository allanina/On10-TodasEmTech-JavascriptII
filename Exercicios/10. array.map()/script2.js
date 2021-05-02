/* map é um método */

const winners = [
    {
        nome: 'Equipe Arrazante',
        pais: 'Brasil'
    },
    {
        nome: 'Time Perfeito',
        pais: 'Argentina'
    }
]

const vencedores = winners.map((equipe)=> { /*forma de arrow funcion */
    return equipe.nome;
});

console.log(vencedores);

const paises = winners.map(function(local) { /*forma de função normal*/
    return local.pais
})

console.log(paises); 
