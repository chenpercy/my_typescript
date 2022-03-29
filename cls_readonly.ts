class Person2 {
    readonly birthDate: Date;

    constructor(readonly birthDate: Date) {
        this.birthDate = birthDate;
    }
}

let person2 = new Person2(new Date(2010, 10, 25));
person2.birthDate = new Date(2002, 1, 2); // Cannot assign to 'birthDate' because it is a read-only property