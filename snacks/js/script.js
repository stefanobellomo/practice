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

/*---------------FILTER---------------*/

const benzina_auto = cars.filter((type) => {
  if (type.fuel === 'benzina') {
    return true
  } return false
})
console.log(benzina_auto);

const diesel_auto = cars.filter((type) => {
  if (type.fuel === 'diesel') {
    return true
  } return false
})
console.log(diesel_auto);

const other_auto = cars.filter((type) => {
  if ((type.fuel !== 'diesel') && (type.fuel !== 'benzina')) {
    return true
  } return false
})
console.log(other_auto);

/*---------------FOR EACH---------------*/

cars.forEach(function (car) {
  if (car.fuel === 'diesel')
    console.log(car);
})

cars.forEach(car => {
    if (car.fuel === 'benzina')
    console.log(car);
  
});

cars.forEach(other => {
    if ((other.fuel !== 'diesel') && (other.fuel !== 'benzina')) {
      console.log(other);
      
    }
})


/*---------------FOR---------------*/

const benza = []
for (let i = 0; i < cars.length; i++) {
  const car = cars[i];
  if (car.fuel === 'benzina') {
    benza.push(car)
  }
}
console.log(benza);


const gasolj = []
for (let i = 0; i < cars.length; i++) {
  const car = cars[i];
  if (car.fuel === 'diesel') {
    gasolj.push(car)
  }
}
console.log(gasolj);

const other = []
for (let i = 0; i < cars.length; i++) {
  const car = cars[i];
  if (car.fuel !== 'diesel' && car.fuel !== 'benzina') {
    other.push(car)
  }
}
console.log(other);
