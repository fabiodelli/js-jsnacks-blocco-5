/* Snack 1:
Crea un array di 10 oggetti che rappresentano una zucchina, 
indicando per ognuna varietà, peso e lunghezza.Calcola quanto pesano tutte le zucchine. 
 */

const zucchine = [
  { varieta: 'verde', lunghezza: 1, peso: 1 },
  { varieta: 'verde', lunghezza: 1, peso: 1 },
  { varieta: 'verde', lunghezza: 1, peso: 1 },
  { varieta: 'verde', lunghezza: 1, peso: 1 },
  { varieta: 'verde', lunghezza: 1, peso: 1 },
  { varieta: 'verde', lunghezza: 1, peso: 1 },
  { varieta: 'verde', lunghezza: 1, peso: 1 },
  { varieta: 'verde', lunghezza: 1, peso: 1 },
  { varieta: 'verde', lunghezza: 1, peso: 1 },
  { varieta: 'verde', lunghezza: 1, peso: 1 },
]

let totPeso = 0

zucchine.forEach(zucchina => {
    totPeso += zucchina.peso   
});

console.log(totPeso)