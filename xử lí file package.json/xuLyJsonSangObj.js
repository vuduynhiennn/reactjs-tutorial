let students = '{"name": "Vu Duy Nhien", "class": 12, "friends": "No"}';
var studentsOBJ = JSON.parse(students);
console.log("i am" + " " + studentsOBJ.name);
console.log("now i am at" + " " + studentsOBJ.class);