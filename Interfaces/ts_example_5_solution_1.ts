// now we'll see how two inerfaces can be reused together or extend

interface Book {
    name:string;
    price:number;
}

interface Ebook extends Book{
    // name:string;
    // price:number;
    fileSize: number;
    format:string;
}

interface AudioBook extends Ebook{
    // name:string;
    // price:number;
    // fileSize: number;
    // format:string;
    duration:number;
}

const book1:Book = {
    name:"Atomic Habits",
    price:12700,
    
    
}

const book2:Ebook = {
    name:"Atomic Habits",
    price:12700,
    fileSize:300,
    format:'pdf',
    
}

const book3:AudioBook = {
    name:"Atomic Habits",
    price:12700,
    fileSize:300,
    format:'pdf',
    duration:5
}



// we don't need to re-declare name filesize format price in multiple inerfaces
