// Algoritmo para armar tu valija para un viaje
let valija = "";
let item;

do {
    item = prompt("Ingresa un item que quieras llevar a tu viaje - Escribi ESC cuando termines");
    if (item != "ESC") {
        valija = valija + item + "\n";
    }
} while (item != "ESC");

console.log("En tu valija tenes los siguientes items:");
console.log(valija);


