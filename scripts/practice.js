console.log("Practice");
let array = [];

//object constructor
function Student(n,a,g){
    this.name = n;
    this.age = a;
    this.gender = g;
}

//creating a new obj
let student = new Student("Felix",98,"Male");
let student1 = new Student("Mario",98,"Male");
let student2 = new Student("Rafael",98,"Male");

array.push(student,student1,student2);

