/* ESERCIZIO 1
 Scrivi una funzione chiamata "crazySum" che riceve due numeri interi come parametri.
 La funzione deve ritornare la somma di quei due valori, ma se il loro valore è lo stesso allora deve ritornare la loro somma moltiplicata per 3.
*/
/* SCRIVI QUI LA TUA RISPOSTA */

function crazySum(num1, num2){      //Definisco la funzione "crazySum"
    if(num1 === num2){              //Verifico se i due numeri sono strettamente uguali
        return (num1 + num2)*3;     //Se sono uguali, ritorna la loro somma normale moltiplicata * 3
    }else{                          //Altrimenti, ritorna la loro somma normale
        return num1 + num2
    }
}

let risultato = crazySum(2, 2);     //Primo esempio di utilizzo della funzione "crazySum"
console.log(risultato);             //Risultato nel Terminal sarà: 12 poiché 2 è strettamente uguale a 2, quindi si sommano e
                                    //si moltiplicano *3. (2+2=4*3=12)

risultato = crazySum (3, 4);        //Secondo esempio di utilizzo della funzione "crazySum"
console.log(risultato);             //Risultato nel Terminal sarà: 7 poichè 3 e 4 non sono strettamente uguali e quindi non si 
                                    //moltiplicano ma solo si sommano. (3+4=7)

/* ESERCIZIO 2
 Scrivi una funzione chiamata "boundary", che accetta un numero intero come parametro e ritorna true se tale parametro è incluso tra 20 e 100 (incluso) o se è esattamente uguale a 400.
*/
/* SCRIVI QUI LA TUA RISPOSTA */

function boundary(numero){                                 //Definisco la funzione "boundary"
    if((numero >= 20 && numero <= 100) || numero === 400){ //Verifica se il numero è incluso tra 20 e 100 (inclusi) o uguale a 400
        return true;                                       //Stamperà true se la condizione è soddisfatta   
    }else{                                                 //Altrimenti 
        return false;                                      //Stamperà: false 
    }
}
//Esempi di utilizzo della funzione "boundary"
let result = boundary(50);
console.log(result);                                       //Stamperà true

result = boundary(150);
console.log(result);                                       //Stamperà false 

result = boundary(400);
console.log(result);                                       //Stamperà true 

/* ESERCIZIO 3
 Scrivi una funzione chiamata "reverseString", che accetta una stringa come parametro e la ritorna invertita (es.: EPICODE => EDOCIPE).
*/
/* SCRIVI QUI LA TUA RISPOSTA */
//Definisco la funzione "reverseString"
function reverseString(str) {
    return str.split("").reverse().join("");//Utilizzo il metodo split() per trasformare la stringa in un array di singoli
}                                           //caratteri
                                            //Utilizzo il metodo reverse() per intervenire l'ordine degli elementi nell'array
                                            //Utilizzo il metodo join() per unire gli elementi dell'array in una nuova stringa
                                            //Utilizzo il separatore vuoto ""per unire gli elementi senza spazi ne altri caratteri
let resultado = reverseString("HOLA");      //Esempio di utilizzo della funzione "reverseString"
console.log(resultado);                     //Stamperà: ALOH

/* ESERCIZIO 4
 Scrivi una funzione chiamata "upperFirst", che accetta una stringa come parametro e la ritorna rendendo maiuscola ogni lettera iniziale di ogni parola.
*/
/* SCRIVI QUI LA TUA RISPOSTA */
//Definisco la funzione "upperFirst"
function upperFirst(str){
    return str
        .split("")                   //Uso il metodo split() per dividere la stringa in un array di parole
        .map (function(word){        //Uso il metodo map() per trasformare ogni parola nell'array
            return word.slice(0, 1).toUpperCase() + word.slice(1);
        })                           //Utilizzo il metodo slice() e topUpperCase() per avere la prima lettera maiuscola
        .join("");                   //Utilizzo il metodo join() per unire le parole dell'array in una nuova stringa
}                                    //Utilizzo la funzione callback per rendere maiuscola la prima lettera maiuscola

//Esempio di utilizzo della funzione "upperFirst"
let Risultato = upperFirst("ciao mondo");
console.log(Risultato);              //Stamperà: Ciao Mondo

/* ESERCIZIO 5
 Scrivi una funzione chiamata "giveMeRandom", che accetta come parametro un numero chiamato n e ritorna un array contenente n numeri random contenuti tra 0 e 10.
*/
/* SCRIVI QUI LA TUA RISPOSTA */
//Definisco la funzione "giveMeRandom"
function giveMeRandom(n) {
    var randomArray = [];                                // Inizia l'array vuoto
      for (var i = 0; i < n; i++) {                      //Utilizzo un ciclo for per generare n numeri casuali
      var randomNumber = Math.floor(Math.random() * 11); //Genera un numero casuale tra 0 e 10
      randomArray.push(randomNumber);                    //Aggiunge il numero casuale all'array
    }
  
    return randomArray;                                  // Ritorna l'array contenente i numeri casuali
  }
  
  //Esempio di utilizzo della funzione "giveMeRandom"
  var RIsultato = giveMeRandom(5);
  console.log(RIsultato);                                //Stampa un array con 5 numeri casuali tra 0 e 10
  
//EXTRA:
/* ESERCIZIO 1
 Scrivi una funzione chiamata "area" che riceve due parametri (l1, l2) e calcola l'area del rettangolo associato.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 2
 Scrivi una funzione chiamata "crazyDiff" che calcola la differenza assoluta tra un numero fornito e 19.
 Se il valore calcolato è più grande di 19, la funzione deve tornare tale risultato moltiplicato per 3.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 3
 Scrivi una funzione chiamata "codify" che accetta una stringa come parametro.
 La funzione deve aggiungere la parola "code" all'inizio della stringa fornita e ritornare il risultato, ma se la stringa fornita comincia proprio con "code" allora deve ritornarla senza modifiche.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 4
 Scrivi una funzione chiamata "check3and7" la quale accetta un numero intero positivo come parametro.
 La funzione deve controllare che tale parametro sia un multiplo di 3 o di 7, e in tal caso tornare true; altrimenti deve tornare false.
 SUGGERIMENTO: operatore modulo
*/

/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 5
 Scrivi una funzione chiamata "cutString", che accetta una stringa come parametro e la ritorna senza il primo e l'ultimo carattere.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
