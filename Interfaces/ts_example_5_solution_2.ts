// Merging two interfaces

interface Book {
    name:string;
    price:number;
}

// suppose we want to add more things in this interface but we don't have any access on this interface 

interface Book {
    fileSize: number;
    format:string;
}
// In typescirpt if we have two interface like same name it'll merge these interfaces 
// so the interface will be like
// interface Book {
//     name:string;
//     price:number;
//     fileSize: number;
//     format:string;

// }


interface Book {
    
    duration:number;
    
}

// interface Book {
//     name:string;
//     price:number;
//     fileSize: number;
//     format:string;
//     duration:number;    

// }



const book: Book = {
     name: 'Atomic Habits',
     price:1200,
     fileSize:5,
     format:'pdf',
     duration:5

}