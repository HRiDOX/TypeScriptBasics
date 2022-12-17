// Unions
// suppose i want to declare ID as number and string so we use pipe (|) for this
type ID = number | string

function printId(id:ID){
    console.log(id);
}

printId(1);
printId('h');
// no error as we'r passing it like int an d string


// suppose we'r receiving an string and we want to print it as uppercase by using toUpperCase

function printId2(id:ID){
    console.log(id.toUpperCase());
}

// but showing this error
// Property 'toUpperCase' does not exist on type 'ID'.
//   Property 'toUpperCase' does not exist on type 'number'.t
// why this error?
// as toUpperCase valid for string but not for number but our is both number and strign
// to solve this we'll use narrowing concept

function printId3(id:ID){
    if ( typeof id === 'string') {
        console.log(id.toUpperCase());
    } else {
        console.log(id);
    }
}