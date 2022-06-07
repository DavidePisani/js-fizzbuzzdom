// Scrivi un programma che stampi i numeri da 1 a 100.


// MILESTONE 3
// Per ogni numero, dato un container nel DOM, 
// appendi un elemento html con il numero o la stringa corretta.
// Applica uno stile differente a seconda del valore dell'indice
//  per i multipli di 3, per i multipli di 5 e per i valori che sono sia 
//  multipli di 3 che di 5 (seguendo le regole della Milestone 1).


const fizzBuzzContainer= document.querySelector('.fizzbuzz-container');


for( let i = 1; i <= 100; i++){

    let fizzBuzzClassName;
    let className
// calcolo multipli
    if(i % 3 === 0 && i % 5 === 0){
        fizzBuzzClassName='FizzBuzz'
        className= 'fizzbuzz'

    } else if(i % 3 === 0){
        fizzBuzzClassName='Fizz'
        className= 'fizz'
    } else if(i % 5 === 0){
        fizzBuzzClassName='Buzz'
        className= 'buzz'
        
    } else {
        fizzBuzzClassName=i
    }

    // creo stringa
    const myBox = `<div class="box flex-cont ${className}">${fizzBuzzClassName}</div>`;
    // stampo stringa
    fizzBuzzContainer.innerHTML += myBox
}