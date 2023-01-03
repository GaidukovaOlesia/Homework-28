// Створити клас SuperMath.
//
//     Додати до екземпляра метод - check(obj), параметр obj якого має властивості X, Y, znak.
//     Метод повинен підтвердити у користувача, чи хоче він зробити дію znak c Х і У.
//     Якщо хоче, зробити математичну дію znak (яка описана в прототипі),
//     інакше - запитати введення нових даних через метод input() класу SuperMath.

//     Приклад об'єкта: `obj = {X:12, Y:3, znak: “/”}`, можливі варіанти znak => `+ - / * %`.
//
// При введенні znak потрібно перевірити коректність введення на можливі математичні дії.

//     p = new SuperMath();
// p.check(obj); // --> no p.input() -> 3 prompt -> рахує
debugger;
const OPERATIONS = {
    "+": function (x, y) {return `x + y`},
    "-": function (x, y) {return `x - y`},
    "*": function (x, y) {return `x * y`},
    "/": function (x, y) {return `x / y`},
    "%": function (x, y) {return `x % y`},
};
class SuperMath {
    constructor() {
        debugger;
       this.input();
    }
    input() {
        debugger;
        do {
            debugger;
            this.x = +prompt(`Enter value x`)
        } while(isNaN(this.x));
        do {
            debugger;
            this.y = +prompt(`Enter value y`)
        } while(isNaN(this.y));
        do {
            debugger;
            this.znak = prompt(`Enter ${this.getOperations()}`)
        } while(!OPERATIONS[this.znak]);
    }
    check() {
        debugger;
        let userApproved = confirm(`Do you want make operations ${this.x} ${this.znak} ${this.y}`);
        return userApproved ? OPERATIONS[this.znak](this.x, this.y) : this.input().check;
    }

    getOperations() {
        debugger;
        let operands = [];
        for(let key in OPERATIONS) {
            operands.push(key);
        }
        return operands.join(", ");
    }
}
let obj = new SuperMath();
console.log(obj.check());



