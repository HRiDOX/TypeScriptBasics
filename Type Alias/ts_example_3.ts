// We use type alias for making cutom type
// customer type convention is first alphabet should  be upper 
type User = {
    name: string;
    age: number;
    address?:string;
   //by adding ? before : we're declaring that it is not required it is optional
   // we can add it or not no error will be showed

}

// actually I made a shape of object

// now i'll use it

const user:User = {
    name : "Hridoy",
    age:22,
    address:"mainstreet"
}

function login(userData : User): User{
   return userData;
   // here  userData: User means we;e having a userData it's type will be User 
   //(userData : User): User   This last part :User means return type will also be User
   //That mean we can also set the return type
   // Why we'r using userData for return as it's type is matching with declared return type which is User
}


// suppose we import this fucntion in another file
console.log(login());
// suppose we don't know what should we pass into this
// when you hover on that function
//Expected 1 arguments, but got 0.ts(2554)
//ts_example_3.ts(22, 16): An argument for 'userData' was not provided.
// it'll show this

console.log(login({}));
// suppose we don't know what should be inside {} but when you hover you can see we need to pass name and age
// Argument of type '{}' is not assignable to parameter of type 'User'.
//   Type '{}' is missing the following properties from type 'User': name, agets(2345)

console.log(login({name:'Hridoy',age:23}));

type ID = number | string;

const userId1: ID = '123';
const userId2: ID = 123;

// so we have made a custom type by using we can assign int or string