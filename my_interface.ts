import { strictEqual } from "assert";

// this type annotation is difficult to read
function getFullName(person: {
    firstName: string;
    lastName: string;
}) {
    return `${person.firstName} ${person.lastName}`
}

let person4 = {
    firstName: 'John',
    lastName: 'Doe'
};

console.log(getFullName(person4));

interface Person3 {
    firstName: string;
    lastName: string;
}

function getFullName2(person: Person3) {
    return `${person.firstName} ${person.lastName}`;
}

let me = {
    firstName: 'Percy',
    lastName: 'Chen'
}

console.log(getFullName2(me))

interface optionalPerson {
    firstName: string;
    lastName: string;
    age?: number;
}


function getPersonInfo(person: optionalPerson){
    if (person.age) {
        console.log(`Welcome ${person.lastName} ${person.firstName}(${person.age})`);
    } else {
        console.log(`Welcome ${person.lastName} ${person.firstName}`);
    }
}

let me2 = {
    firstName: 'Percy',
    lastName: 'Chen',
    age: 27
}

getPersonInfo(me)


interface specialPerson {
    readonly sex: string;
    firstName: string;
    lastName: string;
}

let me3: specialPerson;
me3 = {
    sex: "Man",
    firstName: "Percy",
    lastName: "Chen"
}


me3.firstName = 'percy'
// me3.sex = 'Woman' // Cannot assign to 'sex' because it is a read-only property

// Function types

interface IsTeeanger {
    (age: number): string
}

let checkIsTeen: IsTeeanger;

checkIsTeen = function (age: number) {
    return age < 18 ? "YES" : "NO" 
}

// 參數不一定要符合原本的設定，這裡把 age 改成 anotherage 是可行的
checkIsTeen = function(anotherage: number) {
    return anotherage < 18 ? "YES" : "NO" 
}

console.log(checkIsTeen(45))


// Class Types

interface Json {
    toVolume(): number
}

class Box implements Json {
    constructor(private length: number, private width: number){}

    toVolume(): number {
        return this.length * this.width
    }
}

let box = new Box(5, 12);
console.log(box.toVolume());