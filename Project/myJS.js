/*var areaFun = function learn(length,width){
    var student = ["Messi", "Ronaldo", "Neymar"] //Working on Arrays
    var total = 10;
    for(var i=0; i<student.length; i++){
        console.log(student[i]);
    }
    if(1==1){
        console.log("We should see this");
    }
    return length*width;
}

var areaFun2 = function learn(length){
    var student = ["Messi", "Ronaldo", "Neymar"]
    var total = 10;
    for(var i=0; i<student.length; i++){
        console.log(student[i]);
    }
    if(1==1){
        console.log("We should see this");
    }
    return length*length;
}

var areas = [];

areas.push(areaFun);//Working on Arrays
areas.push(areaFun2);

var area = [];
area.push(areas[1](10,11));
area.push(areas[1](11));
area.push(areaFun(12,11));

console.log(area);


//Working with Object
console.log("Working with objects");
var student = {
    firstName: "john", 
    lastName: "john1", 
    age: 20,
    greetings: function(){
        return "Hi I'm "+this.firstName+"my age is "+this.age;
    }
};

console.log(student.firstName);
console.log(student["lastName"]);

//create a new empty obj
var students = new Object();
students.firstName = "John";
students.lastName = "John2";
students.age = 25;

var studentss = {};
studentss.firstName = "John";
studentss.lastName = "John3";
studentss.age = 22;



var std = [];
std.push(student);
std.push(studentss);
std.push(students);

console.log(std);
console.log(std[0].greetings);
for(var l=0;l<std.length;l++){
    console.log(std[l]);
}




function studentCommon(first, last, age){
    this.firstName = first;
    this.lastName = last;
    this.age = age;
    this.greetings = function(){
        return "Hi I'm " + this.firstName + " my age is " + this.age +".";
    };
}

var s1 = new studentCommon("John", "Micah", 23);
var s2 = new studentCommon("Joe", "Sagaya", 22);
var stdArr = [];
stdArr.push(s1);
stdArr.push(s2);
stdArr.push(new studentCommon("John1", "Micah", 12));

for(var i=0; i<stdArr.length; i++){
    console.log(stdArr[i].greetings());
}

for(var key in stdArr[0]){
    console.log(stdArr[0][key])
}*/

//Working with Bind

