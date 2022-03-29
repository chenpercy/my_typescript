// Multi interface

interface Person {
    name: string;
    sex: string;
}

interface Info {
    address: string;
    identity: string;
}

type resident1 = Person & Info
type resident2 = Person | Info

let man: resident1 = {
    name: "Percy",
    sex: "Man",
    address: "Taipei",
    identity: "haha"
}

let man2: resident2 = {
    name: "Percy",
    address: "Taipei",
    identity: "haha" 
}