//suppose we have a frontend application we'r requesting on different servers for fetching request

interface IPost{
    title: string;
    id: number;
    description: string

}

// async always return promise
// what it'll return?
// it'll return IPost array
const fetchPostData = async (path :string): Promise<IPost[]> => {

    const response = await fetch (`https://example.com${path}`);

    return response.json();
}

(async () => {
    const posts = await fetchPostData ('/posts');
    posts[0].description;
    posts[0].id;
    posts[0].title;
    // now we can access all property
})();


// Now I want to fetch user data

interface IUser {
    id:number;
    name:string;
    age:number;
}

const fetchUserData = async (path :string): Promise<IUser[]> => {

    const response = await fetch (`https://example.com${path}`);

    return response.json();
}

(async () => {
    const users = await fetchUserData ('/users');
     users[0].name;
     users[0].id;
     users[0].age;
    // now we can access all property
})();


// but here is repition of same type of function for different http request
// user data er jonno ekta function
// posts data er jonno abar arekta function

// now we use generic


const fetchData = async <T>(path: string):Promise<T> => {
    const response = await fetch (`https://example.com${path}`);

    return response.json();
}

(async () => {
    const users = await fetchData<IUser[]> ('/users');
     users[0].name;
     users[0].id;
     users[0].age;
    // now we can access all property
    // so basically amra eikhan thekei bole ditesi amader j upore <T> placeholder disi oitar type ashole ki user jonno <Iuser>
    // amader different function banano lagtesena alada vabe <IUser> k identify korar jonno

    // can be do for same as posts
    const posts = await fetchData<IPost[]>('/posts');
    posts[0].description;
    posts[0].id;
    posts[0].title;

    // amader aage differnt duita function banano lagse posts and user data fecth korar jonno
    // now we can use only one function for fetching more types of data
    
})();
