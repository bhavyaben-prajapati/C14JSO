var student = {
  name:"bhavya", 
  class:7,
  roll:7,
  favouriteSubject:"visual arts",
  marks:[32,23,56,76,12,74,32,56,10]
}



function setup() {
  createCanvas(400, 400);
  console.log(student.name)
  console.log(student.roll)
  student.roll = 12
  console.log(student.roll)
  console.log(student.marks[0])
}


function draw() {
  background(220,10,150);
}