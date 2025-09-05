function eat() {
    let name = 'Camila';

    function eating() {
        return `${name} is eating!`;
    }

    return eating;
}

const lunch = eat();

console.log(lunch);
console.log(lunch());