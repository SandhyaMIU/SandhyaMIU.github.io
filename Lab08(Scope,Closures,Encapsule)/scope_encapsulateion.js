
//Exercise-1
String.prototype.filter = function(...string){
    let strFilter = this.split(' ');
    
    strFilter = strFilter.filter((item) =>!string.includes(item)); 
    return strFilter.join(' ');
}
console.log("Exercise-1 " + "This house is not nice!".filter('not'));


//Exercise-2
Array.prototype.bubbleSort = function(){
    for(let j = 0; j < this.length;j++){
        for(let i = 0; i < this.length-j-1;i++){
            if(this[i] > this[i+1]){
                let temp = this[i];
                this[i] = this[i+1];
                this[i+1] = temp;
            }
        }
    }
    return this;
}
console.log("Exercise-2 " + [6,4,0,3,-2,1].bubbleSort());


//Exercise-3
var Person = function(){};
Person.prototype.initialize = function(name)
{
 this.name = name;
}

function Teacher(){};
Teacher.prototype = new Person();

Teacher.prototype.teach = function(subject){
    return `${this.name} is now teaching ${subject}`;
}
let teacher = new Teacher();
teacher.initialize("Smith");

console.log("Exercise-3 "+teacher.teach("WAP"));

// Exercise-4
var Person = function(){};
Person.prototype.initialize = function(name,age)
{
    this.name = name;
    this.age = age;
}

function Student(){};
Student.prototype = new Person();

Student.prototype.study = function(major){
    return `Hey, my name is ${this.name} and now I'm studying ${major}`;
}

let student = new Student();
student.initialize("Sandhya");
console.log("Exercise-4 " + student.study("WAP"));

function Professor(){};
Professor.prototype = new Person();

Professor.prototype.department = function(department){
    return `Good day, my name is ${this.name} and I'm in the ${department} department.`;
}
let professor = new Professor();
professor.initialize("Smith");
console.log(professor.department("Computer Science"));