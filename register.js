const salon = {
    name: 'The Fashion Pet',
    address: {
        street: '123 Main St',
        city: 'San Diego',
        state: 'CA'
    },
    phone: '123-456-7890',
    pets: []
};

class Pet {
    constructor(name, age, gender, breed, service, type, color, paymentMethod) {
        this.name = name;
        this.age = age;
        this.gender = gender;
        this.breed = breed;
        this.service = service;
        this.type = type;
        this.color = color;
        this.paymentMethod = paymentMethod;
    }
}

function registerPet() {
    const name = document.getElementById('petName').value;
    const age = document.getElementById('petAge').value;
    const gender = document.getElementById('petGender').value;
    const breed = document.getElementById('petBreed').value;
    const service = document.getElementById('petService').value;
    const type = document.getElementById('petType').value;
    const color = document.getElementById('petColor').value;
    const paymentMethod = document.getElementById('petPaymentMethod').value;

    if (name && age && gender && breed && service && type && color && paymentMethod) {
        const newPet = new Pet(name, age, gender, breed, service, type, color, paymentMethod);
        salon.pets.push(newPet);
        displayRow();
        clearForm();
    } else {
        alert('Please fill all fields.');
    }
}

function displayRow() {
    const petsTable = document.getElementById('petsTable');
    petsTable.innerHTML = '';
    salon.pets.forEach((pet, index) => {
        const row = `<tr>
            <td>${pet.name}</td>
            <td>${pet.age}</td>
            <td>${pet.gender}</td>
            <td>${pet.breed}</td>
            <td>${pet.service}</td>
            <td>${pet.type}</td>
            <td>${pet.color}</td>
            <td>${pet.paymentMethod}</td>
            <td><button onclick="deletePet(${index})" class="btn btn-danger">Delete</button></td>
        </tr>`;
        petsTable.innerHTML += row;
    });
}

function deletePet(index) {
    salon.pets.splice(index, 1);
    displayRow();
}

function clearForm() {
    document.getElementById('petName').value = '';
    document.getElementById('petAge').value = '';
    document.getElementById('petGender').value = '';
    document.getElementById('petBreed').value = '';
    document.getElementById('petService').value = '';
    document.getElementById('petType').value = '';
    document.getElementById('petColor').value = '';
    document.getElementById('petPaymentMethod').value = '';
}

window.onload = () => {
    displayRow();
};
