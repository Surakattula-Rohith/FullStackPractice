"use strict";
console.log("Hello");
let age = 123456789;
let n; // type is any
n = 1;
n = "hi";
let num = [1, 2, 4];
num.forEach(n => n.toString());
//tuple
let user = [1, "Rohith"];
console.log(user[0] + " " + user[1]);
//enums
var size;
(function (size) {
    size[size["Small"] = 1] = "Small";
    size[size["Medium"] = 2] = "Medium";
    size[size["Large"] = 3] = "Large";
})(size || (size = {}));
let mySize = size.Medium;
console.log(mySize);
//functions
function cal(a, b) {
    console.log(b);
    if (typeof b == "number") {
        return a * b;
    }
    return a * 2;
}
console.log(10, 20);
console.log(100);
//Objects
let emp = {
    id: 0,
    name: "Rohith"
};
let textBox = {
    drag: () => { },
    resize: () => { }
};
