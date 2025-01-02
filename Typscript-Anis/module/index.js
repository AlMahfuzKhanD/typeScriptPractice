"use strict";
// let studentName: string = "Al Mahfuz";
// let studentAge: number = 25;
// import { studentName as name, studentAge } from "./student";
// function displayInfo(): void {
//   console.log(`${name}, ${studentAge}`);
// }
Object.defineProperty(exports, "__esModule", { value: true });
// displayInfo();
var userClass_1 = require("./userClass");
var user1 = new userClass_1.User("Al Mahfuz", 23);
user1.display();
