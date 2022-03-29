// class Person {
//     firstName: string;
//     lastName: string;
//     age: number;
//     constructor(firstName: string, lastName: string, age: number) {
//         this.firstName = firstName;
//         this.lastName = lastName;
//         this.age = age;
//     }
//     getHelloMessage() {
//         return `Welcome ${this.lastName} ${this.firstName}!`
//     }
// }
// let person = new Person('Percy', 'Chen', 27);
// console.log(person.getHelloMessage());
// Setters & Getter
var GandSBox = /** @class */ (function () {
    function GandSBox() {
    }
    Object.defineProperty(GandSBox.prototype, "name", {
        get: function () {
            return this._name;
        },
        set: function (customName) {
            this._name = customName;
        },
        enumerable: false,
        configurable: true
    });
    return GandSBox;
}());
// access property
var box = new GandSBox();
console.log(box.name);
box.name = 'BigBox';
console.log(box.name);
