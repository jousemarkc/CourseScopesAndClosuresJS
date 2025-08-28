// block scope

function colors(){
    if (true) {
        var colorone = 'yellow'; //function scope
        let colortwo = 'blue'; //block scope
        const colorthree = 'red'; //block scope
    }
    try {
        console.log(colorone);
    } catch (error) {
        console.log('Do not can print the color colorone');
    }
    try {
        console.log(colortwo);
    } catch (error) {
        console.log('Do not can print the color colortwo');
    }
    try {
        console.log(colorthree);
    } catch (error) {
        console.log('Do not can print the color colorthree');
    }
}

//Attemping print variable colorone before function execution. Fail.
try {
    console.log(colorone);
} catch (error) {
    console.log('Do not can print the color colorone');
}

colors();

//Attemping print variable colorone after function execution. Fail.
try {
    console.log(colorone);
} catch (error) {
    console.log('Do not can print the color colorone');
}