// ======================================
// Master Front End XIX - Modulo 2 - Lenguaje
// ======================================


// ====================
// 1. ARRAY OPERATIONS
// ====================

// --- Head ---
// Devuelve el primer elemento del array (inmutable)
const head = (array) => {
  const [firstElement] = array;
  return firstElement;
};

// --- Tail ---
// Devuelve todos los elementos excepto el primero (inmutable)
const tail = (array) => {
  const [_, ...rest] = array;
  return rest;
};

// --- Init ---
// Devuelve todos los elementos excepto el último (inmutable)
const init = (array) => array.slice(0, -1);

// --- Last ---
// Devuelve el último elemento del array
const last = (array) => array.at(-1);

// Ejemplos de prueba
const numberArray = [1, 2, 3, 4, 5];
const stringArray = ["Juan", "Anna", "Jaime", "Elisabeth"];

console.log("Head:", head(numberArray));      // 1
console.log("Tail:", tail(stringArray));      // ["Anna", "Jaime", "Elisabeth"]
console.log("Init:", init(numberArray));      // [1,2,3,4]
console.log("Last:", last(stringArray));      // "Elisabeth"


// ==========
// 2. CONCAT
// ==========

// Concatena dos arrays (inmutable)
const concat = (a, b) => [...a, ...b];

// Versión opcional: acepta múltiples arrays
const concatMultiple = (...arrays) =>
  arrays.reduce((acc, current) => [...acc, ...current], []);

// Ejemplo
const arr1 = [1, 2];
const arr2 = [3, 4];
const arr3 = [5, 6];
console.log("Concat:", concat(arr1, arr2));              // [1,2,3,4]
console.log("Concat multiple:", concatMultiple(arr1, arr2, arr3)); // [1,2,3,4,5,6]


// =================
// 3. CLONE & MERGE
// =================

// --- Clone ---
// Crea una copia superficial de un objeto
function clone(source) {
  return { ...source };
}

// --- Merge ---
// Mezcla target y source. En caso de conflicto, source sobrescribe.
function merge(source, target) {
  return {
    ...target,
    ...source,
  };
}

// Ejemplo
const a = { name: "Maria", surname: "Ibañez", country: "SPA" };
const b = { name: "Luisa", age: 31, married: true };
console.log("Merge:", merge(a, b));
// Resultado: { name: "Maria", age: 31, married: true, surname: "Ibañez", country: "SPA" }


// ==============
// 4. READ BOOKS
// ==============

// Devuelve true si el libro existe y está leído
function isBookRead(books, titleToSearch) {
  const book = books.find((book) => book.title === titleToSearch);
  return book ? book.isRead : false;
}

// Ejemplo
const books = [
  { title: "Harry Potter y la piedra filosofal", isRead: true },
  { title: "Canción de hielo y fuego", isRead: false },
  { title: "Devastación", isRead: true },
];

console.log("Is book read?", isBookRead(books, "Devastación")); // true
console.log("Is book read?", isBookRead(books, "Los Pilares de la Tierra")); // false


// ================
// 5. SLOT MACHINE
// ================

class SlotMachine {
  constructor() {
    this.coins = 0; // Contador de monedas
  }

  play() {
    this.coins++; // Cada vez que se juega, se inserta una moneda

    // Tres ruletas aleatorias
    const reel1 = Math.random() >= 0.5;
    const reel2 = Math.random() >= 0.5;
    const reel3 = Math.random() >= 0.5;

    const hasWon = reel1 && reel2 && reel3;

    if (hasWon) {
      console.log(`Congratulations!!!. You won ${this.coins} coins!!`);
      this.coins = 0; // Reinicia monedas tras ganar
    } else {
      console.log("Good luck next time!!");
    }
  }
}

// Ejemplo de uso
const machine1 = new SlotMachine();
machine1.play();
machine1.play();
machine1.play();