const salon = {
    name: "The Fashion Pet",
    address: {
        street: "Palm Ave",
        zip: "22333"
    },
    phone: "666-555-7777",
    pets: []
};

function Pet(name, age, gender, breed, service, type) {
    this.name = name;
    this.age = age;
    this.gender = gender;
    this.breed = breed;
    this.service = service;
    this.type = type;
}

function registerPet() {
    const name = document.getElementById("txtName").value;
    const age = document.getElementById("txtAge").value;
    const gender = document.getElementById("txtGender").value;
    const breed = document.getElementById("txtBreed").value;
    const service = document.getElementById("txtService").value;
    const type = document.getElementById("txtType").value;

    const newPet = new Pet(name, age, gender, breed, service, type);
    salon.pets.push(newPet);

    alert(`${name} has been registered!`);
    document.querySelector("form").reset();
    displayPets();
}

function displayPets() {
    const petList = document.getElementById("petList");
    petList.innerHTML = "";
    salon.pets.forEach((pet) => {
        petList.innerHTML += `<li>${pet.name} - ${pet.service}</li>`;
    });
}

document.getElementById("salonInfo").innerHTML = `${salon.name}, located at ${salon.address.street}, Zip: ${salon.address.zip}. Call us: ${salon.phone}`;

const pet1 = new Pet("Scooby", 60, "Male", "Great Dane", "Grooming", "Dog");
const pet2 = new Pet("Scrappy", 50, "Male", "Mixed", "Vaccines", "Dog");
const pet3 = new Pet("Tweety", 70, "Female", "Canary", "Nails", "Bird");

salon.pets.push(pet1, pet2, pet3);

displayPets();
