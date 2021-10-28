"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function sum(a, b) {
    return a + b;
}
sum(10, 20);
// Optional-parameters
// function sum(a:number, b:number, c?:number):number {
//     return a + b;
// }
// sum(10, 20)
// Return void, Never
function log(message) {
    console.log(message);
}
log("Hello");
function error() {
    throw new Error("Network Error");
}
