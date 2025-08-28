//Avoid this
function countries(){
    country = 'Italy';
    console.log(country);
}
countries() //Interesting. Once called the funtion, the scope variable country, it become in a global variable.
console.log(country);