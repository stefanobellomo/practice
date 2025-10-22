/*
Snack 1

--Dividi le automobili in 3 array separati: 
1-- nel primo array solo le auto a benzina, 
2-- nel secondo solo le auto a diesel, 
3-- nel terzo il resto delle auto. Infine stampa separatamente i 3 array.

*/

const cars = [
  { brand: 'Ford', model: 'Fiesta', fuel: 'benzina' },
  { brand: 'Toyota', model: 'Corolla', fuel: 'diesel' },
  { brand: 'Honda', model: 'Civic', fuel: 'gpl' },
  { brand: 'Tesla', model: 'Model 3', fuel: 'elettrico' },
  { brand: 'Fiat', model: 'Panda', fuel: 'metano' },
  { brand: 'Volkswagen', model: 'Golf', fuel: 'benzina' },
  { brand: 'BMW', model: 'Serie 3', fuel: 'diesel' },
  { brand: 'Audi', model: 'A4', fuel: 'gpl' },
  { brand: 'Mercedes', model: 'Classe C', fuel: 'elettrico' },
  { brand: 'Peugeot', model: '208', fuel: 'metano' }
]

const benzina_auto = cars.filter((type)=> {
    if (type.fuel === 'benzina') {
      return true
    } return false
  }) 
  console.log(benzina_auto);
  
const diesel_auto = cars.filter((type)=> {
    if (type.fuel === 'diesel') {
      return true
    } return false
  }) 
  console.log(diesel_auto);

const other_auto = cars.filter((type)=> {
    if ((type.fuel !== 'diesel') && (type.fuel !== 'benzina')) {
      return true
    } return false
  }) 
  console.log(other_auto);
  