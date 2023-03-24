/* Snack 1:
Crea un array di 10 oggetti che rappresentano una zucchina, 
indicando per ognuna varietà, peso e lunghezza.Calcola quanto pesano tutte le zucchine. 
 */

const zucchine = [
    { varietà: 'Zucchino nero di Milano', peso: 0.2, lunghezza: 15 },
    { varietà: 'Zucchino romanesco', peso: 0.3, lunghezza: 18 },
    { varietà: 'Zucchino siciliano', peso: 0.25, lunghezza: 14 },
    { varietà: 'Zucchina trombetta di Albenga', peso: 0.4, lunghezza: 20 },
    { varietà: 'Zucchina bianca triestina', peso: 0.35, lunghezza: 16 },
    { varietà: 'Zucchina tonda di Piacenza', peso: 0.15, lunghezza: 10 },
    { varietà: 'Zucchina lunga fiorentina', peso: 0.3, lunghezza: 20 },
    { varietà: 'Zucchina gialla', peso: 0.2, lunghezza: 12 },
    { varietà: 'Zucchina striata di Napoli', peso: 0.25, lunghezza: 14 },
    { varietà: 'Zucchina patisson', peso: 0.35, lunghezza: 18 }
]

let totPeso = 0

zucchine.forEach(zucchina => {
    totPeso += zucchina.peso   
});

console.log(`${totPeso} kg`)