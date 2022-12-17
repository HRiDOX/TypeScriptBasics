function getTotal(numbers){
    return number.reduce((acc,item) =>{
        return acc + item;
    },0);
}

console.log(getTotal([3,2,1]));

// will show number is not defined  after running this