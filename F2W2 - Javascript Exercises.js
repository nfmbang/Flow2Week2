
//Opgave 1
// a:
var names = ["Lars","Bo","Jan","Frederik","Niels","Peter"]

function withA(name){
    return name.includes("a")
}

var sorted = names.filter(withA)

//console.log(sorted)

// b:
function reverseName(name){
    return name.split('').reverse().join("")
}

var reversed = names.map(reverseName)

//console.log(reversed)

// Opgave 2:

// a:

function myFilter(array, callback){
    var arr = []
    array.forEach(element=>{
        if(callback(element)){
            arr.push(element);
        } 
    });
    return arr;
}

var names = ["Lars","Bo","Jan","Frederik","Niels","Peter"]

var filtered = myFilter(names,withA)

//console.log(filtered)

// b:

function myMap(array, callback){
    var arr = [];
    array.forEach(element => {
        element = callback(element)
        arr.push(element)
    });
    return arr;
}

var names = ["Lars","Bo","Jan","Frederik","Niels","Peter"]

var reversed = myMap(names,reverseName)

//console.log(reversed)

// Opgave 3

Array.prototype.myFilter = function myFilter(callback){
    var arr = []
    this.forEach(element=>{
        if(callback(element)){
            arr.push(element);
        } 
    });
    return arr;
}

console.log(names.myFilter(withA));

Array.prototype.myMap = function myMap(callback){
    var arr = [];
    this.forEach(element => {
        element = callback(element)
        arr.push(element)
    });
    return arr;
}

console.log(names.myMap(reverseName))

// Opgave 4:

// a:

var numbers = [1,3,5,10,11];

var opg4 = numbers.map((element,index)=>{
    if(index+1<numbers.length){
        return element+numbers[index+1];
    } else{
        return element;
    }
});

console.log(opg4)

// b:
var names = ["Lars","Peter","Jan","Bo"];

var aed = names.map((element) => {
    return "<a href=\"\">"+element+"</a>"
}).join("");


var html = "<nav>"+aed+"</nav>";

console.log(html);


// c:
// Obs -> skal køres i en browser og pege på et div element.
var names = [{name:"Lars",phone:"1234567"},{name: "Peter",phone: "675843"}, {name: "Jan", phone: "98547"},{name: "Bo", phone: "79345"}];

var tb = document.createElement("table");

var header = table.insertRow(-1);
for (var i = 0; i < 2; i++) {
    var headerCell = document.createElement("TH");
    headerCell.innerHTML = names[0][i];
    row.appendChild(headerCell);
}

for (var n of names) {
    row = table.insertRow();
    row.insertCell(0).innerHTML = n.name;
    row.insertCell(1).innerHTML = n.phone; 
    }

var tbd = document.getElementById("tablediv");
tbd.innerHTML = "";
tbd.appendChild(table);

//d:
// Se opgaven ovenover.
