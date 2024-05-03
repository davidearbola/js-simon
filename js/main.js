// # MILESTONE 1
// # Generate 5 numeri casuali. Può tornarvi utile una funzione? Provate a stamparli prima in console e poi in pagina.
// # :warning: Ricordate che questi numeri dovrete ricontrollarli più avanti quindi non "buttateli" ma conservateli da qualche parte

// funzione che crea numeri random
let listaNumRandom = [];
// ciclo per creare 5 numeri random e li salvo in array e li stampo in pagina
for (let i = 1; i <= 5; i++) {
	let numero = numeriRandom(1, 100);
	listaNumRandom.push(numero);
	document.getElementById(`text`).innerHTML = listaNumRandom;
}

function numeriRandom(min, max) {
	let numeroRandom = Math.floor(Math.random() * max + min);
	return numeroRandom;
}
