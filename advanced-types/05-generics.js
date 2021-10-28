"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function createItems(items) {
    return new Array().concat(items);
}
let numberArray = createItems([1, 2, 3]);
let stringArray = createItems(["Pavan", "David"]);
// function createItems<Type>(items:Type[]):Type[] {
//     return new Array().concat(items);
// }
// let numberArray = createItems<number>([1, 2, 3]);
// let stringArray = createItems<string>(["Pavan", "David"]);
