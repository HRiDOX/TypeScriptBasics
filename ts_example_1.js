function getTotal1(numbers) {
    return numbers.reduce(function (acc, item) {
        return acc + item;
    }, 0);
}
console.log(getTotal1([3, 2, 1]));
// will show number is not defined  before running this and number actually ts variable so we can't use this that way
