var student_string = '{"name" : "Nguyen Van Cuong", "age" : "26"}';
 
var student_obj = JSON.parse(student_string);
 
console.log('--OBJECT--');
console.log("Name: " + student_obj.name);
console.log("Age: " + student_obj.age);
 
console.log('--STRING--');
console.log(JSON.stringify(student_obj));