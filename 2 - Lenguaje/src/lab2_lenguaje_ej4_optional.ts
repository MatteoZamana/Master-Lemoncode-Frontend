console.log("================================================");
console.log("Esecuzione test esercizio 4 - Read Books TS");
console.log("================================================");


// =====================================================
// Lab2 Lenguaje - Ejercicio 4 (Read Books) - TypeScript
// Opcional
// =====================================================

console.log("------------------------------------------------");
console.log("4. Read Books - TypeScript");

// -----------------------------------------------------
// Interfaz de libros
// -----------------------------------------------------
interface Book {
    title: string;
    isRead: boolean;
}

// -----------------------------------------------------
// Función que verifica si un libro ha sido leído
// -----------------------------------------------------
function isBookRead(books: Book[], titleToSearch: string): boolean {
    // some() devuelve true si al menos un elemento cumple la condición
    return books.some(book => book.title === titleToSearch && book.isRead);
}

// -----------------------------------------------------
// Datos de ejemplo para pruebas
// -----------------------------------------------------
const books: Book[] = [
    { title: "Harry Potter y la piedra filosofal", isRead: true },
    { title: "Devastación", isRead: true },
    { title: "Canción de hielo y fuego", isRead: false },
];

// -----------------------------------------------------
// Resultados en consola
// -----------------------------------------------------
console.log(isBookRead(books, "Il libro Cuore"));               // false
console.log(isBookRead(books, "Devastación"));                 // true
console.log(isBookRead(books, "Canción de hielo y fuego"));    // false
console.log(isBookRead(books, "Los Pilares de la Tierra"));    // false

console.log("------------------------------------------------");
console.log("Fin del ejercicio 4");