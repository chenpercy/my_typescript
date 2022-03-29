// function raiseError(message: string): never {
//     throw new Error(message)
// }

// function reject() {
//     return RangeError('Rejected')
// }

// let loop = () => {
//     while (true){
//         console.log("Hello!");
//     }
// }

// loop()


function fn(a: string | number): boolean {
    if (typeof a === "string") {
        return true;
    } else if (typeof a === "number") {
        return false;
    } else {
        return true;
    }

    return neverOccur();
}

let neverOccur = () => {
    throw new Error('Never!');
} 

fn(1)