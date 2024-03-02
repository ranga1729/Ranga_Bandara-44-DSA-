"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const AVLTree_1 = __importDefault(require("./AVLTree"));
let avlObj = new AVLTree_1.default();
/*avlObj.insert(25);
avlObj.insert(85);
avlObj.insert(-5);
avlObj.insert(-52);
avlObj.insert(252);
avlObj.insert(42);
avlObj.insert(35);
avlObj.insert(100);*/
let marks1 = { "maths": 70, "science": 50 };
let marks2 = { "maths": 67, "science": 50 };
avlObj.insert(12345, marks1);
avlObj.insert(2346, marks2);
//avlObj.inOrderTraversal(avlObj.root); 
let heightOfTheTree = avlObj.getHeight(avlObj.root);
//console.log("Height of the tree: " + heightOfTheTree);
//console.log("Marks: " + avlObj.root?.marks);
console.log("isExist: " + avlObj.searchNode(avlObj.root, 12345));
console.log("isExist: " + avlObj.searchNode(avlObj.root, 2346));
