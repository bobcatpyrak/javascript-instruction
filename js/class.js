"option strict" //turns off ability to create variables without saying let

class Student
{
    name;
    favcolor;
    favnumber;


    constructor(name, favcolor, favnumber)
    {
        this.name = name;
        this.favcolor = favcolor;
        this.favnumber = favnumber;
    }

    log() // JavaScript MUST USE this. for properties or methods within a class
    {
        console.log(`Student: ${this.name}, ${this.favcolor}, ${this.favnumber}`);
    }
}

let students = [
    new Student("Fred", "blue", 9),
    new Student("Wilma", "red", 1),
    new Student("Barney", "blue", 7),
    new Student("Betty", "orange", 3),
    new Student("Pebbles", "pink", 2)
];

const makeTable = () =>
{
    let tbody = document.getElementById("tbody");
    tbody.innerHTML = "";
    for(let s of students)
    {
        tbody.innerHTML += `<tr><th scope="row">${s.name}</th><td>${s.favcolor}</td><td>${s.favnumber}</td></tr>`;
    }
}

const addStudent = () =>
{
    let newName = document.getElementById("newName").value;
    let newColor = document.getElementById("newColor").value;
    let newNumber = document.getElementById("newNumber").value;
    if (newName != "" && newColor != "" && newNumber != "")
    {
        stud = new Student(newName, newColor, newNumber);
        students.push(stud);
    }
}