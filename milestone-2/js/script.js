// Scrivi un programma che stampi i numeri da 1 a 100.

// MILESTONE 2
// Per ogni numero, data una ul nel DOM, 
// aggiungete un elemento html li con il numero o la stringa corretta 
// (seguendo le regole della Milestone 1).
const mainList = document.querySelector('.list');


for( let i = 1; i <= 100; i++){

    let fizzBuzzClassName;

    if(i % 3 === 0 && i % 5 === 0){
        fizzBuzzClassName='FizzBuzz'

    } else if(i % 3 === 0){
        
        fizzBuzzClassName='Fizz'
    } else if(i % 5 === 0){
        fizzBuzzClassName='Buzz'
        
    } else {
        fizzBuzzClassName=i
    }

    const newLi = `<li>
                    ${fizzBuzzClassName}
                    </li>`;

    mainList.innerHTML += newLi;
    
    
}