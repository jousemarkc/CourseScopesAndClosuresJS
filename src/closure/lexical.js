// Using closure

const myGlobalVariable = 'Global';

function myFunction() {
    const myFunctionVariable = 'MyFunctionVariable';
    console.log(myGlobalVariable); // This work.

    function parent() {
        const myParentVariable = 'MyParentVariable';
        console.log(myFunctionVariable, myParentVariable); // Use of closure.

        function children() {
            console.log(myGlobalVariable, myFunctionVariable, myParentVariable); // Using again closure.
        }

        return children();
    }

    return parent();
}

myFunction();