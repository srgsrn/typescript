const isFetching: boolean = true;
const isLoading: boolean = false;

const int: number = 42;
const float: number = 4.2;
const num: number = 3e10;

const message: string = "Hello typescript";

const numberArray: number[] = [1, 2, 3, 4, 5, 8, 13];
const numberArray2: Array<number> = [1, 2, 3, 4, 5, 8, 13];

const words: string[] = ["Hello", "Typescript"];

// Tuple
const contact: [string, number] = ["Vladilen", 1234567];

// Any
let variable: any = 42;
// ...
variable = "New string";

// ======
// void - function returns nothing
function sayMyName(name: string): void {
    console.log("Name =====", name);
}

sayMyName("Tom");

// Never (return Error or Do something all the time)
function throwError(message: string): never {
    throw new Error(message)
}

function infinite(): never {
    // this while never ends
    while (true) {

    }
}

// Type (custom types / alias)
type Login = string;

const login: Login = "admin";

type ID = string | number;
const id1: ID = 1234;
const id2: ID = "1234";

type SomeType = string | null | undefined;

