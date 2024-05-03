// # MILESTONE 1
// # Generate 5 numeri casuali. Può tornarvi utile una funzione? Provate a stamparli prima in console e poi in pagina.
// # :warning: Ricordate che questi numeri dovrete ricontrollarli più avanti quindi non "buttateli" ma conservateli da qualche parte

// // funzione che crea numeri random
// let listaNumRandom = [];
// // ciclo per creare 5 numeri random e li salvo in array e li stampo in pagina
// for (let i = 1; i <= 5; i++) {
// 	let numero = numeriRandom(1, 100);
// 	listaNumRandom.push(numero);
// 	document.getElementById(`text`).innerHTML = listaNumRandom;
// }

// # MILESTONE 2
// # Impostate un timer a 3 secondi, testatelo con un console.log. Una volta funzionante fate in modo che nasconda i numeri in pagina.

// // funzione che nasconde elementi in pagina
// function nascondi(elemento) {
// 	elemento.style.display = "none";
// }
// // funzione che crea numeri random
// function numeriRandom(min, max) {
// 	let numeroRandom = Math.floor(Math.random() * max + min);
// 	return numeroRandom;
// }

// // variabile globale per elemento da nascondere
// let elementoDaNascondere = document.getElementById(`text`);
// // creo array per numeri random
// let listaNumRandom = [];
// // ciclo per creare 5 numeri random e li salvo in array e li stampo in pagina
// for (let i = 1; i <= 5; i++) {
// 	let numero = numeriRandom(1, 100);
// 	listaNumRandom.push(numero);
// 	document.getElementById(`text`).innerHTML = listaNumRandom;
// }

// // creo timer richiamando funzione che nasconde gli elementi
// setTimeout(nascondi, 3000, elementoDaNascondere);

// # MILESTONE 3
// # Sempre nella funzione temporizzata, mostrate un prompt all'utente finchè non vi ritrovate con 5 numeri salvati. Poi stampate tutto l'array dei numeri utente in console.

// funzione che nasconde elementi in pagina
function nascondi(elemento) {
	elemento.style.display = "none";
}
// funzione che crea numeri random
function numeriRandom(min, max) {
	let numeroRandom = Math.floor(Math.random() * max + min);
	return numeroRandom;
}

// funzione che chiede numeri per tot volte ad utente e li salva in array
function chiediNumeri(numeriUtente) {
	for (let i = 1; i <= 5; i++) {
		let numeroUtente = prompt(`Scrivi qui il numero che ricordi`);
		numeriUtente.push(numeroUtente);
	}
	console.log(numeriUtente);
}

// creo array per numeri utente
let numeriUser = [];
// variabile globale per elemento da nascondere
let elementoDaNascondere = document.getElementById(`text`);
// creo array per numeri random
let listaNumRandom = [];
// ciclo per creare 5 numeri random e li salvo in array e li stampo in pagina
for (let i = 1; i <= 5; i++) {
	let numero = numeriRandom(1, 100);
	listaNumRandom.push(numero);
	document.getElementById(`text`).innerHTML = listaNumRandom;
}

console.log(listaNumRandom);

// creo timer richiamando funzione che nasconde gli elementi
setTimeout(nascondi, 3000, elementoDaNascondere);

// creo timer per far apparire i prompt
setTimeout(chiediNumeri, 3100, numeriUser);
