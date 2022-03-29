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

class GandSBox{
    private _width: number;
    private _length: string;
    private _name: string;

    public get name() {
        return this._name
    }

    public set name(customName: string) {
        this._name = customName
    }
}

// access property
let box = new GandSBox();
console.log(box.name)
box.name = 'BigBox'
console.log(box.name)

// Static

class StaticBox{
    static initCount: number = 0

    constructor(
        private length: number,
        private width: number,
        private color: string,
    ){
        StaticBox.initCount+=1 
    }

    public getCounter(): number {
        return StaticBox.initCount;
    }
}


let box1: StaticBox = new StaticBox(3, 4, 'Blue')
console.log(box1.getCounter())

let box2: StaticBox = new StaticBox(1, 2, 'Red')
console.log(box2.getCounter())