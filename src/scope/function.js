//function scope

function eating(){
    let someone = 'Someone';
    console.log(someone);

    if (someone === 'Someone') {
        console.log(`${someone} is eating`);
    }
}

eating();

console.log(someone); //Attemping print in console the variable someone. Fail