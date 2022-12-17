type Books = {
    name:string;
    price:number;
}

type Books = {
    size:number;
}
// can't merge like interface
// for this we need to use interface

type SanitizedStrng = string;
type EvenNumber = number;

// but we can't use interface like this

interface SanitizedStrngs extends string {
// we can't extends these primitives string
// for this we need to use types
}