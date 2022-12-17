// generics

function logString(arg: string){
    console.log(arg);

    return arg;
}

function logNumber(arg: number){
    console.log(arg);
    return arg;
}

function logArray(arg: any[]){
    console.log(arg);
    return arg;
}

logString('logged in');
logNumber(3);
logArray([4,3]);

// You can see inside every function there is repititon of code
// so we need to do this all together
// here comes use of generic
// make this function a generic so that it can be used as a any kind of
// pass whatever you want into this

function logAnything<T>( arg: T): T{
    console.log(arg);
    return arg;
}

logAnything([4,3]);


// AS you see by using <T>(type actuallay) it automatically detects what actually we're tryong to passing
//function logAnything<number[]>(arg: number[]): number[]

// if we pass string it'll autoamtic detect what we actually passing

logAnything("Hridoy");

//function logAnything<"Hridoy">(arg: "Hridoy"): "Hridoy"

// if we pass boolean everything what you pass it'll detect

logAnything(true);
//function logAnything<true>(arg: true): true