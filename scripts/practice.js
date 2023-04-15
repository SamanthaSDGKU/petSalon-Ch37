console.log("Practice");
let array = [];

//object literal
let student = {
    name:"Felix",
    age:25,
    grades:[3.9,3.8,4.0],
    address:{
        country:"USA",
        state:"Georgia",
        city:"Atlanta"
    }
}

let student1 = {
    name:"Mario",
    age:20,
    grades:[3.7,3.9,3.0],
    address:{
        country:"Mex",
        state:"Baja California",
        city:"Tijuana"
    }
}

let student2 = {
    name:"Rafael",
    age:21,
    grades:[3.6,3.7,3.5],
    address:{
        country:"Mex",
        state:"Baja California",
        city:"Tijuana"
    }
}
console.log(student,student1,student2);

document.write(`
<div class="student">
    <p>Name: ${student.name}</p>
    <p>Age: ${student.age}</p>
    <p>Country: ${student.address.country}<p>
</div>
`);
document.write(`
<div class="student">
    <p>Name: ${student1.name}</p>
    <p>Age: ${student1.age}</p>
    <p>Country: ${student1.address.country}<p>
</div>
`);
document.write(`
<div class="student">
    <p>Name: ${student2.name}</p>
    <p>Age: ${student2.age}</p>
    <p>Country: ${student2.address.country}<p>
</div>
`);

