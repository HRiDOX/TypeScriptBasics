interface HasAge {
    age:number;

}


function getOldTest(people : HasAge[]): HasAge {
     return people.sort((a,b) => b.age - a.age)[0];
}

const people: HasAge[] = [{age:30},{age:40},{age:10}];



getOldTest(people).age;



interface Player {
    name:string;
    age:number;
}



const players:Player[] = [
    {name: 'Mahmudul',age:22}, 
    {name:'Hasan',age:27},
    {name:'Hridoy',age:32}
];
g
getOldTest(players);
//here on getOldTest function you can see there is HasAge array and it has age 
// so it checks in player is there age availabe or not yeah age is availabe thats why not showinf error

getOldTest(people).name;
//but we can't access name  from this as it is showing following error
//Property 'name' does not exist on type 'HasAge'.

// can be solve like using Assertion

// Assertion

const person = getOldTest(players) as Player;
person.age;
person.name;

// so we can access both
// actually we'r forcing it to use Player
// but it is not gud way


function getOldest<T>(people : T[]): T {
    return people.sort((a,b) => b.age - a.age)[0];
}
// here is shpwing error where is age coming from?

// so what can we do?

// you need to do in a way that whatever we pass on this it'll consist of property age deifinitely

function getOlDest<T extends HasAge>(people : T[]): T {
    return people.sort((a,b) => b.age - a.age)[0];
}

getOlDest(players).age;
getOlDest(players).name;

// we can now both use age and name


// easily identify what interface we'r using

//function getOlDest<Player>(people: Player[]): Player

getOlDest(people).age;

//function getOlDest<HasAge>(people: HasAge[]): HasAge