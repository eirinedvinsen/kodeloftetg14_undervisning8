//console referer til inspiser vinduet .log gir en beskjed til console
console.log('Hello World!');

//Datatyper
//string= streng/tekst
//number = tall
//boolean = true/false verdi

//variabler:
//let = kan bytte verdi
//const= ikke bytte verdi

// Erklærer en variable: 
// let ? = ?;
let userName = "Eirin";
console.log(userName);
userName="Atsjoo";
console.log(userName);

let userAge = 32;
console.log(userAge);

let userPresent = true;
console.log(userPresent);

const firstName = "Eirin"
const lastName = "Edvinsen"
const fullName = firstName + " " + lastName; //variable chanining
const wholeName = `${firstName} ${lastName}!`; //template literal
console.log(fullName);
console.log(wholeName);

function businessCard() {
    const givenName = "Eirin";
    const familyName = "Edvinsen";
    const allName = givenName + " " + familyName;
    console.log(allName);

    //Mer om dette tirsdag 19.05
    const body = document.querySelector("h1");
    body.textContent = allName;
}
businessCard();


