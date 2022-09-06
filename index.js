let object1 = {name: "Rajith", uni: "Uva"}
let object2 = object1;

object2.uni = "Japura"

console.log(object1);
console.log(object2);

console.log("--------------shallow copy");

let object3 = {name: "Rajith", uni: "Uva"}
//let object4 = object1;
let object4 = {...object3}

object4.uni = "Japura"

console.log(object3);
console.log(object4);

console.log("--------------not deep copy");

let object5 = {
    name: "Rajith", 
    uni: "Uva",
    expert: {
        primary: "UI",
        secondary: "Front-End"
    }
    }
//let object4 = object1;
let object6 = {...object5}

object6.uni = "Japura";
object6.expert.primary = "Back-End";

console.log(object5);
console.log(object6);

console.log("--------------not deep copy - not woking for inside objects");

let object7 = {
    name: "Rajith", 
    uni: "Uva",
    expert: {
        primary: "UI",
        secondary: "Front-End"
    },
    addFunction: function(a, b){
        return a+b;
    }
    }
//let object4 = object1;
//let object8 = {...object7}
let object8 = JSON.parse(JSON.stringify(object7));

object8.uni = "Japura";
object8.expert.primary = "Back-End";

console.log(object7);
console.log(object8);

console.log("--------------not deep copy - not working for functions");

const _ = require('lodash');
let object9 = {
    name: "Rajith", 
    uni: "Uva",
    expert: {
        primary: "UI",
        secondary: "Front-End"
    },
    addFunction: function(a, b){
        return a+b;
    }
    }

let object10 = _.cloneDeep(object9);

object10.uni = "Japura";
object10.expert.primary = "Back-End";

console.log(object9);
console.log(object10);

console.log("------------deep copy");

