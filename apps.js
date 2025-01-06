let pet=[];

let petSalon = {
    name:"The Fashion Pet",
    address:{
        street:"Palm Ave",
        zip:"22333"
    },
    phone:"666-555-7777"
}
//constructor (add the breed and the services)
function Pet(name,age,gender){
    this.name=name;
    this.age=age;
    this.gender=gender;
    this.breed=breed;
    this.service=service;
}
//create the variables
let inputName = document.getElementById("txtName");
let inputAge = document.getElementById("txtAge");
let inputGender = document.getElementById("txtGender");
let inputBreed = document.getElementById("txtBreed");
let inputService = document.getElementById("txtService");

function register(){

    let newPet = new Pet (inputName.value,inputAge.value,inputGender.value,inputBreed.value,inputService.value);
    pets.push(newPet);
    console.log(pets);
}
function init(){
    let pet1 = new Pet("Scooby",60,"Male");
    let pet2 = new Pet("Scrabby",50,"Male","Mixed","Vaccines");
    let pet3 = new Pet("Tweety",70,"Male","Camarian","Nails");
}
console.log(pet1);

window.onload=init;//wait to render the HTML

