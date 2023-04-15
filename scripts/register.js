//object literal: name, address{}, tel, hours{},pets[]
let petSalon = {
    name:"The Fashion pet",
    tel:"666-888-999",
    hours:{
        open:"9:00 am",
        close:"5:00 pm"
    },
    address:{
        city:"Tijuana",
        street:"Ave Univesity 262",
        zip:"22334"
    },
    pets:[
        {
            name:"scooby",
            age:60,
            gender:"Male",
            service:"Grooming"
        },
        {
            name:"scrappy",
            age:50,
            gender:"Male",
            service:"Vaccines"
        },
        {
            name:"Speedy",
            age:70,
            gender:"Male",
            service:"Nails cut"
        }
    ] 
}

//challenge: create three pets using obj lit anonymous with the following properties:
// name, age, gender, service
function displayPetNames(){
    const petsDiv = document.querySelector("#pets");
    for(let i=0;i<petSalon.pets.length;i++){
        petsDiv.innerHTML+=`
            <li>${petSalon.pets[i].name}</li>
        `;
    }
}

function init(){
    displayPetNames();
    
}

window.onload=init;//waiting to render the html